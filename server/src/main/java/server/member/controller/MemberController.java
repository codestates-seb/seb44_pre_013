package server.member.controller;


import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.auth.interceptor.JwtParseInterceptor;
import server.member.dto.MemberDto;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;
import server.response.MultiResponseDto;
import server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService,
                            MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member createdMember = memberService.createMember(mapper.memberPostToMember(requestBody));
        MemberResponse memberResponse = new MemberResponse(createdMember.getMemberId(), createdMember.getEmail());

        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getMemberId());

        return ResponseEntity.created(location).body(memberResponse);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);
        Member updateMember = memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(mapper.memberToMemberResponse(updateMember), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@Positive @RequestParam(required = false) Integer page,
                                    @RequestParam(required = false) Integer size) {

        if (page == null) {
            page = 1;
        }

        if (size == null) {
            size = 10;
        }

        Page<Member> pageMembers = memberService.findMembers(page -1, size);
        List<Member> members = pageMembers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.membersToMemberResponses(members), pageMembers),
                HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@Positive @PathVariable("member-id") long memberId) {
        long authenticationMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        memberService.deleteMember(memberId, authenticationMemberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/mypage/{member-id}")
    public ResponseEntity getMemberMyPage(@Positive @PathVariable("member-id") long memberId) {

        return new ResponseEntity<>(mapper.memberToMyPage
                (memberService.findMember(memberId)), HttpStatus.OK);
    }
}

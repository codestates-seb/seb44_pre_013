package server.member.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import server.member.dto.MemberDto;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {

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

        URI location = UriComponentsBuilder
                .newInstance()
                .path("/{member-id}")
                .buildAndExpand(createdMember.getMemberId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);
        Member updateMember = memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity(mapper.memberToMemberResponse(updateMember), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteMember(@PathVariable("user-id") @Positive long memberId,
                                       @Valid @RequestBody MemberDto.Delete requestBody) {
        requestBody.setMemberId(memberId);
        memberService.deleteMember(mapper.memberDeleteToMember(requestBody));

        return new ResponseEntity(HttpStatus.OK);
    }
}
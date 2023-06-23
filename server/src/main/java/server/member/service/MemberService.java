package server.member.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import server.answer.repository.AnswerRepository;
import server.answer.service.AnswerService;
import server.auth.utils.CustomAuthorityUtils;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.repository.MemberRepository;
import server.question.repository.QuestionRepository;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final AnswerService answerService;
    private final CustomAuthorityUtils authorityUtils;


    public MemberService(MemberRepository memberRepository,
                         MemberMapper memberMapper,
                         PasswordEncoder passwordEncoder,
                         QuestionRepository questionRepository,
                         AnswerService answerService,
                         AnswerRepository answerRepository,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.passwordEncoder = passwordEncoder;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
        this.answerService = answerService;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(passwordEncoder.encode(password)));

        return memberRepository.save(findMember);
    }



    public Member findMember(long memberId) {
        Member member = findVerifiedMember(memberId);
        return findVerifiedMember(memberId);
    }
    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    public Member findMember(String email) {
        return memberRepository.findByEmail(email).get();
    }

    public void deleteMember(long memberId, long authenticationMemberId) {
        checkVerifiedId(authenticationMemberId);
        Member findedMember = findVerifiedMember(memberId);
        deletePermission(findedMember, authenticationMemberId);
        memberRepository.delete(findedMember);
    }

    public boolean isVerifyExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if (optionalMember.isEmpty()) {
            Member member = new Member();
            member.setEmail(email);
            member.setName("MEMBER_" + System.currentTimeMillis());
            member.setPassword(email + System.currentTimeMillis());
            createMember(member);
            return false;
        }
        return true;
    }

    private Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Member Not Found"));
        return findMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Member Exists");
    }

    public Member findMemberById(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Member Not Found"));
    }

    private void checkVerifiedId(long authenticationMemeberId) {
        if (authenticationMemeberId == -1) throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED);
    }

    private void patchPermission(Member member, long authenticationMemberId) {
        if (!member.getMemberId().equals(authenticationMemberId) && !member.getEmail().equals("admin@gmail.com")) {
            throw new BusinessLogicException(ExceptionCode.ONLY_AUTHOR);
        }
    }

    private void deletePermission(Member member, long authenticationMemberId) {
        if (!member.getMemberId().equals(authenticationMemberId) && !member.getEmail().equals("admin@gmail.com")) {
            throw new BusinessLogicException(ExceptionCode.ONLY_AUTHOR);
        }
    }

    public Member updateMyPage(Member member, long authenticationMemberId) {
        checkVerifiedId(authenticationMemberId);
        Member findedMember = findVerifiedMember(member.getMemberId());
        verifyExistsEmail(member.getEmail());

        patchPermission(findedMember, authenticationMemberId);

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findedMember.setName(member.getName()));
        Optional.ofNullable(member.getMyPageTitle())
                .ifPresent(myPageTitle -> findedMember.setMyPageTitle(member.getMyPageTitle()));
        Optional.ofNullable(member.getAboutMe())
                .ifPresent(aboutMe -> findedMember.setAboutMe(member.getAboutMe()));
        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> findedMember.setEmail(member.getEmail()));

        findedMember.setModifiedAt(member.getModifiedAt());

        return memberRepository.save(findedMember);
    }

}

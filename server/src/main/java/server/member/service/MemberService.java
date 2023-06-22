package server.member.service;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;
    private final PasswordEncoder passwordEncoder;


    public MemberService(MemberRepository memberRepository, MemberMapper memberMapper
                         ,PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

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

    public void deleteMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());
        member.setStatus(Member.Status.MEMBER_DELETED);

        memberRepository.save(findMember);
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
}

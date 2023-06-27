package server.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
    Member findByMemberId(Long memberId);
}

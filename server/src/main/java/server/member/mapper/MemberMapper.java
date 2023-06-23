package server.member.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import server.member.dto.MemberDto;
import server.member.entity.Member;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    default Member memberPostToMember(MemberDto.Post requestBody) {
        if (requestBody == null) {
            return null;
        }

        Member member = new Member();

        member.setName(requestBody.getName());
        member.setEmail(requestBody.getEmail());
        member.setPassword(requestBody.getPassword());

        return member;
    }

    default Member memberPatchToMember(MemberDto.Patch requestBody) {
        if (requestBody == null) {
            return null;
        }

        Member member = new Member();

        member.setName(requestBody.getName());
        member.setMemberId(requestBody.getMemberId());
        member.setPassword(requestBody.getPassword());
        member.setEmail(requestBody.getEmail());

        return member;
    }

    default Member memberDeleteToMember(MemberDto.Delete requestBody) {
        if (requestBody == null) {
            return null;
        }

        Member member = new Member();

        member.setMemberId(requestBody.getMemberId());
        member.setEmail(requestBody.getEmail());

        return member;
    }

    default MemberDto.Response memberToMemberResponse(Member member) {
        if (member == null) {
            return null;
        }

        long memberId = 0L;
        String name = null;
        String email = null;
        String password = null;

        if (member.getMemberId() != null) {
            memberId = member.getMemberId();
        }

        name = member.getName();
        email = member.getEmail();
        password = member.getPassword();

        MemberDto.Response response = new MemberDto.Response(memberId, email, name, password);

        return response;
    }
}

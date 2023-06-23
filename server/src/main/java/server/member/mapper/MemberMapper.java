package server.member.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.member.dto.MemberDto;
import server.member.entity.Member;
import server.question.dto.QuestionDto;
import server.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

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

    default MemberDto.ResponseForList memberToMemberResponseForList(Member member) {
        return MemberDto.ResponseForList.builder()
                .memberId(member.getMemberId())
                .name(member.getName())
                .build();

    }

    default List<MemberDto.ResponseForList> membersToMemberResponses(List<Member> members) {
        return members.stream()
                .map(member -> memberToMemberResponseForList(member))
                .collect(Collectors.toList());
    }

    default MemberDto.ResponseMyPage memberToMyPage(Member member) {
        return MemberDto.ResponseMyPage.builder()
                .memberId(member.getMemberId())
                .answers(getAnswerToMember(member.getAnswers()))
                .questions(getQuestionToMember(member.getQuestions()))
                .myPageTitle(member.getMyPageTitle())
                .aboutMe(member.getAboutMe())
                .modifiedAt(member.getModifiedAt())
                .name(member.getName())
                .createAt(member.getCreatedAt())
                .build();
    }

    default List<QuestionDto.Response> getQuestionToMember(List<Question> question) {
        return question.stream()
                .map(questionList -> QuestionDto.Response.builder()
                        .questionId(questionList.getQuestionId())
                        .title(questionList.getTitle())
                        .build())
                .collect(Collectors.toList());

    }

    default List<AnswerResponseDto> getAnswerToMember(List<Answer> answer) {
        return answer.stream()
                .map(answerList -> AnswerResponseDto.builder()
                        .questionId(answerList.getQuestion().getQuestionId())
                        .answerId(answerList.getAnswerId())
                        .content(answerList.getContent())
                        .build())
                .collect(Collectors.toList());
    }

}




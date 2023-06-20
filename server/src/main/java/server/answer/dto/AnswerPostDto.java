package server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.member.entity.MemberEntity;
import server.question.entity.QuestionEntity;

import javax.validation.constraints.NotBlank;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPostDto {
    private long memberId;
    private long questionId;
    @NotBlank
    private String content;
    public QuestionEntity getQuestion() {
        QuestionEntity question = new QuestionEntity();
        question.setQuestionId(questionId);

        return question;
    }

    public MemberEntity getMember() {
        MemberEntity member = new MemberEntity();
        member.setMemberId(memberId);

        return member;
    }
}

package server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.member.entity.Member;
import server.question.entity.Question;

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

    public Question getQuestion() {
        Question question = new Question();
        question.setQuestionId(questionId);

        return question;
    }

    public Member getMember() {
        Member member = new Member();
        member.setMemberId(memberId);

        return member;
    }
}


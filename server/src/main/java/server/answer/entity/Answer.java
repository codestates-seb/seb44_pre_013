package server.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import server.audit.Auditable;
import server.member.entity.MemberEntity;
import server.question.entity.QuestionEntity;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Answer extends Auditable {
    public long getMemberId() {
        return member.getMemberId();
    }
    public long getQuestionId(){
        return question.getQuestionId();
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;
    @Column(length = 5000, nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private MemberEntity member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private QuestionEntity question;
}

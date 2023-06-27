package server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.answer.entity.Answer;
import server.audit.Auditable;
import server.member.entity.Member;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 2000, nullable = false)
    private String content;

    @Column(nullable = false)
    private int viewCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
        if (!this.member.getQuestions().contains(this)) {
            this.member.getQuestions().add(this);
        }
    }

    public void setAnswer(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }
}

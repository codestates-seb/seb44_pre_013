package server.member.entity;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import server.answer.entity.Answer;
import server.audit.Auditable;
import server.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Member extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column
    @NonNull
    private String name;

    @Column(updatable = false, unique = true)
    @NonNull
    private String email;

    @Column
    @NonNull
    private String password;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Status status = Status.MEMBER_ACTIVE;

    public enum Status {
        MEMBER_ACTIVE("활동 회원"),
        MEMBER_DELETED("탈퇴 회원");

        @Getter
        private String status;

        Status(String status) {

            this.status = status;
        }
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    public void addQuestion(Question question) {
        this.questions.add(question);
    }
}
package server.member.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.answer.entity.Answer;
import server.audit.Auditable;
import server.question.entity.Question;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(length = 10, nullable = false)
    private String name;

    @Column(length = 20, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    private String myPageTitle;

    private String aboutMe;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Status status = Status.MEMBER_ACTIVE;

    public Member(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public enum Status {
        MEMBER_ACTIVE("활동 회원"),
        MEMBER_DELETED("탈퇴 회원");

        @Getter
        private final String status;

        Status(String status) {
            this.status = status;
        }
    }

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    public void addQuestion(Question question) {
        this.questions.add(question);
    }
}
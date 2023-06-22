package server.member.entity;

<<<<<<< HEAD
public class Member extends Auditable {

=======
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Member {

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

    // @CreatedDate
    // @Column(name = "created_at")
    // private LocalDateTime createdAt;

    // @LastModifiedDate
    // @Column(name = "modified_at")
    // private LocalDateTime modifiedAt;

    public enum Status {
        MEMBER_ACTIVE("활동 회원"),
        MEMBER_DELETED("탈퇴 회원");

        @Getter
        private String status;

        Status(String status) {
            this.status = status;
        }
    }
>>>>>>> dev-be
}
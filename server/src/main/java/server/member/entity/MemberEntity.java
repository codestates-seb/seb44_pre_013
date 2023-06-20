package server.member.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MEMBER")
public class MemberEntity {
    @Id
    private Long memberId=1L;

    private String name;

    private String email;

    private String password;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
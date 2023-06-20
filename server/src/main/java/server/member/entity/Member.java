package server.member.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import server.answer.entity.Answer;
import server.audit.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "MEMBER")
public class Member extends Auditable {
    /*
    @Id
    private Long memberId=1L;

    private String name;

    private String email;

    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();
     */
}
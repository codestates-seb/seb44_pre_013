package server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

        @NotBlank
        private String name;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;
        private String email;
        private String name;
        private String password;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Delete {
        private long memberId;
        private String email;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long memberId;
        private String name;
        private String email;
        private String password;
    }
}
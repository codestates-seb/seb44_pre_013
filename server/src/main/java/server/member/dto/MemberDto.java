package server.member.dto;

import lombok.*;
import server.answer.dto.AnswerResponseDto;
import server.question.dto.QuestionDto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

import java.util.List;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @NotBlank
        private String name;

        @Email
        @NotBlank
        @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$",
                message = "올바른 이메일 구성이 아닙니다.")
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

    @Getter
    @Builder
    public  static class ResponseForList {
        private Long memberId;
        private String name;
    }

    @Getter
    @Builder
    public static class ResponseMyPage {
        private Long memberId;
        private String name;
        private String myPageTitle;
        private String aboutMe;
        private LocalDateTime createAt;
        private LocalDateTime modifiedAt;
        private List<QuestionDto.Response> questions;
        private List<AnswerResponseDto> answers;
    }
}

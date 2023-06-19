package server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Post {
        private long memberId;
        private long questionId;
        @NotBlank
        private String content;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class Patch {
        private long answerId;
        @NotBlank
        private String content;
    }
    @Getter
    @AllArgsConstructor
    public class Response{
        private long answerId;
        private long questionId;
        private long memberId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }

}

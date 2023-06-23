package server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import server.answer.dto.AnswerResponseDto;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank(message = "제목은 필수로 입력해야 합니다.")
        private String title;

        @NotBlank(message = "내용은 필수로 입력해야 합니다.")
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        private long questionId;

        @NotBlank(message = "제목은 필수로 입력해야 합니다.")
        private String title;

        @NotBlank(message = "내용은 필수로 입력해야 합니다.")
        private String content;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private long questionId;
        private long memberId;
        private String title;
        private String content;
        private int viewCount;
        private List<AnswerResponseDto> answers;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
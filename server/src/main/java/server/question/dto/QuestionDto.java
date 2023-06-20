package server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import server.answer.dto.AnswerDto;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "제목은 필수로 입력해야 합니다.")
        private String title;

        @NotBlank(message = "내용은 필수로 입력해야 합니다.")
        private String content;
    }

    @Getter
    public static class Patch {
        private long questionId;

        @NotBlank(message = "제목은 필수로 입력해야 합니다.")
        private String title;

        @NotBlank(message = "내용은 필수로 입력해야 합니다.")
        private String content;
    }

    @Getter
    @Builder
    public static class Response {
        private long questionId;
        private long memberId;
        private String title;
        private String content;
        private int viewCount;
        private List<AnswerDto.Response> answers;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}


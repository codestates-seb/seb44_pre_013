package server.answer.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long questionId;
    private long memberId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    @Getter
    @Builder
    @AllArgsConstructor
    public static class AnswerMemberResponseForList {
        private long questionId;
        private long answerId;
        private String content;
    }
}

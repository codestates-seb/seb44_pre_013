package server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.answer.entity.Answer;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    //private long questionId;
    // private long memberId;
    private String content;
    //private List<AnswerResponseDto> answers;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}

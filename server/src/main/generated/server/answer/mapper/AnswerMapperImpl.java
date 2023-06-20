package server.answer.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.answer.dto.AnswerPatchDto;
import server.answer.dto.AnswerPostDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-20T17:50:02+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11 (Oracle Corporation)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setCreatedAt( answer.getCreatedAt() );
        answerResponseDto.setModifiedAt( answer.getModifiedAt() );

        return answerResponseDto;
    }
}

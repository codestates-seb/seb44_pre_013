package server.answer.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.answer.dto.AnswerPatchDto;
import server.answer.dto.AnswerPostDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-25T01:24:08+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.19 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setContent( answerPostDto.getContent() );
        answer.setMember( answerPostDto.getMember() );
        answer.setQuestion( answerPostDto.getQuestion() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( answerPatchDto.getAnswerId() );
        answer.setContent( answerPatchDto.getContent() );

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto.AnswerResponseDtoBuilder answerResponseDto = AnswerResponseDto.builder();

        answerResponseDto.answerId( answer.getAnswerId() );
        answerResponseDto.questionId( answer.getQuestionId() );
        answerResponseDto.memberId( answer.getMemberId() );
        answerResponseDto.content( answer.getContent() );
        answerResponseDto.createdAt( answer.getCreatedAt() );
        answerResponseDto.modifiedAt( answer.getModifiedAt() );

        return answerResponseDto.build();
    }

    @Override
    public List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }
}

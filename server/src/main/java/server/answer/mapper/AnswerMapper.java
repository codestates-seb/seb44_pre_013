package server.answer.mapper;

import org.mapstruct.Mapper;
import server.answer.dto.AnswerDto;
import server.answer.entity.AnswerEntity;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerEntity PostToAnswerEntity(AnswerDto.Post post);
    AnswerEntity PatchToAnswerEntity(AnswerDto.Patch patch);
    AnswerDto.Response answerEntitiytoResponse(AnswerEntity answerEntity);
}

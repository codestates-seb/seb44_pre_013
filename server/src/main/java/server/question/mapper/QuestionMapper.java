package server.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import server.question.dto.QuestionDto;
import server.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);

    Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody);

    @Mapping(source = "member.memberId", target = "memberId")
    QuestionDto.Response questionToQuestionResponseDto(Question question);

    @Mapping(source = "answers", target = "answers", ignore = true)
    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);
}
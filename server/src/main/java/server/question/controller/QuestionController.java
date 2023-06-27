package server.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.auth.interceptor.JwtParseInterceptor;
import server.question.dto.QuestionDto;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.service.QuestionService;
import server.response.MultiResponseDto;
import server.response.SingleResponseDto;
import server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping("/ask")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody) {
        long authenticatedMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(requestBody), authenticatedMemberId);

        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("question-id") long questionId,
                                        @Valid @RequestBody QuestionDto.Patch requestBody) {
        long authenticatedMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        requestBody.setQuestionId(questionId);
        Question findQuestion = questionService.updateQuestion(questionMapper.questionPatchDtoToQuestion(requestBody), authenticatedMemberId);

        return ResponseEntity.ok(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(findQuestion)));
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question findQuestion = questionService.findQuestion(questionId);

        return ResponseEntity.ok(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(findQuestion)));
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return ResponseEntity.ok(new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions), pageQuestions));
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        long authenticationMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        questionService.deleteQuestion(questionId, authenticationMemberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
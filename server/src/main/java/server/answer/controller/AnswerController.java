package server.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import server.answer.dto.AnswerPatchDto;
import server.answer.dto.AnswerPostDto;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.answer.mapper.AnswerMapper;
import server.answer.service.AnswerService;
import server.response.SingleResponseDto;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private static final String ANSWER_DEFAULT_URL = "/answers";
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        URI location =
                UriComponentsBuilder
                        .newInstance()
                        .path(ANSWER_DEFAULT_URL + "/{answer-id}")
                        .buildAndExpand(answer.getAnswerId())
                        .toUri();

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId) {
        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswer() {
        List<Answer> answers = answerService.findAnswers();
        List<AnswerResponseDto> responses = mapper.answersToAnswerResponseDtos(answers);

        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

package server.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.answer.dto.AnswerDto;
import server.answer.service.AnswerService;

import javax.validation.Valid;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private final AnswerService answerService;

    public AnswerController(AnswerService answerService){
        this.answerService=answerService;
    }
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.post answerPostDto){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PatchMapping("/{answer-id]")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerDto.patch answerPatchDto){
        answerPatchDto.setAnswerId(answerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id")long answerId){
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id")long answerId) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    }

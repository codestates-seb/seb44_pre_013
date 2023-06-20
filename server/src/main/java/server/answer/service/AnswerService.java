package server.answer.service;

import org.springframework.stereotype.Service;
import server.answer.dto.AnswerResponseDto;
import server.answer.entity.Answer;
import server.answer.repository.AnswerRepository;
import server.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    public AnswerService (AnswerRepository answerRepository){
        this.answerRepository=answerRepository;
    }
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }
    public Answer updateAnswer(Answer answer){
        return answerRepository.save(answer);
    }
    //public Answer findAnswer(long answerId){

    //}

    public void deleteAnswer(long answerId){
    }
    //private Answer findVerifiedOrder(long answerId) {
       // Optional<Answer> optionalOrder = answerRepository.findById(answerId);
        //Answer findOrder =
          //      optionalOrder.orElseThrow(() ->
            //            new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        //return optionalOrder;
    //}
}

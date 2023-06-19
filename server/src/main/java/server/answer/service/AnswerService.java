package server.answer.service;

import server.answer.entity.AnswerEntity;

import java.util.List;

public class AnswerService {
    public AnswerEntity createAnswer(AnswerEntity answerEntity){
        AnswerEntity createdAnswer = answerEntity;
        return createdAnswer;
    }
    public AnswerEntity updateAnswer(AnswerEntity answerEntity){
        AnswerEntity updatedAnswer = answerEntity;
        return updatedAnswer;
    }
    public AnswerEntity findAnswer(long answerId){
        AnswerEntity answerEntity =
                new AnswerEntity(answerId,"hi");
        return answerEntity;
    }
    public List<AnswerEntity> findAnswers() {
        List<AnswerEntity> answers = List.of(
                new AnswerEntity(1, "HI"),
                new AnswerEntity(2, "no")
        );
        return answers;
    }
    public void deleteAnswer(long answerId){

    }
}

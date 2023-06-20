package server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.answer.entity.Answer;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
    //Optional<Answer> findByAnswer(long answerId);
}

package server.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import server.exception.BusinessLogicException;
import server.exception.ExceptionCode;
import server.member.entity.Member;
import server.member.repository.MemberRepository;
import server.member.service.MemberService;
import server.question.entity.Question;
import server.question.repository.QuestionRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService, MemberRepository memberRepository) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }

    public Question createQuestion(Question question, long authenticatedMemberId) {
        Member findMember = memberService.findMemberById(authenticatedMemberId);
        question.setMember(findMember);

        Question createdQuestion = questionRepository.save(question);
        findMember.addQuestion(createdQuestion);
        memberRepository.save(findMember);

        return createdQuestion;
    }

    public Question updateQuestion(Question question, long authenticatedMemberId) {
        Member findMember = memberService.findMemberById(authenticatedMemberId);
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        checkChangeQuestion(findQuestion, findMember);
        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getContent()).ifPresent(findQuestion::setContent);

        findQuestion.setModifiedAt(question.getModifiedAt());

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setViewCount(findQuestion.getViewCount() + 1);

        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    public void deleteQuestion(long questionId, long authenticationMemberId) {
        Member findMember = memberService.findMemberById(authenticationMemberId);
        Question findQuestion = findVerifiedQuestion(questionId);
        checkChangeQuestion(findQuestion, findMember);

        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        return optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    private void checkChangeQuestion(Question question, Member member) {
        if (!question.getMember().getMemberId().equals(member.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
        }
    }
}

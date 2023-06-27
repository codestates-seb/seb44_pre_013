import authInstance from './ApiController';

export const getAllAnswerAPI = async () => {
  return await authInstance.get(`/answers`);
};

export const createAnswerAPI = async (data: {
  memberId: string | null | undefined;
  questionId: string | undefined;
  content: string;
}) => {
  return await authInstance.post(`/answers`, data);
};

export const modifyAnswerAPI = async (answerId: number, data: { content: string }) => {
  return authInstance.patch(`/answers/${answerId}`, data);
};

export const deleteAnswerAPI = async (answerId: number) => {
  return await authInstance.delete(`/answers/${answerId}`);
};

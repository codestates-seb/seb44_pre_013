import authInstance from './ApiController';

export const getAllQuestionAPI = () => {
  return;
};

export const getQuestionAPI = async (questionId: string | undefined) => {
  return await authInstance.get(`/questions/${questionId}`).then((response) => response.data);
};

export const createQuestionAPI = async (data: { title: string; content: string }) => {
  return await authInstance.post(`/questions/ask`, data);
};

export const modifyQuestionAPI = async (
  questionId: string | undefined,
  data: { title: string; content: string }
) => {
  return await authInstance.patch(`/questions/edit/${questionId}`, data);
};

export const deleteQuestionAPI = async (questionId: string | undefined) => {
  return await authInstance.delete(`/questions/${questionId}`);
};

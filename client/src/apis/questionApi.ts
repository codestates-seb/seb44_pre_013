import axios from 'axios';

import { config } from '../utils/axiosConfig';

// 서버에서 전체 글 받아오는 axios 함수 호출
export const getAllQuestionAPI = () => {
  return;
};

export const getQuestionAPI = async (questionId: string | undefined) => {
  return await axios
    .get(`${import.meta.env.VITE_SERVER_URL}/questions/${questionId}`)
    .then((response) => response.data);
};

export const createQuestionAPI = async (data: { title: string; content: string }) => {
  return await axios.post(`${import.meta.env.VITE_SERVER_URL}/questions/ask`, data, config);
};

export const modifyQuestionAPI = async (
  questionId: string | undefined,
  data: { title: string; content: string }
) => {
  return await axios.patch(
    `${import.meta.env.VITE_SERVER_URL}/questions/edit/${questionId}`,
    data,
    config
  );
};

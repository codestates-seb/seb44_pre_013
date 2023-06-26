import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IDataType {
  icon?: IconDefinition;
  size?: string;
  postId?: number;
  subtitle?: string;
  content?: string;
  subContent?: string;
}

export interface IQuestion {
  title: string;
  problemContent: string;
  expectContent: string;
  tags: string[];
}

export interface IRequestData {
  title: string;
  content: string;
  tags: string;
}

export interface IUserInfo {
  memberId: number;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  modifiedAt: string;
}
export interface IResponseQuestionsData {
  title: string;
  content: string;
  member: IUserInfo;
  questionId: number;
  viewCount: string;
  modifiedAt: string;
}

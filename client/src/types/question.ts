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
export interface IQuestionsData {
  title?: string;
  content?: string;
  memberId?: string;
  member?: IUserInfo;
  questionId?: string;
  viewCount?: string;
  modifiedAt?: string;
}

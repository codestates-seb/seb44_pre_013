import { IUserInfo } from './question';

export interface IAnswer {
  answerId: number;
  content: string;
  createdAt: string;
  modifiedAt: string;
  member?: IUserInfo;
}

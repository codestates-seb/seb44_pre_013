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

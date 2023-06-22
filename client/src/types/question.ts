import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface DataType {
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

export const ContentType = {
  title: 'title',
  problemForm: 'problemForm',
  expectingForm: 'expectingForm',
  tags: 'tags',
};

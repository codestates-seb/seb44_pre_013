import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import { styled } from 'styled-components';

import Label from '../../../components/ui/label/Label';
import { Input } from '../../../components/ui/input/Input';

interface IProps {
  tags: string[];
  tagValue: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  handleUpdateTagValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTag: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleDeleteTag: (tag: string) => void;
}

const Tags = ({
  tags,
  tagValue,
  onClick,
  handleUpdateTagValue,
  handleAddTag,
  handleDeleteTag,
}: IProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <Container onClick={onClick} data-type="tags-form">
      <Label type="title" content="Tags" htmlFor="tags" />
      <Label
        type="content"
        content="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
        htmlFor="tags"
      />
      <TagContainer $highlight={focus} id="tag-container">
        {tags?.map((tag: string, idx: number) => (
          <SpanContainer key={idx}>
            <Tag>
              {tag}
              <DeleteButton onClick={() => handleDeleteTag(tag)}>&#10006;</DeleteButton>
            </Tag>
          </SpanContainer>
        ))}
        <Input
          type="text"
          value={tagValue}
          width="20%"
          border="none"
          padding="0.7rem"
          onChange={handleUpdateTagValue}
          onKeyDown={handleAddTag}
          onFocus={handleFocus}
          onBlur={handleBlur}
          focusmode="false"
        />
      </TagContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #e0e2e2;
  margin-top: 1rem;

  & > label {
    margin: 0.125rem 0 0.125rem 0;
  }

  & > label:nth-child(2) {
    margin-bottom: 0.675rem;
  }
`;

const TagContainer = styled.div<{ $highlight?: boolean }>`
  border: 1px solid #c1c3c3;
  border-radius: 3px;
  padding: 0 0.3rem;
  border: ${(props) => props.$highlight && '1px solid #0077ff'};
  box-shadow: ${(props) => props.$highlight && '0px 0px 5px 3px rgba(46, 139, 245, 0.3)'};
  outline: ${(props) => props.$highlight && 'none'};
`;

const SpanContainer = styled.span`
  background-color: #e1ecf4;
  margin: 0.125rem;
  padding: 0.125rem 0.5rem 0.195rem;
  border: 1px solid #e8ecee;
  border-radius: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.85rem;
  color: #39739e;
`;

const DeleteButton = styled.button`
  color: #39739e;
  margin-left: 0.45rem;
  padding: 0.135rem 0.195rem;
  &:hover {
    color: #fff;
    background-color: #39739e;
    padding: 0.125rem 0.195rem;
    border-radius: 0.135rem;
  }
`;

export default Tags;

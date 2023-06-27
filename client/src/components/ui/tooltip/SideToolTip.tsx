import { styled } from 'styled-components';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faMessage, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import Tooltip from '../../../components/ui/tooltip/Tooltip';
export interface IToolTipDataType {
  icon?: IconDefinition;
  size?: string;
  postId?: number;
  subtitle?: string;
  content?: string;
  subContent?: string;
}

const blogData: IToolTipDataType[] = [
  {
    icon: faPencil,
    size: 'sm',
    content: 'To improve as an engineer, get better at requesting (and receiving) feedback ',
  },
  { icon: faPencil, size: 'sm', content: 'Stack Exchange Network Outage – June 15, 2023' },
];

const featuredOnMetaData: IToolTipDataType[] = [
  { icon: faMessage, size: 'sm', content: 'Statement from SO: June 5, 2023 Moderator Action' },
  { icon: faMessage, size: 'sm', content: 'Stack Exchange Network Outage – June 15, 2023' },
  {
    icon: faLayerGroup,
    size: 'sm',
    content: 'Does the policy change for AI-generated content affect users who (want to)',
  },
  {
    icon: faLayerGroup,
    size: 'sm',
    content: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned',
  },
];

const hotMetaPost: IToolTipDataType[] = [
  {
    postId: 3,
    content: 'How should non-English answers with code be handled in the Low Quality...',
  },
  { postId: 7, content: 'Stack Exchange Network Outage – June 15, 2023' },
  {
    postId: 10,
    content: 'Does the policy change for AI-generated content affect users who (want to)',
  },
  { postId: 27, content: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned' },
];

const renderContent = (data: IToolTipDataType[]) => {
  return (
    <TooltipContentStyle>
      {data?.map((item, idx) => (
        <div key={idx}>
          {item.icon && <FontAwesomeIcon icon={item.icon} size={item.size as SizeProp} />}
          <p>{item.content}</p>
        </div>
      ))}
    </TooltipContentStyle>
  );
};

const SideToolTip = () => {
  return (
    <Container>
      <Tooltip title="The Overflow Blog">{renderContent(blogData)}</Tooltip>
      <Tooltip title="The Overflow Blog">{renderContent(featuredOnMetaData)}</Tooltip>
      <Tooltip title="The Overflow Blog">{renderContent(hotMetaPost)}</Tooltip>
    </Container>
  );
};

const Container = styled.div``;

const TooltipContentStyle = styled.div<{ $theme?: string }>`
  color: #3b4045;
  font-size: 0.813rem;
  & > div {
    display: flex;
    & svg {
      color: #3b4045;
      margin-right: 0.5rem;
    }
  }
  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default SideToolTip;

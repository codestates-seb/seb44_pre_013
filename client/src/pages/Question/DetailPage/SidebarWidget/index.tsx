import styled from 'styled-components';
import {
  faPencil,
  faMessage,
  faLayerGroup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import Tooltip from '../../../../components/ui/tooltip/Tooltip';

export interface DataType {
  icon?: IconDefinition;
  postId?: number;
  content: string;
}

const featuredOnMetaData: DataType[] = [
  { icon: faMessage, content: 'Statement from SO: June 5, 2023 Moderator Action' },
  { icon: faMessage, content: 'Stack Exchange Network Outage – June 15, 2023' },
  {
    icon: faLayerGroup,
    content: 'Does the policy change for AI-generated content affect users who (want to)',
  },
  { icon: faLayerGroup, content: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned' },
];

const hotMetaPost: DataType[] = [
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

const SideWidget = () => {
  return (
    <Container>
      <Tooltip
        title="The Overflow Blog"
        subtitle="Pair programing? We peek under the hood of Duet, Google’s coding assistant."
        icon={faPencil}
        $theme="light"
        size="lg"
      />
      <Tooltip title="Featured on Meta" content={featuredOnMetaData} $theme="light" size="lg" />
      <Tooltip title="Hot Meta Posts" content={hotMetaPost} $theme="light" size="lg" />
    </Container>
  );
};

const Container = styled.div``;

export default SideWidget;

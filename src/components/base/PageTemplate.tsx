import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f7;
  height: 100vh;
  width: 1800px;
  margin: auto;
  ${media.xxlarge} {
    width: 1700px;
  }
  ${media.xlarge} {
    width: 1195px;
  }
  ${media.laptop} {
    width: 960px;
  }
  ${media.tablet} {
    width: calc(100% - 2rem);
  }
  ${media.mobilelarge} {
    width: calc(100% - 2rem);
  }
  ${media.mobilesmall} {
    width: calc(100% - 2rem);
  }
`;

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return <Block>{children}</Block>;
};

export default PageTemplate;

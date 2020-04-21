import React from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface HeaderItemProps {
  selected: boolean;
}

const Block = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
`;

const PageLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.5rem;
`;

const LinkItem = styled.h1`
  font-size: 3rem;
  cursor: pointer;
  color: gray;
  color: ${(props: HeaderItemProps) => (props.selected ? 'black' : 'gray')};
`;

const Header = ({ location: { pathname } }: RouteComponentProps) => {
  return (
    <Block>
      <PageLink to="/card">
        <LinkItem selected={pathname === '/' || pathname === '/card'}>
          Card
        </LinkItem>
      </PageLink>
      <PageLink to="/textarea">
        <LinkItem selected={pathname === '/textarea'}>TextArea</LinkItem>
      </PageLink>
    </Block>
  );
};

export default withRouter(Header);

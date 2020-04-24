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
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const NavBlock = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-right: 3rem;
`;

const PageLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.5rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const LinkItem = styled.p`
  font-size: 1rem;
  cursor: pointer;
  color: gray;
  color: ${(props: HeaderItemProps) => (props.selected ? 'black' : 'gray')};
`;

const Header = ({ location: { pathname } }: RouteComponentProps) => {
  return (
    <Block>
      <PageLink to="/">
        <Title>Idus Front-end</Title>
      </PageLink>
      <NavBlock>
        <PageLink to="/card">
          <LinkItem selected={pathname === '/' || pathname === '/card'}>
            Card
          </LinkItem>
        </PageLink>
        <PageLink to="/textarea">
          <LinkItem selected={pathname === '/textarea'}>TextArea</LinkItem>
        </PageLink>
      </NavBlock>
    </Block>
  );
};

export default withRouter(Header);

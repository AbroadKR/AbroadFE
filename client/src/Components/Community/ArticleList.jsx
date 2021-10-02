import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

export default function AriticleList({ article }) {
  return (
    <ArticleWrap>
      <Category>
        <span>제목</span>
        <span>작성자</span>
        <span>💙</span>
      </Category>
      <Articles>
        {article.map((item) => (
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header as="a">
                  <Link key={item.id} to="#">
                    <Item>
                      <span>{item.name}</span>
                      <span>홍길동</span>
                      <span>0</span>
                    </Item>
                  </Link>
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        ))}
      </Articles>
    </ArticleWrap>
  );
}

const ArticleWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  width: 100%;
  min-height: 3.3em;
  font-size: 0.85rem;
  display: flex;
  border-bottom: 1px solid #d1d1d1;
  & > span:first-child {
    flex: 1 1 84%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span:nth-child(2) {
    flex: 1 1 8%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > span:last-child {
    flex: 1 1 8%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Articles = styled.div`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  width: 100%;
  min-height: 3.3em;
  padding: 0 2em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  & > span:first-child {
    flex: 1 1 80%;
  }
  & > span:nth-child(2) {
    flex: 1 1 10%;
  }
  & > span:last-child(2) {
    flex: 1 1 10%;
  }
`;

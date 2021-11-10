import Axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../Components/Community/SearchBar';
import Pagination from '../Components/Community/Pagination';
import AriticleList from '../Components/Community/ArticleList';

export default function Community() {
  const [article, setArticle] = useState([]);
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=Dior';

  function getData() {
    Axios.get(API_URL) //
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CommunityWrap>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>자유게시판</span>
      </UpstreamSection>
      <Filter />
      <AriticleList article={article.slice(0, 15)} />
      <Pagination />
      <SearchBar />
    </CommunityWrap>
  );
}

const CommunityWrap = styled.div`
  width: 71vw;
  height: 100%;
  margin: 3.5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpstreamSection = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3em;
  background-color: #66a6ff;
  color: white;
  padding-left: 2em;
  & > span:first-child::after {
    content: '|';
    margin: 0 5px;
  }
  & > span:last-child {
    font-weight: 900;
  }
`;

const Filter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3.5em;
  width: 20rem;
  margin-left: auto;
  & li {
    width: 5rem;
    padding: 0.5em 0;
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;
  }
  & li:nth-child(${(props) => props.order}) {
    color: #66a6ff;
  }
  & hr {
    height: 1rem;
    color: #444444;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function SearchBottom({ continent, boardType }) {
  const [target, setTarget] = useState('제목+내용');
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const handleTarget = (e) => {
    setTarget(e.currentTarget.value);
  };
  const handleKeyword = (e) => {
    setKeyword(e.currentTarget.value);
  };
  const handleSubmit = () => {
    history.push(`/community/${continent}/${boardType}`, { target, keyword });
    setTarget('제목+내용');
    setKeyword('');
  };
  return (
    <SearchBox>
      <SearchOpt name="searchTarget" id="searchTarget" onChange={handleTarget}>
        <option value="제목+내용">제목+내용</option>
        <option value="글쓴이">글쓴이</option>
        <option value="댓글">댓글</option>
      </SearchOpt>
      <BarBox>
        <SearchBar
          type="text"
          name="searchKeyword"
          id="searchKeyword"
          onChange={handleKeyword}
        />
        <SearchBtn onClick={handleSubmit}>검색</SearchBtn>
      </BarBox>
    </SearchBox>
  );
}

export default SearchBottom;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12rem;
`;
const SearchOpt = styled.select`
  margin-right: 1rem;
  width: 10rem;
  height: 3rem;
  text-align: center;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  font-size: 1.1rem;
  outline: none;
`;
const BarBox = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
`;
const SearchBar = styled.input`
  width: 30rem;
  height: 3rem;
  padding-left: 1.3em;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  font-size: 1.1rem;
  outline: none;
`;
const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 6rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 25px;
  background-color: #66a6ff;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

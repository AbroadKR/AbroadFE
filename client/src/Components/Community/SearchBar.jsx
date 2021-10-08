import styled from 'styled-components';
import React, { useState } from 'react';

export default function SearchBar() {
  const [modalToggle, setModalToggle] = useState(false);
  const [dropdownActive, setDropDownActive] = useState(false);

  const showDropdown = () => {
    if (!modalToggle) {
      setDropDownActive(true);
      setModalToggle(true);
    } else {
      setDropDownActive(false);
      setModalToggle(false);
    }
  };

  const onChangeContent = () => {
    setDropDownActive(false);
  };

  return (
    <SearchFromWrap>
      <SortCategoty>
        <span onClick={showDropdown}>제목 + 내용 ▾</span>
      </SortCategoty>
      <section
        className={dropdownActive ? 'dropdownContainer' : 'dropdownHidden'}
      >
        <span onClick={onChangeContent}>제목 + 내용</span>
        <span onClick={onChangeContent}>제목</span>
        <span onClick={onChangeContent}>내용</span>
        <span onClick={onChangeContent}>작성자</span>
      </section>
      <FormWrap>
        <input type="text" />
        <input type="submit" value="검색" />
      </FormWrap>
    </SearchFromWrap>
  );
}

const SearchFromWrap = styled.div`
  width: 40%;
  height: 2.7em;
  display: flex;
  position: relative;

  & > .dropdownContainer {
    width: 140px;
    height: 150px;
    font-size: 1rem;
    position: absolute;
    top: 42px;
    left: -3px;
    background: white;
    border: 1px solid #d4d4d4;
    border-radius: 30px/30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: opacity 500ms;
    cursor: pointer;
    z-index: 10;
  }

  & > .dropdownHidden {
    display: none;
    visibility: hidden;
    transition: opacity 500ms;
  }

  & > .dropdownContainer span:hover {
    color: #b5bdff;
  }
`;

const SortCategoty = styled.div`
  flex: 1 1 25%;
  border: 1px solid #d1d1d1;
  border-radius: 30px/30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FormWrap = styled.form`
  flex: 1 1 75%;
  width: 100%;
  height: 100%;
  display: flex;
  & > input[type='text'] {
    width: 18.5em;
    border: 1px solid #d1d1d1;
    border-radius: 30px/30px;
    font-size: 15px;
    padding: 10px 10px;
    padding-left: 20px;
  }
  & > input[type='submit'] {
    color: white;
    width: 5em;
    background-color: #4db7e6;
    border-radius: 30px/30px;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 10px;
    margin-left: 4px;
    cursor: pointer;
  }
`;

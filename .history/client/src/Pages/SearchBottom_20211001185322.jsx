import React from 'react'
import styled from "styled-components"

function SearchBottom() {
    return (
    <SearchBox>
        <SearchOpt name="searchOption" id="searchOption">
            <option value="제목+내용">제목+내용</option>
            <option value="글쓴이">글쓴이</option>
            <option value="댓글">댓글</option>
        </SearchOpt>
        <BarBox>
            <SearchBar type="text" name="searchBar" id="searchBar" placeholder=""/>
            <SeachBtn>검색</SeachBtn>
        </BarBox>
    </SearchBox>
    )
}

export default SearchBottom

const SearchBox = styled.form`
    display : flex;
    align-items : center;
    justify-content : center;
    margin-bottom : 12rem;
`
const SearchOpt = styled.select`
    margin-right : 1rem;
    width : 10rem;
    height : 3rem;
    text-align : center;
    border : 1px solid #D1D1D1;
    border-radius : 25px;
    font-size : 1.1rem;
    outline : none;
`
const BarBox = styled.div`
    position : relative;
    display : flex;
    width : fit-content;
`
const SearchBar = styled.input`
    width : 30rem;
    height: 3rem;
    padding-left : 1.3em;
    border : 1px solid #D1D1D1;
    border-radius : 25px;
    font-size : 1.1rem;
    outline : none;
`
const SeachBtn = styled.button`
    position : absolute;
    right : 0;
    width : 6rem;
    height : 3rem;
    outline : none;
    border : none;
    border-radius : 25px;
    background-color : #66A6FF;
    color : #FFFFFF;
    font-size : 1.1rem;
    font-weight : 700;
    cursor: pointer;
`
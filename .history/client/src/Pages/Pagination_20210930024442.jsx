import React, {useState} from 'react'
import styled from "styled-components"

function Pagination({currentPage, handlePage}) {
    const [firstIndex, setFirstIndex] = useState(1);
    const postPerPage = 15;
    let lastIndex = firstIndex + 9;
    const setPage = (e)=>{
        handlePage(Number(e.currentTarget.textContent));
    }
    if(currentPage>lastIndex){
     setFirstIndex(lastIndex+1);
    }
    let pages = [];
    let j =0;
    for(let i=firstIndex; i<=lastIndex; i++){
        pages[j] = i;
        j++;
    }
    return (
    <Pagenation currentPage={currentPage}>
        <li style={{fontWeight:'bold'}}>&lt;&lt;</li>
        <li>&lt;</li>
        {pages.map((page, index)=>(
            <li key={index} onClick={setPage}>{page}</li>
        ))}
        <li>&gt;</li>
        <li style={{fontWeight:'bold'}}>&gt;&gt;</li>
    </Pagenation>
    )
}

export default Pagination

const Pagenation = styled.ul`
    display : flex;
    justify-content : center;
    width : 50%;
    max-width : 600px;
    min-width : 300px;
    & li {
        padding : 0.3em 0.6em;
        cursor: pointer;
    }
    & li:nth-child(${props => props.currentPage +2}){
        cursor : default;
        color : #66A6FF;
    }
`

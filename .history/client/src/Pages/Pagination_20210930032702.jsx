import React, {useState} from 'react'
import styled from "styled-components"

function Pagination({currentPage, handlePage, setCurrentPage, firstIndex, lastIndex}) {
    const setPage = (e)=>{
        handlePage(e);
    }
    const nextPage =()=>{
        setCurrentPage(currentPage+1)
    }
    const backPage =()=>{
        if(currentPage ===1){
            return
        }
        setCurrentPage(currentPage-1)
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
        <li onClick={backPage}>&lt;</li>
        {pages.map((page, index)=>(
            <li key={index} id={page} onClick={setPage}>{page}</li>
        ))}
        <li onClick={nextPage}>&gt;</li>
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
    & #${id}{
        cursor : default;
        color : #66A6FF;
    }
`

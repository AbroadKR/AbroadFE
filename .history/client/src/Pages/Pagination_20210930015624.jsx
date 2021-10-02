import React, {useState} from 'react'
import styled from "styled-components"

function Pagination({currentPage}) {
    const [firstIndex, setFirstIndex] = useState(1);
    const postPerPage = 15;
    let lastIndex = firstIndex + 9;
    return (
    <Pagenation currentPage={currentPage}>
        <li style={{fontWeight:'bold'}}>&lt;&lt;</li>
        <li>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
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

import React from 'react'
import styled from "styled-components";

function KoUnivPopup({koUnivLists, handleInput}) {
    return (
        <PopUp className="popup koUniv">
            <p><span className="ignore hl">대학</span>을 선택해주세요</p>
            <ul className="koUnivLists">
                {koUnivLists === undefined ? "" : koUnivLists.map((list, index) => (
                    <li key={index} onMouseDown={()=>handleInput(list)}>{list}</li>
    ))}
            </ul>
        </PopUp>
    )
}

const PopUp = styled.div`
    position: absolute;
    z-index: 10 !important;
    display: block;
    top: 7rem;
    font-weight: 700;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 2em;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    &.koUniv{
        left : 50%;
        transform : translateX(-50%);
    }
    & > p {
        font-size : 1.1rem;
        margin-bottom: 2rem;
        text-align : center;
        & > .hl{
            color : #66A6FF;
        }
    }
    & > .koUnivLists {
        width: 18rem;
        & > li {
            display: block;
            font-size: 1.1rem;
            text-align : center;
            border-bottom: 1px solid #D8D8D8;
            height: 3.8rem;
            line-height: 3.8rem;
            padding-bottom: 0.1rem;
            /* margin-bottom: 1rem; */
            cursor: pointer;
            &:hover {
                background-color :#E5E5E5;
                color : #66A6FF;
            }
        }
    }
`

export default KoUnivPopup;

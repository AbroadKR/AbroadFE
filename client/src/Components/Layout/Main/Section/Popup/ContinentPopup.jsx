import React, { useState, useEffect } from 'react'
import styled from "styled-components";

function ContinentPopup({ continents, handleContinent }) {
    const [selContinents, setSelContinents] = useState([]);
    useEffect(() => {
        handleContinent(selContinents)
    }, [selContinents])
    const handleSelect = (continent) => (
        selContinents.includes(continent) ?
            setSelContinents(selContinents.filter(item => item != continent))
            : setSelContinents([...selContinents, continent])
    )
    return (
        <PopUp className="popup continent">
            <p><span className="hl">대륙</span>을 선택해주세요</p>
            <ul className="continentLists">
                {continents === undefined ? "" : continents.map((continent, index) => (
                    <li key={index}
                        onClick={() => handleSelect(continent)}
                        className={selContinents.includes(continent) ? "selected" : ""}>
                        {continent}</li>
                ))}
            </ul>
        </PopUp>
    )
}


export default ContinentPopup

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
    &.continent{
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
    &> .continentLists {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        width: 35rem;
        overflow: scroll;
        & > li {
            flex-shrink: 0;
            margin: 0 0.9rem;
            font-size: 1.1rem;
            text-align: center;
            line-height: 7rem;
            width: 7rem;
            height: 7rem;
            border: 3px solid #D1D1D1;
            box-sizing: border-box;
            border-radius: 25px;
            cursor: pointer;
        }
        & .selected {
            transition: all .2s;
            border: 3px solid #66A6FF;
            color: #66A6FF;
        }
    }
`
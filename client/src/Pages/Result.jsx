import React from 'react'
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

function Result() {
    const location = useLocation();
    return (
        <Body>
            <Wrapper>
                <CaptionBox className="main_caption">
                    <CaptionTitle className="caption_title">나의 학교</CaptionTitle>
                    <CaptionBar className="caption_bar"></CaptionBar>
                    <div className="captionKoUniv"></div>
                </CaptionBox>
                <Table className="main_table">
                    <THead className="main_thead">
                        <tr>
                            <th>대륙</th>
                            <th>국가</th>
                            <th>대학명</th>
                            <th>선발인원</th>
                            <th>파견기간</th>
                        </tr>
                    </THead>
                    <TBody className="main_tbody">
                        <tr>
                            <td>Testing...</td>
                            <td>Testing...</td>
                            <td>Testing...</td>
                            <td>Testing...</td>
                            <td>Testing...</td>
                        </tr>
                    </TBody>
                </Table>
            </Wrapper>
        </Body>
    )
};

export default Result

const Body = styled.div`
    width : 100vw;
    height :100%;
`

const Wrapper = styled.div`
    width : 75vw;
    margin: 4.5rem auto 172px auto;
`

const CaptionBox = styled.div`
    display: flex;
    align-items: center;
    height: 2.8rem;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 5%;
    background-color: #F3F3F3;
    & .captionKoUniv {
        color: #444444;
    }
`
const CaptionTitle = styled.div`
    color: #B6B6B6;
    margin: 0 1.5rem 0 3rem ;
`
const CaptionBar = styled.span`
    display: inline-block;
    width: 1px;
    height: 45%;
    background-color: #D1D1D1;
    margin-right: 1.5rem;
`
const Table = styled.table`
    border: 1px solid #D1D1D1;
    width: 100%;
    margin-top: 5%;
    border-collapse: collapse;
`
const THead = styled.thead`
    background-color: #F3F3F3;
    height: 3.75rem;
    & th {
        font-size: 1rem;
        text-align: left;
        display : table-cell;
        vertical-align : middle;
        border-bottom: 1px solid #D1D1D1;
        font-weight : 400;
        color: #444444;
        padding-left: 1.5em;
    }
    & th:nth-child(3){
        width: calc(300px * 1vw);
    }
    & .main_thead th:nth-child(1), .main_thead th:nth-child(2), .main_thead th:nth-child(4), .main_thead th:nth-child(5) {
        width: 10rem;
    }
`

const TBody = styled.tbody`
    font-weight: 700;
    & tr {
        border-bottom: 1px solid #D1D1D1;
        height: 3.75rem;
        vertical-align: middle;
        & td {
            padding: 1.5em;
            cursor: pointer;
        }
        & td:nth-child(3){
            color:#66A6FF;
        }
    }
    & tr:hover td{
        background-color: #dfeafc;
    }
    & tr:nth-child(even):hover td{
        background-color: #dfeafc;
    }
    & tr:nth-child(even) td{
        background-color: #FBFBFB;
    }
`
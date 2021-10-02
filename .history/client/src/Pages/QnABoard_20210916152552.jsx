import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {GiSpeaker} from "react-icons/gi";

function QnABoard({match}) {
    const param = match.params.continent;
    let continent;
    if(param === "sa"){
        continent = "남미"
    } else if(param === "na"){
        continent = "북미"
    } else if(param === "asia"){
        continent = "아시아"
    } else if(param === "africa"){
        continent = "아프리카"
    } else if(param === "oceania"){
        continent = "오세아니아"
    } else if(param === "europe"){
        continent = "유럽"
    }
    return (
        <>
            {param ? 
            <TopBox>
                <ContinentImg bgShort={param}></ContinentImg>
                <BoardInfo>
                    <h3>{continent} 질문게시판</h3>
                    <div>{continent} 대륙 교환학생들을 위한 질문게시판입니다.</div>
                    <div>궁금한 점들을 질문하고 정보들을 공유하세요.</div>
                    <ToQnA to="freeboard">자유게시판 바로가기</ToQnA>
                </BoardInfo>
            </TopBox>: 
            <TopNormalBox>
                    <h3>질문게시판</h3>
            </TopNormalBox>}
            <TableBox>
                <Filter>
                    <li>최신순</li>
                    <hr/>
                    <li>댓글순</li>
                    <hr/>
                    <li>좋아요순</li>
                </Filter>
                <Table>
                    <Thead>
                        <tr>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>♥</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <Notice>
                            <td><GiSpeaker style={{color : "#66A6FF", fontSize : "2rem", marginRight:"1rem"}}/>대륙별 자유게시판 이용 안내</td>
                            <td>어브로드</td>
                            <td>-</td>
                        </Notice>
                        <tr>
                            <td>안녕하세요~!!</td>
                            <td>냥이몽</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>혹시 다들 한 달 평균 생활비가 어떻게 되시나요??</td>
                            <td>몽글리</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>너무 심심하네요.... 다들 기숙사에 있을 대 뭐하시나요?</td>
                            <td>규리소</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>남미쪽에서 맥주 어떤게 제일 맛있다고 생각하시나욤??</td>
                            <td>맥구리</td>
                            <td>2</td>
                        </tr>
                    </Tbody>
                </Table>
            </TableBox>
        </>
    )
}

export default QnABoard

const TopBox = styled.div`
    display : flex;
    justify-content : center;
    width : 100vw;
    height : 20rem;
    background-color : #66A6FF;
`
const TopNormalBox = styled.div`
    width : 100vw;
    height : 5rem;
    color : #ffff;
    background-color : #66A6FF;
`
const ContinentImg = styled.div`
    width : 35%;
    background-image : url(${(props) => `/images/pages/continent_${props.bgShort}.png`});
    background-size : 28%;
    background-position : center;
    background-repeat : no-repeat;
`
const BoardInfo = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 35%;
    color : #ffffff;
    & > h3{
        font-size : 1.5rem;
        font-weight : 700;
        margin-top : 1rem;
        margin-bottom : 3rem;
    }
    & div {
        font-size : 1.1rem;
        margin-bottom : 1rem;
    }
`
const ToQnA = styled(Link)`
    width : 14rem;
    padding : 1em;
    text-align : center;
    background-color : #ffffff;
    color : #66A6FF;
    font-size : 1.1rem;
    font-weight : 700;
    margin-top : 1.5rem;
`
const TableBox = styled.div`
    width : 75vw;
    margin : auto auto 2rem auto;
`
const Filter = styled.ul`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    height : 5.3rem;
    width : 20rem;
    margin-left : auto;
    & li {
        width : 5rem;
        padding : 0.5em 0;
        font-size : 1.1rem;
        text-align : center;
        cursor : pointer;
    }
    & hr {
        height : 1rem;
        color : #444444;
    }
`
const Table = styled.table`
    width : 100%;
    border-top : 1px solid #444444;
`
const Thead = styled.thead`
    height : 3.3rem;
    border-bottom : 1px solid #D1D1D1;
    & th {
        font-size : 1.1rem;
        color : #444444;
        vertical-align : middle;
    }
    & th:first-child{
        min-width : 500px;
        width : 80%;
    }
    & th:last-child {
        color : #66A6FF;
    }
`
const Tbody = styled.tbody`
    & tr {
        height : 4.4rem;
        border-bottom : 1px solid #D1D1D1;
    }
    & td {
        color : #444444;
        font-size : 1.1rem;
        vertical-align : middle;
    }
    & td:first-child{
        padding-left : 2.5em;
    }
    & td:not(:first-child){
        text-align : center;
    }
`
const Notice = styled.tr`
    background-color : #FBFBFB;
    & td {
        font-size : 1.1rem;
        font-weight : 700;
    }
    & > td:first-child {
        display : flex;
        align-items : center;
        height : 4.4rem;
    }
`
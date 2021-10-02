import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {GiSpeaker} from "react-icons/gi";

function FreeBoard({match}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState(1);
    const [posts, setPosts] = useState([
        {
            title : "안녕하세요 가입 인사 남깁니다!!",
            user : "냥이몽",
            like : 0
        },
        {
            title : "혹시 다들 한 달 평균 생활비가 어떻게 되시나욤...??",
            user : "몽글리",
            like : 8
        },
        {
            title : "너무 심심하네요.... 코시국에 교환학생 괜히 왔나싶고..",
            user : "규리수",
            like : 3
        },
        {
            title : "다들 맥주 보통 어디서 사서 드세요?? 마트가 제일 싼가요?",
            user : "맥구리",
            like : 4
        },
        {
            title : "주말에 여행 다녀올만한 곳 없나...ㅜ",
            user : "성설고",
            like : 2
        }
        ])
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
    const handleOrder = (e)=>{
        console.log(e.currentTarget.parent);
    }
    const handlePage = (e)=>{
        setCurrentPage(Number(e.currentTarget.textContent));
    }
    return (
        <>
            {param ? 
            <TopBox>
                <ContinentImg bgShort={param}></ContinentImg>
                <BoardInfo>
                    <h3>{continent} 자유게시판</h3>
                    <div>{continent} 대륙 교환학생들을 위한 자유게시판입니다.</div>
                    <div>다른 학생들과 자유롭게 소통해보세요.</div>
                    <ToQnA to="qna">질문게시판 바로가기</ToQnA>
                </BoardInfo>
            </TopBox>: 
            <TopNormalBox>
                    <h3>자유게시판</h3>
            </TopNormalBox>}
            <TableBox>
                <Filter order={order}>
                    <li onClick={handleOrder}>최신순</li>
                    <hr/>
                    <li onClick={handleOrder}>댓글순</li>
                    <hr/>
                    <li onClick={handleOrder}>좋아요순</li>
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
                        {posts && posts.map(post => (
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.user}</td>
                                <td>{post.like}</td>
                            </tr>
                        ))}
                    </Tbody>
                </Table>
                <PageBox>
                    <Pagenation currentPage={currentPage}>
                        <li style={{fontWeight:'bold'}}>&lt;&lt;</li>
                        <li>&lt;</li>
                        <li onClick={handlePage}>1</li>
                        <li onClick={handlePage}>2</li>
                        <li onClick={handlePage}>3</li>
                        <li onClick={handlePage}>4</li>
                        <li onClick={handlePage}>5</li>
                        <li onClick={handlePage}>6</li>
                        <li onClick={handlePage}>7</li>
                        <li onClick={handlePage}>8</li>
                        <li onClick={handlePage}>9</li>
                        <li onClick={handlePage}>10</li>
                        <li>&gt;</li>
                        <li style={{fontWeight:'bold'}}>&gt;&gt;</li>
                    </Pagenation>
                    <WriteBtn>글 작성</WriteBtn>
                </PageBox>
                <SearchBox>
                    <SearchOpt name="searchOption" id="searchOption">
                        <option value="">제목+내용</option>
                        <option value="글쓴이">글쓴이</option>
                        <option value="댓글">댓글</option>
                    </SearchOpt>
                    <BarBox>
                        <SearchBar type="text" name="searchBar" id="searchBar" placeholder=""/>
                        <SeachBtn>검색</SeachBtn>
                    </BarBox>
                </SearchBox>
            </TableBox>
        </>
    )
}

export default FreeBoard

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
    & li:nth-child(${props => props.order}){
        color : #66A6FF;
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
        min-width : 50px;
        color : #66A6FF;
    }
`
const Tbody = styled.tbody`
    & tr {
        height : 4.4rem;
        border-bottom : 1px solid #D1D1D1;
        & > td:first-child{
            cursor: pointer;
        }
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
const PageBox = styled.div`
    position : relative;
    display : flex;
    justify-content : center;
    align-items : center;
    height : 4rem;
    width : 100%;
    margin : 1.5rem 0;
`
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
const WriteBtn = styled.button`
    position : absolute;
    display : inline-block;
    min-width : 100px;
    width : 6rem;
    height : 3rem;
    right : 0;
    padding : 0.5em;
    border : none;
    border-radius : 25px;
    color : #FFFFFF;
    background-color : #66A6FF;
    cursor: pointer;
`
const SearchBox = styled.div`
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
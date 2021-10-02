import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {GiSpeaker} from "react-icons/gi";
import Pagination from "./Pagination";
import axios from "axios";

function FreeBoard({match}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState(1);
    const [posts, setPosts] = useState([{}]);
    const [firstIndex, setFirstIndex] = useState(1);
    const getFree = async ()=>{
        const {data : res} = await axios.post('/api/getFree',{page : firstIndex});
        setPosts(res);
        console.log(res);
    }
    const handleOrder = (e)=>{
        setOrder(Number(e.currentTarget.id));
    }
    const handlePage = (e)=>{
        setCurrentPage(Number(e.currentTarget.textContent));
    }
    let lastIndex = Math.floor(posts.length / 15);
    let normalIndex = currentPage%10===0 ? 10 : currentPage%10;
    if(currentPage>lastIndex){
        setFirstIndex(lastIndex+1);
    } else if(currentPage<firstIndex){
        setFirstIndex(firstIndex-10);
    }
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
    
    useEffect(() => {
        getFree();
    }, [currentPage]);

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
                    <li id="1" onClick={handleOrder}>최신순</li>
                    <hr/>
                    <li id="3" onClick={handleOrder}>댓글순</li>
                    <hr/>
                    <li id="5" onClick={handleOrder}>좋아요순</li>
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
                        {posts && posts.slice((normalIndex-1)*15, normalIndex*15).map(post => (
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.user}</td>
                                <td>{post.like}</td>
                            </tr>
                        ))}
                    </Tbody>
                </Table>
                <PageBox>
                    <Pagination currentPage={currentPage} handlePage={handlePage} setCurrentPage={setCurrentPage} firstIndex={firstIndex} lastIndex={lastIndex}/>
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
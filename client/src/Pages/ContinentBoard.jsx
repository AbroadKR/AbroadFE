import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GiSpeaker } from 'react-icons/gi';
import Pagination from './Pagination';
import SearchBottom from './SearchBottom';
import axios from 'axios';

function ContinentBoard() {
  const [continentName, setContinentName] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState(1);
  const [posts, setPosts] = useState([{}]);
  const [firstIndex, setFirstIndex] = useState(1);
  const params = useParams();
  const { category, continent } = params;
  const getPosts = async (opt) => {
    setPosts([{}]);
    if (!opt) {
      const { data: res } = await axios.get('/api/getPosts', {
        params: { board: continent, category },
      });
      setPosts(res);
    } else {
      const { data: res } = await axios.get('/api/getPosts/search', {
        params: { target: opt.target, keyword: opt.keyword },
      });
      if (res.length === 0) {
        alert('검색결과가 없습니다.');
        return;
      }
      setPosts(res);
    }
  };
  const handleOrder = async (e) => {
    setOrder(e.currentTarget.id);
    if (e.currentTarget.id === '1') {
      getPosts();
    } else if (e.currentTarget.id === '3') {
      posts.sort((a, b) => {
        if (a.like > b.like) {
          return -1;
        } else if (a.like < b.like) {
          return 1;
        } else {
          return 0;
        }
      });
      setPosts([]);
      setPosts(posts);
    }
  };
  const handlePage = (e) => {
    setCurrentPage(Number(e.currentTarget.textContent));
  };
  let lastIndex = firstIndex + 9;
  let pageCount = Math.ceil(posts.length / 15);
  let normalIndex = currentPage % 10 === 0 ? 10 : currentPage % 10;
  if (currentPage > lastIndex) {
    setFirstIndex(lastIndex + 1);
  } else if (currentPage < firstIndex) {
    setFirstIndex(firstIndex - 10);
  }
  const checkContinent = () => {
    if (continent === 'sa') {
      setContinentName('남미');
    } else if (continent === 'na') {
      setContinentName('북미');
    } else if (continent === 'asia') {
      setContinentName('아시아');
    } else if (continent === 'africa') {
      setContinentName('아프리카');
    } else if (continent === 'oceania') {
      setContinentName('오세아니아');
    } else if (continent === 'europe') {
      setContinentName('유럽');
    }
  };
  useEffect(() => {
    checkContinent();
  }, []);
  useEffect(() => {
    getPosts();
  }, [category]);

  useEffect(() => {
    getPosts();
  }, [currentPage]);
  return (
    <>
      <TopBox>
        <ContinentImg bgShort={continent}></ContinentImg>
        <BoardInfo>
          <h3>
            {continentName} {category === 'free' ? '자유게시판' : '질문게시판'}
          </h3>
          <div>
            {continentName} 대륙 교환학생들을 위한
            {category === 'free' ? ' 자유게시판' : ' 질문게시판'}입니다.
          </div>
          <div>다른 학생들과 자유롭게 소통해보세요.</div>
          <ToQnA to={category === 'free' ? 'qna' : 'free'}>
            {category === 'free' ? '질문게시판' : '자유게시판'} 바로가기
          </ToQnA>
        </BoardInfo>
      </TopBox>
      <TableBox>
        <Filter order={order}>
          <li id="1" onClick={handleOrder}>
            최신순
          </li>
          <hr />
          <li id="3" onClick={handleOrder}>
            좋아요순
          </li>
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
              <td>
                <GiSpeaker
                  style={{
                    color: '#66A6FF',
                    fontSize: '2rem',
                    marginRight: '1rem',
                  }}
                />
                대륙별 {category === 'free' ? '자유게시판' : '질문게시판'} 이용
                안내
              </td>
              <td>어브로드</td>
              <td>-</td>
            </Notice>
            {posts &&
              posts
                .slice((normalIndex - 1) * 15, normalIndex * 15)

                .map((post, index) => (
                  <tr key={index}>
                    <td>{post.title}</td>
                    <td>{post.user}</td>
                    <td>{post.like}</td>
                  </tr>
                ))}
          </Tbody>
        </Table>
        <PageBox>
          <Pagination
            currentPage={currentPage}
            handlePage={handlePage}
            setCurrentPage={setCurrentPage}
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            pageCount={pageCount}
          />
          <WriteBtn
            to={{
              pathname: `/community/${continent}/edit`,
              state: { continentName, category },
            }}
          >
            글 작성
          </WriteBtn>
        </PageBox>

        <SearchBottom
          setPosts={setPosts}
          continent={continent}
          boardType={category}
        />
      </TableBox>
    </>
  );
}

export default ContinentBoard;

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 20rem;
  background-color: #66a6ff;
`;
const TopNormalBox = styled.div`
  width: 100vw;
  height: 5rem;
  color: #ffff;
  background-color: #66a6ff;
`;
const ContinentImg = styled.div`
  width: 35%;
  background-image: url(${(props) =>
    `/images/pages/continent_${props.bgShort}.png`});
  background-size: 33%;
  background-position: 60%;
  background-repeat: no-repeat;
`;
const BoardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  color: #ffffff;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  & div {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;
const ToQnA = styled(Link)`
  width: 14rem;
  padding: 1em;
  text-align: center;
  background-color: #ffffff;
  color: #66a6ff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
`;
const TableBox = styled.div`
  width: 75vw;
  margin: auto auto 2rem auto;
`;
const Filter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 5.3rem;

  width: 13rem;
  margin-left: auto;
  & li {
    width: 5rem;
    padding: 0.5em 0;
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;
  }
  & li:nth-child(${(props) => props.order}) {
    color: #66a6ff;
  }
  & hr {
    height: 1rem;
    color: #444444;
  }
`;
const Table = styled.table`
  width: 100%;
  border-top: 1px solid #444444;
`;
const Thead = styled.thead`
  height: 3.3rem;
  border-bottom: 1px solid #d1d1d1;
  & th {
    font-size: 1.1rem;
    color: #444444;
    vertical-align: middle;
  }
  & th:first-child {
    min-width: 500px;
    width: 80%;
  }
  & th:last-child {
    min-width: 50px;
    color: #66a6ff;
  }
`;
const Tbody = styled.tbody`
  & tr {
    height: 4.4rem;
    border-bottom: 1px solid #d1d1d1;
    & > td:first-child {
      cursor: pointer;
    }
  }
  & td {
    color: #444444;
    font-size: 1.1rem;
    vertical-align: middle;
  }
  & td:first-child {
    padding-left: 2.5em;
  }
  & td:not(:first-child) {
    text-align: center;
  }
`;
const Notice = styled.tr`
  background-color: #fbfbfb;
  & td {
    font-size: 1.1rem;
    font-weight: 700;
  }
  & > td:first-child {
    display: flex;
    align-items: center;
    height: 4.4rem;
  }
`;
const PageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  margin: 1.5rem 0;
`;

const WriteBtn = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  width: 6rem;
  height: 3rem;
  right: 0;
  padding: 0.5em;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  background-color: #66a6ff;
  cursor: pointer;
`;

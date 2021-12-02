import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GiSpeaker } from 'react-icons/gi';
import SearchBottom from './SearchBottom';
import Pagination from './Pagination';

export default function All({ match }) {
  let currentPath;
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState(1);
  const [posts, setPosts] = useState([{}]);
  const [firstIndex, setFirstIndex] = useState(1);

  if (match.path === '/all') {
    currentPath = '전체';
  } else if (match.path === '/travel/info') {
    currentPath = '정보/일정 공유';
  } else if (match.path === '/travel/party') {
    currentPath = '동행 찾기';
  }

  const getPost = async () => {
    const { data: res } = await axios.post('/api/getPost', {
      path: currentPath,
    });
    console.log(res);
  };

  useState(() => {
    getPost();
  }, []);

  const handleOrder = async (e) => {
    setOrder(e.currentTarget.id);
    if (e.currentTarget.id === '1') {
      return;
    } else if (e.currentTarget.id === '3') {
      await posts.sort((a, b) => {
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
  return (
    <>
      <CommunityWrap>
        <UpstreamSection>
          <span>커뮤니티</span>
          <span>{currentPath} 게시판</span>
        </UpstreamSection>
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
                  {currentPath} 게시판 이용 안내
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
            <WriteBtn to="/write-article">글 작성</WriteBtn>
          </PageBox>
          <SearchBottom setPosts={setPosts} />
        </TableBox>
      </CommunityWrap>
    </>
  );
}

const CommunityWrap = styled.div`
  width: 75vw;
  height: 100%;
  margin: 3.5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpstreamSection = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3em;
  background-color: #66a6ff;
  color: white;
  padding-left: 2em;
  & > span:first-child::after {
    content: '|';
    margin: 0 5px;
  }
  & > span:last-child {
    font-weight: 900;
  }
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
  display: inline-block;
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

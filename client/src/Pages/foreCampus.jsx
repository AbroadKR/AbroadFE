import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function ForeCampus() {
  const [isDown, setIsDown] = useState(false);
  const [university, setUniversity] = useState([]);
  const searchRef = useRef();

  const history = useHistory();
  const getForUnivs = async (e) => {
    if (e.currentTarget.value.length === 0) {
      setUniversity([]);
      closeDropdown();
      return;
    }
    const { data: data } = await axios.get('/api/getForUnivs', {
      params: {
        query: e.currentTarget.value,
      },
    });
    dropdown(data);
    setUniversity(data);
    console.log(data);
  };
  const dropdown = (input) => {
    if (input) {
      setIsDown(true);
    } else {
      setUniversity([]);
      setIsDown(false);
    }
  };
  const closeDropdown = (e) => {
    setIsDown(false);
  };

  return (
    <Wrapper>
      <TitleBox>
        <h1>해외교평가</h1>
        <form>
          <input
            type="text"
            ref={searchRef}
            autoFocus={false}
            placeholder="학교명을 입력하세요"
            onChange={(e) => getForUnivs(e)}
            onFocus={(e) => dropdown(e.target.value)}
            onBlur={closeDropdown}
          />
          <input
            type="submit"
            value="검색"
            onClick={(e) => {
              e.preventDefault();
              if (!searchRef.current.value) alert('학교명을 입력해주세요');
              searchRef.current.value &&
                history.push('/result/경희대/북미/미국');
            }}
          />
          {isDown && (
            <DropdownMenu>
              {university.map((univ, i) => (
                <span key={i}>{univ.forUniv_eng}</span>
              ))}
            </DropdownMenu>
          )}
        </form>
        <Hr />
      </TitleBox>
      <h1>이 학교들은 어떠세요?</h1>
      <BtnBox>
        <FreeBox
          to={{
            pathname: `/result/경희대/북미/미국`,
          }}
        />
        <RandomBox
          to={{
            pathname: `/result/경희대/북미/미국`,
          }}
        />
        <QuestionBox
          to={{
            pathname: `/result/경희대/북미/미국`,
          }}
        />
      </BtnBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50vw;
  min-height: 50vh;
  height: 100%;
  margin: 0 auto;

  & > h1 {
    margin: 0;
    text-align: center;
    font-weight: 700;
    color: #66a6ff;
  }
`;

const TitleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 18rem;
  & > h1 {
    margin: 0;
    height: 3.5rem;
    text-align: center;
    font-weight: 700;
    color: #66a6ff;
    margin-bottom: 2.25rem;
  }

  & > form {
    display: flex;
    justify-content: center;
    position: relative;

    & > input[type='text'] {
      width: 100%;
      height: 52px;
      padding-left: 1.3rem;
      margin: 0 auto;
      border: 0.2px solid #d1d1d1;
      border-radius: 25px;
      font-size: 1.3rem;
    }

    & > input[type='text']::placeholder {
      position: absolute;
      font-size: 1.1rem;
      left: 20px;
      top: 14px;
      color: #d1d1d1;
    }

    & > input[type='submit'] {
      background-color: #66a6ff;
      color: #ffffff;
      border-radius: 25px;
      width: 7.75rem;
      height: 3.15rem;
      position: absolute;
      top: 0.7px;
      right: 0px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 52px;
  width: 100%;
  min-height: 350px;
  border: 0.2px solid #d1d1d1;
  border-radius: 25px;
  background: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  & > p {
    width: 130px;
    max-height: 25px;
    margin: 1em 0;
    padding-left: 7px;
    padding-bottom: 0.3em;
    font-size: 1.1rem;
    font-weight: 700;
    margin-left: 1.2em;
    color: #66a6ff;
    border-bottom: 0.2px solid #d1d1d1;
    border-radius: 15px;
    cursor: pointer;
  }

  & > p:hover {
    background-color: #66a6ff;
    color: white;
  }
`;

const Hr = styled.hr`
  position: absolute;
  width: 60px;
  height: 5px;
  background-color: #66a6ff;
  border: none;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const BtnBox = styled(Link)`
  display: flex;
  justify-content: space-between;
  height: 37rem;
  margin-top: 3.5rem;
`;

const RandomBox = styled(Link)`
  background: url('/images/foreCampus/foreCampus1.jpg') center no-repeat;
  background-size: cover;
  width: 15.75rem;
  height: 15.75rem;
  cursor: pointer;
`;

const FreeBox = styled(Link)`
  background: url('/images/foreCampus/foreCampus1.jpg') center no-repeat;
  background-size: cover;
  width: 15.75rem;
  height: 15.75rem;
  cursor: pointer;
`;
const QuestionBox = styled.span`
  background: url('/images/foreCampus/foreCampus1.jpg') center no-repeat;
  background-size: contain;
  width: 15.75rem;
  height: 15.75rem;
  cursor: pointer;
`;

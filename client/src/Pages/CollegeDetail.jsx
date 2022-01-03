<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsHeartFill, BsX } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

function CollegeDetail({ match, location }) {
  const [isOpen, setIsOepn] = useState(false);
  const {
    state: { reviews, evaluations, forUnivObj },
  } = location;
  const handleAccordion = () => {
    setIsOepn((isOpen) => !isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !reviews ? (
    <h1>Loading</h1>
  ) : (
    <CollegeDetailBox>
      <TopContainer>
        <UnivImage src={forUnivObj.image} alt="forUniv_Image" />
        <ReviewShortcut>
          <TitleStar>
            <h3>{forUnivObj.forUniv}</h3>
            <div>
              <span className="empty_point">
                <span
                  className="filled_point"
                  style={{
                    minWidth: `${
                      (evaluations.avgPoint / reviews.length) * 20
                    }%`,
                  }}
                ></span>
              </span>
              <span className="caption_avg_point">
                {(evaluations.avgPoint / reviews.length).toFixed(1)}
              </span>
              <span className="reviews_count">({reviews.length}개의 평가)</span>
            </div>
          </TitleStar>
          <hr style={{ width: '100%', marginBottom: '7%' }} />
          <AverageReview>
            <AverageLabelBox>
              <h5>한국인 수</h5>
              <h5>학업 난이도</h5>
              <h5>비용</h5>
              <h5>교통</h5>
              <h5>치안·인종차별</h5>
            </AverageLabelBox>
            <AverageValueBox>
              <div>{evaluations.koreans}</div>
              <div>{evaluations.difficulty}</div>
              <div>{evaluations.avgCost}</div>
              <div>{evaluations.trans}</div>
              <div>{evaluations.safety}</div>
            </AverageValueBox>
          </AverageReview>
        </ReviewShortcut>
      </TopContainer>
      <ForLangBox>
        <h4>어학성적</h4>
        <div className="greyBorderBox"></div>
      </ForLangBox>
      <ReviewBox>
        <div className="reviewTitleBox">
          <h4>교환학교 후기</h4>
          <button onClick={handleAccordion}>
            {isOpen ? '접기' : '후기 작성하기'}
          </button>
        </div>
        <AccordionContainer open={isOpen}>
          <hr />
          <ReviewOptions>
            <li>
              <label htmlfor="koreanCombo">한국인 수</label>
              <select name="koreans" id="koreanCombo">
                <option value="">선택</option>
                <option value="1">매우 적음</option>
                <option value="2">적음</option>
                <option value="3">보통</option>
                <option value="4">많음</option>
                <option value="5">매우 많음</option>
              </select>
            </li>
            <li>
              <label htmlfor="difficultyCombo">학업 난이도</label>
              <select name="difficulty" id="difficultyCombo">
                <option value="">선택</option>
                <option value="1">매우 쉬움</option>
                <option value="2">쉬움</option>
                <option value="3">보통</option>
                <option value="4">어려움</option>
                <option value="5">매우 어려움</option>
              </select>
            </li>
            <li>
              <label htmlfor="costInput">비용</label>
              <input type="number" id="costInput" placeholder=" 000만원" />
            </li>
            <li>
              <label htmlfor="transportationCombo">교통</label>
              <select name="transportation" id="transportationCombo">
                <option value="">선택</option>
                <option value="1">매우 불편함</option>
                <option value="2">불편함</option>
                <option value="3">보통</option>
                <option value="4">편함</option>
                <option value="5">매우 편리함</option>
              </select>
            </li>
            <li>
              <label htmlfor="safetyCombo">학업 난이도</label>
              <select name="safety" id="safetyCombo">
                <option value="">선택</option>
                <option value="1">매우 위험함</option>
                <option value="2">위험함</option>
                <option value="3">보통</option>
                <option value="4">안전함</option>
                <option value="5">매우 안전함</option>
              </select>
            </li>
          </ReviewOptions>
          <hr />
          <ReviewWrite>
            <li>
              <span>abroad123</span>
              <div>
                <span>교환학교에 대한 총평을 해주세요</span>
                <span className="empty_point">
                  <span className="filled_point">⭐️⭐️⭐️⭐️⭐️</span>
                </span>
              </div>
            </li>
            <hr />
            <textarea
              name="review"
              id="forUnivReview"
              placeholder="해당 교환교에서 경험했던 여러분들의 소중한 추억들과 다양한 의견들을 작성해주세요."
            ></textarea>
            <button>후기 작성</button>
          </ReviewWrite>
          <hr />
        </AccordionContainer>
        <ReviewUl className="greyBorderBox">
          {reviews.length !== 0 &&
            reviews.map((review) => (
              <ReviewLi key={review._id}>
                <LiLeft>
                  <span className="empty_point">
                    <span
                      className="filled_point"
                      style={{ minWidth: `${(review.avg_point / 5) * 100}%` }}
                    ></span>
                  </span>
                  <span>{review.owner.name}</span>
                  <span>2021.11.15 19:17</span>
                </LiLeft>
                <LiCenter>{review.text}</LiCenter>
                <LiThird>
                  <HiPencil />
                  <BsX />
                </LiThird>
                <LiRight>
                  <button>
                    <BsHeartFill
                      style={{ color: '#66a6ff', fontSize: '1rem' }}
                    />
                    <span style={{ color: '#66a6ff' }}>0</span>
                  </button>
                </LiRight>
              </ReviewLi>
            ))}
        </ReviewUl>
      </ReviewBox>
      <TogetherBox>
        <h4>지원 가능한 학교</h4>
        <div>
          <div>
            <span></span>
            <div className="greyBorderBox"></div>
          </div>
        </div>
      </TogetherBox>
    </CollegeDetailBox>
  );
=======
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function CollegeDetail({ match }) {
  let queryString = new URLSearchParams(window.location.search);
  const param = match.params;

  useEffect(() => {
    console.log(queryString);
    console.log(param);
  }, [queryString]);

  return <div>해외교 평가 게시판</div>;
>>>>>>> develope
}

export default CollegeDetail;

const CollegeDetailBox = styled.div`
  margin: 0 auto;
  width: 75vw;
  min-height: 55vh;
  height: 100%;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4% 0;
  height: 50vh;
`;
const UnivImage = styled.img`
  width: 40%;
  object-fit: cover;
  border-radius: 20px;
`;
const ReviewShortcut = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 35%;
  border-radius: 25px;
  padding: 2% 2.5%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;
const TitleStar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 30%;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  & .empty_point {
    position: relative;
    display: inline-block;
    width: 8rem;
    height: 1.5rem;
    background: transparent url('/images/empty_star.svg') no-repeat;
    background-size: 8rem 1.5rem;
    & .filled_point {
      position: absolute;
      display: inline-block;
      min-width: 80%;
      height: 1.5rem;
      background: transparent url('/images/filled_star.svg') no-repeat;
      background-size: 8rem 1.5rem;
    }
  }
  & .caption_avg_point {
    transform: translateY(18%);
    height: 100%;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 1rem;
  }
  & .reviews_count {
    transform: translateY(35%);
    font-size: 0.9rem;
    height: 100%;
  }
`;
const AverageReview = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
const AverageLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 45%;
  & > h5 {
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
const AverageValueBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 25%;
  & > div {
    font-size: 1.1rem;
    font-weight: 700;
    color: #66a6ff;
  }
`;
const ForLangBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  & > h4 {
    width: 12rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 25px;
    color: #ffffff;
    background-color: #66a6ff;
    font-size: 1.2rem;
    font-weight: 700;
  }
  & > div.greyBorderBox {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    height: 10rem;
  }
`;
const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  & > div.reviewTitleBox {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    & > h4 {
      width: 12rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      border-radius: 25px;
      color: #ffffff;
      background-color: #66a6ff;
      font-size: 1.2rem;
      font-weight: 700;
    }
    & > button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8rem;
      height: 2.5rem;
      border: 1px solid #66a6ff;
      color: #66a6ff;
      border-radius: 10px;
    }
  }
`;
const TogetherBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  & > h4 {
    width: 12rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 25px;
    color: #ffffff;
    background-color: #66a6ff;
    font-size: 1.2rem;
    font-weight: 700;
  }
  & div.greyBorderBox {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    height: 10rem;
  }
`;
const ReviewUl = styled.ul`
  border: 1px solid #d1d1d1;
  border-radius: 15px;
  height: 35rem;
  padding: 1em;
  & li {
    border-bottom: 1px solid #d1d1d1;
  }
  /* & li:last-child {
    border-bottom: none;
  } */
`;
const ReviewLi = styled.li`
  display: flex;
  padding: 0.5em 1em;
  height: 18%;
`;
const LiLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 18%;
  & :nth-child(2) {
    margin: 4% 0;
    font-weight: 700;
  }
  & :nth-child(3) {
    color: #d1d1d1;
  }
  & .empty_point {
    position: relative;
    display: inline-block;
    width: 6rem;
    height: 1.1rem;
    background: transparent url('/images/empty_star.svg') no-repeat;
    background-size: 6rem 1.1rem;
    margin-right: auto;
    & .filled_point {
      position: absolute;
      display: inline-block;
      min-width: 70%;
      height: 100%;
      background: transparent url('/images/filled_star.svg') no-repeat;
      background-size: 6rem 1.1rem;
    }
  }
`;
const LiCenter = styled.p`
  display: flex;
  align-items: center;
  flex-basis: 70%;
  font-weight: 700;
`;
const LiThird = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
  & > * {
    border: 1px solid #d1d1d1;
    color: #d1d1d1;
    font-size: 2rem;
    margin-right: 0.5rem;
    border-radius: 5px;
    padding: 0.1em;
    cursor: pointer;
  }
`;
const LiRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    padding: 0.2em;
    width: 3.5rem;
    height: 3.5rem;
    & > * {
      height: 1rem;
    }
  }
`;

const AccordionContainer = styled.div`
  ${({ open }) => {
    return !open
      ? `max-height:0; overflow:hidden; transition: all 0.4s;`
      : `max-height : 100rem;  overflow:hidden; transition: all 0.4s;`;
  }}
  padding: 0.5em;
`;

const ReviewOptions = styled.ul`
  padding: 1em;
  & li {
    display: flex;
    align-items: center;
    height: 3rem;
    & > label {
      font-weight: 700;
      flex-basis: 10%;
    }
    & input#costInput {
      width: 6.5rem;
      border: 1.5px solid #444444;
      border-radius: 5px;
      padding: 0.2em;
      color: #444444;
    }
    & input#costInput::placeholder {
      color: #444444;
    }
    & select {
      border: 1.5px solid #444444;
      border-radius: 5px;
      padding: 0.2em;
      color: #444444;
    }
  }
`;

const ReviewWrite = styled.ul`
  position: relative;
  height: 18rem;
  margin: 1rem 0;
  padding: 1em 1.5em;
  border: 1px solid #d1d1d1;
  border-radius: 15px;
  & > li {
    display: flex;
    align-items: center;
    height: 18%;
    & > span {
      font-weight: 700;
      font-size: 1.2rem;
    }
    & > div {
      margin-left: auto;
    }
  }
  & > button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3rem;
    right: 1%;
    bottom: 3%;
    background-color: #66a6ff;
    border-radius: 25px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5em;
  }
  & > textarea {
    resize: none;
    width: 85%;
    height: 70%;
    margin-top: 1rem;
  }
`;

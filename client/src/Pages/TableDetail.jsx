import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TableDetail({
  rectValue,
  isOpen,
  reviews,
  forUnivObj,
}) {
  const [evaluations, setEvaluations] = useState({
    avgPoint: null,
    koreans: null,
    difficulty: null,
    avgCost: null,
    trans: null,
    safety: null,
  });
  const calcReviews = () => {
    let avgPoint = 0,
      koreans = 0,
      difficulty = 0,
      avgCost = 0,
      trans = 0,
      safety = 0;
    for (let i = 0; i < reviews.length; i++) {
      avgPoint += reviews[i].avg_point;
      koreans += reviews[i].korean;
      difficulty += reviews[i].difficulty;
      avgCost += reviews[i].avg_cost;
      trans += reviews[i].transportation;
      safety += reviews[i].safety;
    }
    if (koreans / reviews.length > 4) {
      koreans = '매우 많음';
    } else if (koreans / reviews.length > 3) {
      koreans = '많음';
    } else if (koreans / reviews.length > 2) {
      koreans = '적당함';
    } else if (koreans / reviews.length > 1) {
      koreans = '적음';
    } else {
      koreans = '매우 적음';
    }
    if (difficulty / reviews.length > 4) {
      difficulty = '매우 어려움';
    } else if (difficulty / reviews.length > 3) {
      difficulty = '어려움';
    } else if (difficulty / reviews.length > 2) {
      difficulty = '적당함';
    } else if (difficulty / reviews.length > 1) {
      difficulty = '쉬움';
    } else {
      difficulty = '매우 쉬움';
    }
    if (trans / reviews.length > 4) {
      trans = '매우 편리함';
    } else if (trans / reviews.length > 3) {
      trans = '편리함';
    } else if (trans / reviews.length > 2) {
      trans = '적당함';
    } else if (trans / reviews.length > 1) {
      trans = '불편함';
    } else {
      trans = '매우 불편함';
    }
    if (safety / reviews.length > 4) {
      safety = '매우 안전함';
    } else if (safety / reviews.length > 3) {
      safety = '안전함';
    } else if (safety / reviews.length > 2) {
      safety = '적당함';
    } else if (safety / reviews.length > 1) {
      safety = '위험함';
    } else {
      safety = '매우 위험함';
    }
    setEvaluations({ avgPoint, koreans, difficulty, avgCost, trans, safety });
  };
  useEffect(() => {
    calcReviews();
  }, [reviews]);
  return (
    <MainBox className="detail_mainBox" top={rectValue} isOpen={isOpen}>
      <LeftBox className="detail_leftBox">
        <img className="detail_image" src={forUnivObj.image} alt="img" />
        <LeftCaption className="rightBox_caption">
          <span className="empty_point">
            <span
              style={{
                minWidth: `${(evaluations.avgPoint / reviews.length) * 20}%`,
              }}
              className="filled_point"
            ></span>
          </span>
          <span className="caption_avg_point">
            {(evaluations.avgPoint / reviews.length).toFixed(1)}
          </span>
        </LeftCaption>
        <EvaluationTable className="evaluation_table">
          <tbody>
            <tr className="korean">
              <th scope="row">한국인 수</th>
              <td>{evaluations.koreans}</td>
            </tr>
            <tr className="difficulty">
              <th scope="row">학업 난이도</th>
              <td>{evaluations.difficulty}</td>
            </tr>
            <tr className="avg_cost">
              <th scope="row">평균 비용</th>
              <td>{evaluations.avgCost}</td>
            </tr>
            <tr className="transportation">
              <th scope="row">교통</th>
              <td>{evaluations.trans}</td>
            </tr>
            <tr className="safety">
              <th scope="row">치안/인종차별</th>
              <td>{evaluations.safety}</td>
            </tr>
          </tbody>
        </EvaluationTable>
      </LeftBox>
      <RightBox className="detail_rightBox">
        <Comments className="rightBox_comments">
          {reviews.length !== 0 &&
            reviews.slice(0, 4).map((review, index) => (
              <li key={index}>
                <CommentContent className="comments_info">
                  <span className="comments_empty_point">
                    <span
                      style={{ minWidth: `${(review.avg_point / 5) * 100}%` }}
                      className="comments_filled_point"
                    ></span>
                  </span>
                  <div className="comments_id">{review.owner.name}</div>
                </CommentContent>
                <CommentText className="comments_comments">
                  {review.text}
                </CommentText>
              </li>
            ))}
        </Comments>
        <BtnBox className="rightBox_buttons">
          <InfoBtn className="ogInfo_button">국제처 공지 바로가기</InfoBtn>
          <MoreBtn
            to={{
              pathname: `/college/${reviews._id}`,
              state: { reviews, evaluations, forUnivObj },
            }}
            className="more_detail_button"
          >
            + 더 보기
          </MoreBtn>
        </BtnBox>
      </RightBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 75vw;
  height: 68vh;
  border: 1px solid #d1d1d1;
  border-left: 3px solid #66a6ff;
  padding: 2em;
  background-color: #ffffff;
  top: ${(props) => `${props.top}px`};
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  & > img {
    height: 15rem;
    border-radius: 20px;
  }
`;
const LeftCaption = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 4% 0;
  font-weight: 700;
  & > .empty_point {
    position: relative;
    display: inline-block;
    width: 8rem;
    height: 1.5rem;
    background: transparent url('/images/empty_star.svg') no-repeat;
    background-size: 8rem 1.5rem;
    margin-right: 1rem;
    & > .filled_point {
      position: absolute;
      display: inline-block;
      min-width: 80%;
      height: 1.5rem;
      background: transparent url('/images/filled_star.svg') no-repeat;
      background-size: 8rem 1.5rem;
    }
  }
`;
const EvaluationTable = styled.table`
  border-radius: 15px;
  min-height: 45%;
  border-collapse: collapse;
  box-shadow: 0 0 0 1px #d1d1d1;
  border-style: hidden;
  & tr {
    height: 1.5rem;
  }
  & th {
    height: 1rem;
    text-align: left;
    vertical-align: middle;
    width: 45%;
    padding-left: 1.5rem;
  }
  & td {
    height: 1rem;
    vertical-align: middle;
  }
`;
const RightBox = styled.div`
  display: flex;
  width: 67%;
  flex-direction: column;
  padding: 0 1.5em 0 3em;
`;
const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #d1d1d1;
  border-radius: 15px;
  height: 85%;
  padding: 0 1em;
  margin-bottom: 2%;
  & li {
    display: flex;
    align-items: center;
    flex-grow: 1;
    border-bottom: 1px solid #d1d1d1;
    font-size: 1rem;
    font-weight: 700;
  }
  & li:last-child {
    border: none;
  }
`;
const CommentContent = styled.div`
  min-width: max-content;
  margin-right: 4%;
  & > .comments_empty_point {
    position: relative;
    display: inline-block;
    width: 6rem;
    height: 1.1rem;
    background: transparent url('/images/empty_star.svg') no-repeat;
    background-size: 6rem 1.1rem;
    margin-right: auto;
    & > .comments_filled_point {
      position: absolute;
      display: inline-block;
      min-width: 70%;
      height: 100%;
      background: transparent url('/images/filled_star.svg') no-repeat;
      background-size: 6rem 1.1rem;
    }
  }
`;
const CommentText = styled.div`
  text-align: justify;
  line-height: 1.3rem;
  padding-right: 0.5em;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 5%;
`;
const InfoBtn = styled.button`
  display: inline-block;
  padding: 0.7em;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #66a6ff;
  color: #66a6ff;
`;
const MoreBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  padding: 0.7em;
  border: none;
  background-color: #66a6ff;
  color: #ffffff;
  border-radius: 15px;
`;

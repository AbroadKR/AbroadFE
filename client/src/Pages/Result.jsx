<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
=======
import React, { useState, useEffect } from 'react';
>>>>>>> develope
import styled from 'styled-components';
import axios from 'axios';
import TableDetail from './TableDetail';

<<<<<<< HEAD
function Result({match}) {
    const [tableData, setTableData] = useState([]);
    const [rectValue, setRectValue] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [image, setImage] = useState();
    const {koUniv, continent, country} = match.params;
    const getTables = async ()=>{
        const {data : res} = await axios.post('/api/getTables', country ?  {koUniv, continent, country : country.split(',')} : {koUniv, continent});
        setTableData(res);
    }
    useEffect(() => {
        getTables();
    }, [])
    const getReviews = async (title) => {
        const {data : res} = await axios.post('/api/getReviews', {forUniv : title})
        setReviews(res);
    }
    const getImage = async (title)=>{
        const {data : res} = await axios.post('/api/getForUnivs', {title});
        setImage(res[0].image);
    }
    const handleDetail = (e)=>{
        let forUnivTitle = e.currentTarget.children[2].children[0].innerText
        const tbodyTr = e.currentTarget.parentElement.children;
        const vh = document.querySelector('html');
        if (e.currentTarget.classList.contains('open')){
            e.currentTarget.classList.remove('open');
            setIsOpen(false);
            const coords = e.currentTarget.getBoundingClientRect();
            const trBottom = coords.bottom + vh.scrollTop;
            setRectValue(trBottom);
        } else {
            for(let i=0; i<tbodyTr.length;i++){
                if (tbodyTr[i].classList.contains('open')){
                    tbodyTr[i].classList.remove('open');
                    setIsOpen(false);
                }
            }
            const coords = e.currentTarget.getBoundingClientRect();
            const trBottom = coords.bottom + vh.scrollTop;
            getImage(forUnivTitle);
            setRectValue(trBottom);
            getReviews(forUnivTitle);
            e.currentTarget.classList.add('open');
            setIsOpen(true);
        }
    }
    return (
        <Body>
            <Wrapper>
                {reviews.length !== 0 && <TableDetail rectValue={rectValue} isOpen={isOpen} reviews={reviews} image={image}/>}
                <CaptionBox className="main_caption">
                    <CaptionTitle className="caption_title">나의 학교</CaptionTitle>
                    <CaptionBar className="caption_bar"></CaptionBar>
                    <div className="captionKoUniv">{koUniv}학교</div>
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
                        {tableData && tableData.map((data,i) => 
                            <tr key={data.id} onClick={handleDetail}>
                                <td>{data.continent}</td>
                                <td>{data.country}</td>
                                <td>{data.forUniv_kor && `${data.forUniv_kor},`}<span>{data.forUniv_eng}</span></td>
                                <td>{data.TO}</td>
                                <td>{data.period}</td>
                            </tr>
                            )}
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
    & tr.open td {
        padding-bottom: 70.6vh;
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
=======
function Result({ match }) {
  const [tableData, setTableData] = useState([]);
  const [rectValue, setRectValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState();
  const { koUniv, continent, country } = match.params;
  const getTables = async () => {
    const { data: res } = await axios.post(
      '/api/getTables',
      country
        ? { koUniv, continent, country: country.split(',') }
        : { koUniv, continent }
    );
    setTableData(res);
  };
  useEffect(() => {
    getTables();
  }, []);
  const getReviews = async (title) => {
    const { data: res } = await axios.post('/api/getReviews', {
      forUniv: title,
    });
    setReviews(res);
  };
  const getImage = async (title) => {
    const { data: res } = await axios.post('/api/getForUnivs', { title });
    setImage(res[0].image);
  };
  const handleDetail = (e) => {
    let forUnivTitle = e.currentTarget.children[2].children[0].innerText;
    const tbodyTr = e.currentTarget.parentElement.children;
    const vh = document.querySelector('html');
    if (e.currentTarget.classList.contains('open')) {
      e.currentTarget.classList.remove('open');
      setIsOpen(false);
      const coords = e.currentTarget.getBoundingClientRect();
      const trBottom = coords.bottom + vh.scrollTop;
      setRectValue(trBottom);
    } else {
      for (let i = 0; i < tbodyTr.length; i++) {
        if (tbodyTr[i].classList.contains('open')) {
          tbodyTr[i].classList.remove('open');
          setIsOpen(false);
        }
      }
      const coords = e.currentTarget.getBoundingClientRect();
      const trBottom = coords.bottom + vh.scrollTop;
      getImage(forUnivTitle);
      setRectValue(trBottom);
      getReviews(forUnivTitle);
      e.currentTarget.classList.add('open');
      setIsOpen(true);
    }
  };
  return (
    <Body>
      <Wrapper>
        {reviews.length !== 0 && (
          <TableDetail
            rectValue={rectValue}
            isOpen={isOpen}
            reviews={reviews}
            image={image}
          />
        )}
        <CaptionBox className="main_caption">
          <CaptionTitle className="caption_title">나의 학교</CaptionTitle>
          <CaptionBar className="caption_bar"></CaptionBar>
          <div className="captionKoUniv">{koUniv}학교</div>
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
            {tableData &&
              tableData.map((data, i) => (
                <tr key={data.id} onClick={handleDetail}>
                  <td>{data.continent}</td>
                  <td>{data.country}</td>
                  <td>
                    {data.forUniv_kor && `${data.forUniv_kor},`}
                    <span>{data.forUniv_eng}</span>
                  </td>
                  <td>{data.TO}</td>
                  <td>{data.period}</td>
                </tr>
              ))}
          </TBody>
        </Table>
      </Wrapper>
    </Body>
  );
}

export default Result;

const Body = styled.div`
  width: 100vw;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 75vw;
  margin: 4.5rem auto 172px auto;
`;

const CaptionBox = styled.div`
  display: flex;
  align-items: center;
  height: 2.8rem;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 5%;
  background-color: #f3f3f3;
  & .captionKoUniv {
    color: #444444;
  }
`;
const CaptionTitle = styled.div`
  color: #b6b6b6;
  margin: 0 1.5rem 0 3rem;
`;
const CaptionBar = styled.span`
  display: inline-block;
  width: 1px;
  height: 45%;
  background-color: #d1d1d1;
  margin-right: 1.5rem;
`;
const Table = styled.table`
  border: 1px solid #d1d1d1;
  width: 100%;
  margin-top: 5%;
  border-collapse: collapse;
`;
const THead = styled.thead`
  background-color: #f3f3f3;
  height: 3.75rem;
  & th {
    font-size: 1rem;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
    border-bottom: 1px solid #d1d1d1;
    font-weight: 400;
    color: #444444;
    padding-left: 1.5em;
  }
  & th:nth-child(3) {
    width: calc(300px * 1vw);
  }
  & .main_thead th:nth-child(1),
  .main_thead th:nth-child(2),
  .main_thead th:nth-child(4),
  .main_thead th:nth-child(5) {
    width: 10rem;
  }
`;

const TBody = styled.tbody`
  font-weight: 700;
  & tr {
    border-bottom: 1px solid #d1d1d1;
    height: 3.75rem;
    vertical-align: middle;
    & td {
      padding: 1.5em;
      cursor: pointer;
    }
    & td:nth-child(3) {
      color: #66a6ff;
    }
  }
  & tr.open td {
    padding-bottom: 70.6vh;
  }
  & tr:hover td {
    background-color: #dfeafc;
  }
  & tr:nth-child(even):hover td {
    background-color: #dfeafc;
  }
  & tr:nth-child(even) td {
    background-color: #fbfbfb;
  }
`;
>>>>>>> develope

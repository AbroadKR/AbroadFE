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
}

export default CollegeDetail;

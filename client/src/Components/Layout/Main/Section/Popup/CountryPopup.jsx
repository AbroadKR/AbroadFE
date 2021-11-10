import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function CountryPopup({ countries, handleCountry }) {
  const [selCountries, setSelCountries] = useState([]);
  useEffect(() => {
    handleCountry(selCountries);
  }, [selCountries]);
  const handleSelect = (country) =>
    selCountries.includes(country)
      ? setSelCountries(selCountries.filter((item) => item !== country))
      : setSelCountries([...selCountries, country]);
  return (
    <PopUp className="popup country">
      <p>
        <span className="hl">국가</span>를 선택해주세요
      </p>
      <ul className="countryLists">
        {countries === undefined
          ? ''
          : countries.map((country, index) => (
              <li key={index} onClick={() => handleSelect(country)}>
                {country}
              </li>
            ))}
      </ul>
    </PopUp>
  );
}

export default CountryPopup;

const PopUp = styled.div`
  position: absolute;
  z-index: 10 !important;
  display: block;
  top: 7rem;
  font-weight: 700;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  &.country {
    max-height: 20rem;
    overflow: scroll;
    padding: 2em 1em;
    right: 0;
  }
  & > p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
    & > .hl {
      color: #66a6ff;
    }
  }
  & > .countryLists {
    display: flex;
    width: 30rem;
    flex-wrap: wrap;
    padding: 0 1em;
    overflow: scroll;
    & .selected {
      transition: all 0.1s;
      color: #66a6ff;
    }
    & > li {
      position: relative;
      text-align: left;
      height: 3rem;
      line-height: 3rem;
      width: 50%;
      border-bottom: 1px solid #d1d1d1;
      cursor: pointer;
      &:hover {
        background-color: #e5e5e5;
        color: #66a6ff;
      }
      &::before {
        content: '';
        background-image: url('Images/main_view/location_default.svg');
        background-size: cover;
        background-position: center;
        width: 14px;
        height: 16px;
        display: inline-block;
        margin-right: 1em;
        margin-left: 1em;
        transform: translateY(20%);
      }
      &:hover::before {
        background-image: url('Images/main_view/location_checked.svg');
      }
    }
  }
`;

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';
import KoUnivPopup from './Popup/KoUnivPopup';
import CountryPopup from './Popup/CountryPopup';
import ContinentPopup from './Popup/ContinentPopup';

function Top() {
  const [clickedOptions, setClickedOptions] = useState();
  const [fetchData, setFetchData] = useState({
    koUnivs: [],
    continents: [],
    countries: [],
  });
  const [selectedData, setSelectedData] = useState({
    koUnivs: [],
    continents: [],
    countries: [],
  });
  const { continents, countries } = fetchData;
  const [koUnivLists, setKoUnivLists] = useState([]);

  const koUnivInputRef = useRef();
  const continentInputRef = useRef();
  const countryInputRef = useRef();

  const togglePopup = (name) => {
    name === 'koUniv'
      ? getKoUnivs()
      : name === 'continent'
      ? getContinents()
      : name === 'country' && getCountries();
    return setClickedOptions(name);
  };
  const getKoUnivs = async () => {
    koUnivInputRef.current.focus();
    const { data: res } = await axios.get('/api/getKoUnivs');
    setFetchData({ koUnivs: res });
  };
  const getContinents = async () => {
    countryInputRef.current.value = '';
    const { data: res } = await axios.post('/api/getContinents', {
      selKoUniv: koUnivInputRef.current.value,
    });
    setFetchData({ continents: res });
  };
  const getCountries = async () => {
    const { data: res } = await axios.post('/api/getCountries', {
      selKoUniv: koUnivInputRef.current.value,
      selContinent: continentInputRef.current.value,
    });
    setFetchData({ countries: res });
  };
  const findKoUniv = (wordToMatch, { koUnivs }) => {
    return koUnivs.filter((koUniv) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return koUniv.match(regex);
    });
  };
  const koUnivMatches = (e) => {
    const matchKoUnivs = findKoUniv(e.target.value, fetchData);
    return e.target.value === ''
      ? setKoUnivLists([])
      : setKoUnivLists(matchKoUnivs);
  };
  const handleInput = (list) => {
    koUnivInputRef.current.value = list;
    setSelectedData({ ...selectedData, koUnivs: list });
    getContinents();
  };
  const handleContinent = (list) => {
    setSelectedData({ ...selectedData, continents: list });
    return list.length === 0
      ? (continentInputRef.current.value = '')
      : (continentInputRef.current.value = list);
  };
  const handleCountry = (list) => {
    setSelectedData({ ...selectedData, countries: list });
    return list.length === 0
      ? (countryInputRef.current.value = '')
      : (countryInputRef.current.value = list);
  };

  return (
    <Section1>
      <SearchBar>
        <Container
          tabIndex="1"
          className="container"
          onClick={() => togglePopup('koUniv')}
          onBlur={() => setClickedOptions('')}
        >
          <Options className="koUniv">
            <OptionsTitle>재학 중인 대학교</OptionsTitle>
            <KoUnivInput
              className="koUnivInput"
              type="text"
              name="koUniv"
              placeholder="현재 재학 중인 대학을 입력하세요"
              autoComplete="off"
              onChange={koUnivMatches}
              onKeyUp={koUnivMatches}
              ref={koUnivInputRef}
            />
          </Options>
          {clickedOptions === 'koUniv' ? (
            <KoUnivPopup koUnivLists={koUnivLists} handleInput={handleInput} />
          ) : (
            ''
          )}
        </Container>
        <Bar className="bar"></Bar>
        <Container
          tabIndex="1"
          className="continent"
          onClick={() => togglePopup('continent')}
          onBlur={() => setClickedOptions('')}
        >
          <Options className="continent">
            <OptionsTitle>대륙</OptionsTitle>
            <NormalInput
              type="text"
              name="continent"
              placeholder="어느 대륙을 선호하시나요?"
              className="continentInput"
              ref={continentInputRef}
              disabled
            />
          </Options>
          {clickedOptions === 'continent' ? (
            <ContinentPopup
              continents={continents}
              handleContinent={handleContinent}
            />
          ) : (
            ''
          )}
        </Container>
        <Bar className="bar"></Bar>
        <Container
          tabIndex="1"
          className="country"
          onClick={() => togglePopup('country')}
          onBlur={() => setClickedOptions('')}
        >
          <Options className="country">
            <OptionsTitle>국가</OptionsTitle>
            <NormalInput
              type="text"
              name="country"
              placeholder="어느 국가를 선호하시나요?"
              className="countryInput"
              ref={countryInputRef}
              disabled
            />
          </Options>
          <SearchButton
            to={{
              pathname: `/result/${selectedData.koUnivs}/${selectedData.continents}/${selectedData.countries}`,
            }}
            className="section1_search_button"
            type="submit"
          >
            <FiSearch />
          </SearchButton>
          {clickedOptions === 'country' ? (
            <CountryPopup countries={countries} handleCountry={handleCountry} />
          ) : (
            ''
          )}
        </Container>
      </SearchBar>
    </Section1>
  );
}

export default Top;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
`;
const SearchBar = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  border: none;
  border-radius: 50px;
  width: 100%;
  height: 12vh;
  /* min-height : 105px; */
  max-height: 105px;
  margin: 0 auto 5% auto;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`;
const Container = styled.div`
  position: relative;
  flex-basis: 35%;
`;
const Options = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  padding-left: 10%;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;
const OptionsTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 13px;
`;
const KoUnivInput = styled.input`
  outline: none;
  border: none;
  width: 90%;
  padding: 0;
  font-size: 1.1rem;
  color: #444444, 50%;
  background-color: transparent;
  &::placeholder {
    font-size: 1.1rem;
    color: rgba(68, 68, 68, 0.5);
  }
`;
const NormalInput = styled.input`
  display: block;
  border: none;
  padding: 0;
  max-width: 65%;
  background-color: transparent;
  font-size: 1.1rem;
  color: #444444, 50%;
  cursor: pointer;
  &::placeholder {
    overflow: visible;
    font-size: 1.1rem;
    color: rgba(68, 68, 68, 0.5);
  }
`;
const Bar = styled.span`
  margin: auto;
  background-color: #e5e5e5;
  width: 1px;
  height: 47px;
`;
const SearchButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  border-radius: 50px;
  width: 30%;
  height: 89%;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(180deg, #89f7fe 0%, #66a6ff 100%);
  color: ghostwhite;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
`;

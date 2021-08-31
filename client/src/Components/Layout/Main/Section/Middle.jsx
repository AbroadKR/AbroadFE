import React, { Component } from "react";
import styled from "styled-components";
import { Imoge, Imac } from "../../../images";

class Middle extends Component {
	render() {
		return (
			<Section>
				<Title>왜 어브로드를 찾을까요?</Title>
				<Container>
					<LeftColumn>
						<StyledImoge src={Imoge} alt="man image" />
						<StyledImac src={Imac} alt="imac image" />
					</LeftColumn>
					<RightColumn>
						<Phrase>
							<strong>
								보기 불편하고 턱없이 부족한 교환 관련 정보들로,
								우리 대학생들은 해외 교환학생 프로그램을 떠나기
								전에 많은 답답함을 느낍니다.
							</strong>
						</Phrase>
						{/* <Arrow src={arrow} alt="down-arrow" /> */}
						<Phrase blue>
							<strong>
								어브로드는 유학생 및 교환학생들을 위한 다양하고
								많은 정보들을 한 눈에 보기 쉽게 제공하며, 서로
								활발하게 소통할 수 있는 글로벌 커뮤니티입니다.
							</strong>
						</Phrase>
					</RightColumn>
				</Container>
			</Section>
		);
	}
}

export default Middle;

const Section = styled.section`
	width: 75vw;
	margin: 15rem auto 0;
`;

const Title = styled.span`
	font-size: 3rem;
	font-weight: 800;
	color: #444444;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
	display: flex;
	margin-top: 3rem;
	justify-content: center;
`;

const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledImoge = styled.img`
	width: 15rem;
	height: 15rem;
	transform: translateX(10rem);
`;

const StyledImac = styled.img`
	width: 40rem;
	height: 29rem;
`;

const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 6rem;
`;

const Phrase = styled.p`
	transform: translateX(-5rem);
	width: 26em;
	font-size: 1.5rem;
	color: ${(props) => (props.blue ? "#66A6FF" : "#444444")};
	font-weight: ${(props) => (props.blue ? "700" : "400")};
	margin-bottom: 18rem;
`;

// const Arrow = styled.img``;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Pagination() {
  return (
    <>
      <Link to="/WriteArticle">
        <Button>글작성</Button>
      </Link>
    </>
  );
}

const Button = styled.button`
  width: 4em;
  height: 3em;
  border-radius: 15px/15px;
  background: #66a6ff;
  color: white;
  margin: 2em auto;
`;

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
  background: rgba(102, 166, 255, 0.5);
  color: white;
`;

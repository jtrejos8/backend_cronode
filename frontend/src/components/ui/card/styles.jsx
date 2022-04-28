import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CustomCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 1px 1px 15px #c9c9c9;
  width: 380px;
  border: 1px solid #fff;
  /* background: url(${(props) => props.src}) no-repeat center; */
  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

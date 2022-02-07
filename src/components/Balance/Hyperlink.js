import styled from "styled-components";
import { Link } from "react-router-dom";

const Hyperlink = styled(Link)`
  width: 47.5%;
  height: 114px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;

  position: relative;

  padding: 10px;

  background: #A328D6;

  border: none;
  border-radius: 5px;
  
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  text-decoration: none;

  color: #FFFFFF;

  img{
    position: absolute;
    top: 10px;
    left: 10px;
  }

  @media screen and (min-width: 800px) {
    width: 49%;
  }
`;

export default Hyperlink;
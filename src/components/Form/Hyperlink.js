import styled from "styled-components";
import { Link } from "react-router-dom";

const Hyperlink = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-decoration: none;

  pointer-events: ${(props) => props.stageloading ? "none" : "all"};

  color: #FFFFFF;
`;

export default Hyperlink;

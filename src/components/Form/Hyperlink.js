import styled from "styled-components";
import { Link } from "react-router-dom";

const Hiperlink = styled(Link)`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-decoration: none;
  /* pointer-events: ${(props) => props.stageLoading ? "none" : "all"}; */

  color: #FFFFFF;
`;

export default Hiperlink;

import styled from "styled-components";

const MovementValue = styled.span`
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.isInput ? "#03AC00" : "#C70000"};
`;

export default MovementValue;
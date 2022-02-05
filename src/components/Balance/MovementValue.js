import styled from "styled-components";

const MovementValue = styled.span`
  font-size: 16px;
  line-height: 19px;

  margin-right: 10px;

  color: ${(props) => props.isInput ? "#03AC00" : "#C70000"};
`;

export default MovementValue;
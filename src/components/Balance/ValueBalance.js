import styled from "styled-components";

const ValueBalance = styled.h2`
  font-size: 17px;
  line-height: 20px;

  color: ${(props) => props.balanceWalletResult ? "#03AC00" : "#C70000"};
`;

export default ValueBalance;
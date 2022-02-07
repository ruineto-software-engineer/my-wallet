import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 36px;

  background: #A328D6;

  pointer-events: ${(props) => props.stageloading ? "none" : "all"};

  border: none;
  border-radius: 5px;
  
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;

  color: #FFFFFF;

  cursor: pointer;
`;

export default Button;
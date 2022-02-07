import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 58px;

  margin-bottom: 13px;

  padding: 10px;

  background-color: ${(props) => props.stageloading ? "#F2F2F2" : "#FFFFFF"};

  pointer-events: ${(props) => props.stageloading ? "none" : "all"};

  border: none;
  border-radius: 5px;

  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 23px;

  color: ${(props) => props.stageloading ? "#AFAFAF" : "#000000"};

  &::placeholder{
    color: #000000;
  }
`;

export default Input;
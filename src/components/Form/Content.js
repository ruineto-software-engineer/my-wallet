import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 85%;

  @media screen and (min-width: 800px) {
    width: 326px;
  }
`;

export default Content;
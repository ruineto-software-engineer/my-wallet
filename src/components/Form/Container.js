import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #9156BE;

  img{
    margin-bottom: 24px;
  }

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;

export default Container;
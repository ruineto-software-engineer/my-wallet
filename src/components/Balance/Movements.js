import styled from "styled-components";

const Movements = styled.div`
  width: 326px;
  height: 446px;
  
  display: ${(props) => props.stageisLoading === true ? "flex" 
    : props.stageMovements === null ? "flex"
    : props.stageMovements.length === 0 ? "flex"
    : "initial"
  };
  align-items: ${(props) => props.stageisLoading === true ? "center" 
    : props.stageMovements === null ? "center"
    : props.stageMovements.length === 0 ? "center"
    : "initial"
  };
  justify-content: ${(props) => props.stageisLoading === true ? "center" 
    : props.stageMovements === null ? "center"
    : props.stageMovements.length === 0 ? "center"
    : "initial"
  };

  padding: 10px;

  background: #FFFFFF;
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  position: relative;

  color: #868686;

  footer{
    position: absolute;
    bottom: 10px;
    left: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 306px;
  }
`;

export default Movements;
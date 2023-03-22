import React from "react";
import styled from "styled-components";


const Welcoming = () => {
  return (
    <MainContainer>
      <BackgroundImage src="https://i.im.ge/2023/03/23/DBQjVW.Niestandardowe-wymiary-1920x1080-px-8.jpg" />
      <br/><br/><br/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 80%;
  z-index: -1;
  margin-left: 30vh;
`;

export default Welcoming;
import React from 'react'
import "../../App.css";
import DreamsGrid from '../DreamsGrid';
import MostPopular from '../MostPopular';
import styled from "styled-components";
import Navbar from '../Navbar';
import AddDreamButton from '../AddDreamButton';



const Home = () => {
    return (
        <React.Fragment>
          <Navbar/>
            <HomeContainer>
                <BackgroundImage src="https://i.im.ge/2023/03/26/Iliw0X.Niestandardowe-wymiary-1920x1080-px-11.jpg" />
            </HomeContainer>
            <AddDreamButton/>
            <MostPopular/>
            <DreamsGrid/>
            <br/>
        </React.Fragment>
    )
}

const HomeContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: ridge;
    border-width: thin;
    border-color: black;
    margin-top: 15vh;
    margin-bottom: 30vh;
  `;
  
  const BackgroundImage = styled.img`
    position: absolute;
    margin-left: auto;
  margin-right: auto;
    width: 60%;
    height: 60%;
    z-index: -1;
  `;


export default Home;
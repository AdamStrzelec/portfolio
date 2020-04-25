import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* overflow: hidden; */
    /* background-position: center; */
`

const Home = () => (
    <HomeWrapper>
        {/* <img src={image1} alt="asd"/> */}
        <Carousel />
    </HomeWrapper>
)

export default Home;
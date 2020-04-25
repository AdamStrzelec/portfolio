import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import Home from '../components/organisms/Home'

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }

`

const StyledWrapper = styled.div`
`

const IndexPage = () => (
    <>
        <GlobalStyle />
        <StyledWrapper> 
            <Home />     
            <h1>ello</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </StyledWrapper>
    </>
)

export default IndexPage
import React from 'react'
import styled from 'styled-components'
import image1 from '../../images/carousel1.jpg'

const StyledWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${image1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const LeftButton = styled.button`
    position: absolute;
    left: 0;
`
const RightButton = styled.button`
    position: absolute;
    right: 0;
    
`

let photoNumber = 0;

let intervalId = undefined;

function changePhotoTimer(){
        intervalId = setInterval(()=>{
        // photoNumber += 1;
        // console.log(photoNumber)
        // clearInterval(intervalId)
        // changePhotoTimer()
        nextPhoto();
        }, 8000)
}

function prevPhoto(){
    photoNumber -= 1;
    console.log(photoNumber)
    clearInterval(intervalId);
    changePhotoTimer();
}

function nextPhoto(){
    photoNumber += 1;
    console.log(photoNumber)
    clearInterval(intervalId);
    changePhotoTimer();
}

const Carousel = () => (
    <StyledWrapper>
        <LeftButton onClick={()=>prevPhoto()}>left</LeftButton>
        <RightButton onClick={()=>nextPhoto()}>Rigt</RightButton>
        {changePhotoTimer()}
    </StyledWrapper>
)

export default Carousel;
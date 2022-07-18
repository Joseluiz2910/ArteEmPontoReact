import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    h1 {
        text-align: center;
        margin-bottom: 40px;
    } 
    .carousel .control-dots .dot {
        background: #E9C1BF;
        box-shadow: none;
    }

`

export const Content = styled.div`
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 500px;
    margin-bottom: 330px;
    
    h2 {
        font-size: 35px;
        padding: 10px 40px;
    }
    p {
        font-size: 20px;
        padding: 0 40px;
    }
    a {
        padding: 0 50px;
    }
`

export const RightSide = styled.div`
    width: 25%;
    height: 500px;
    display: flex;
    padding: 40px;
    margin-left: 100px;
`

export const Carousel = styled.div`
    div{
    width: 450px;
    height: 500px;
    }
    
    
`
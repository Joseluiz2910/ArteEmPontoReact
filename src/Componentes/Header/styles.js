import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 125px;
    background: #E9C1BF;
    display: flex;
    border-bottom: 10px solid #A6D8D9;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 125px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    align-self: start;

    a{
        display: flex;
        align-items: center;
        color: #000000;
        text-decoration: none;  
        transition: 0.5s ease-in-out;
        font-size: 30px;

    &:hover{
        color: #A6D8D9;
    }
    }
    img{
        width: 120px;
        height: 120px;
        padding-right: 20px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
    font-size: 20px;

    a { 
        color: #000000;
        text-decoration: none;       
        transition: 0.5s ease-in-out;
   
    &:hover{
        color: #A6D8D9;
    }
} 
    .dividir::after{
    content: "|";
    margin: 0 20px;
    color: #000000;
  }

`


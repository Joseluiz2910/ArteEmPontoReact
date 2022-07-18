import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Content = styled.div`
  box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
  border-radius: 10px;
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;

  input{
      border: none;
      border-bottom: 1px solid ;
      padding: 10px;
      font-size: 20px;
      margin-bottom: 25px;
    }

  textarea {
    margin-bottom: 25px;
    font-size: 20px;
    border-radius: 10px;
    padding: 5px;
  }

  button {
    padding: 20px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    border-radius: 30px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    cursor: pointer;
    transition: 0.5s ease-in-out;

    img{
      margin-left: 20px;
    }
    
  }

  button:hover {
    background: #25D366;
  }
`
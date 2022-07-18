import React from "react";
import { Link } from 'react-router-dom';
import * as S from './styles';

import logo from '../../Assets/logo.png'

function Header(){
    

    return(
        <S.Container>
        <S.LeftSide>
        <Link to="/">
        <img src={logo} alt="Logo" />
        <h3>Arte Em Ponto</h3>
        </Link>
        </S.LeftSide>

        <S.RightSide>
            <Link to="/task">FAÇA SEU ORÇAMENTO</Link>
            <span className="dividir" />
            <a href="#">SOBRE</a>
            <span className="dividir" />
            <a href="#">CONTATOS</a>
        </S.RightSide>
        </S.Container>
    )

}

export default Header;
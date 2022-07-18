import React from "react";
import * as S from './styles';

import logo from '../../Assets/logo.png'

function Header(){
    
    return(
        <S.Container>
            <img src={logo} alt="Logo"/>
            <h3>DESENVOLVIDO POR @José Luiz</h3>
        </S.Container>
    )
}

export default Header;
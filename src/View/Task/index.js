import React, { useState, useEffect} from "react";
import * as S from './styles';

import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'

import whats from '../../Assets/whatsapp.png'

function Task() {
    const [name, setName] = useState()  
    const [number, setNumber] = useState()
    const [description, setdescription] = useState()

    function abrirWhatsapp() {
        
        var url = "https://wa.me/5541984915241?text=" 
          + "*Óla gostaria de orçar meu Amigurumi*" + "%0a"       
          + `*Nome*:  + ${name} + %0a`
          + `*Número*:  + ${number} + %0a`         
          + `*Descrição*:  + ${description}`
        window.open(url, '_blank');
      }
 
    return(
        <S.Container>
            <Header/>
            <h1>SOLICITE SEU ORÇAMENTO</h1>

            <S.Content>
                
            <input type="text" 
            name="nome" 
            id="nome" 
            placeholder="Nome" 
            onChange={(e) => setName(e.target.value)}
            required />

            <input type="tel" 
            name="telefone" 
            id="telefone" 
            placeholder="Telefone" 
            onChange={(e) => setNumber(e.target.value)}
            required />
            
            <textarea name="description" 
            id="description" 
            placeholder="Descreva sua ideia, nos conte detalhes, e tudo o que espera do seu Amigurumi!" 
            onChange={(e) => setdescription(e.target.value)}
            rows="5" required></textarea>

            <button type="submit" onClick={()=> {abrirWhatsapp()}}>Solicitar Orçamento <img src={whats}/></button>
            </S.Content>

            <Footer/>
        </S.Container>
    )
}

export default Task;
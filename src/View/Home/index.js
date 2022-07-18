import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as S from './styles';

import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'

import imagemUm from '../../Assets/imagem-um.png'
import imagemQuatro from '../../Assets/imagem-quatro.png'
import imagemCinco from '../../Assets/imagem-cinco.png'


import whats from '../../Assets/whatsapp.png'
import insta from '../../Assets/instagram.png'  


function Home() {
 

    return(
    <S.Container>
        <Header/>
        <h1>Transformando suas ideias em Amigurumis</h1>
        
        <S.Content>
        <S.LeftSide>
            <h2 id="sobre">Sobre Nós</h2>
            <p>Olá somos a Arte em Ponto, temos o prazer em materializar 
            suas idéias em Amigurumis, entre em nossas redes sociais 
            e venha conferir um pouco mais sobre o nosso trabalho!</p>

            <h2>Como faço para pedir?</h2>
            <p>Bem simples! Você pode escolher no Feed ou me enviar fotos
            de inspirações, com isso podemos procurar qual o melhor 
            Amigurumi para você!
            Após ter ajustado o orçamento, partiremos para a confecção 
            mediante ao adiantamento de 50% do valor, e o restante do 
            pagamento na entrega do seu Amigurumi.</p>

            <h2 id="contato">Duvidas? Entre em contato conosco.</h2>
            <a href="https://wa.me/5541985116212" target="_blank" id="whats" >
                <img src={whats} alt="whatsapp"/>
            </a>
            <a href="https://www.instagram.com/evelin.amigurumis/" target="_blank" id="insta">
            <img src={insta} alt="instagram"/>
            </a>
        </S.LeftSide>
        <S.RightSide >
        <Carousel autoPlay>
            <div>
                <img src={imagemUm} alt="imagemUm"/>
            </div>
            <div>
                <img src={imagemQuatro} alt="imagemQuatro"/>
            </div>
            <div>
                <img src={imagemCinco} alt="imagemCinco"/>
            </div>
            
            
        </Carousel>

        </S.RightSide>
        </S.Content>



        <Footer/>
    </S.Container>    
    )



    
}


export default Home;
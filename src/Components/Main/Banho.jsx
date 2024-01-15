import styled from "styled-components";
import { useState } from "react";
import PetBanho from "../../assets/CachorroBanho.jpg"
import bubble from "../../assets/bubble.svg"
import dog from "../../assets/dog.svg"
import cleaning from "../../assets/cleaning.svg"
import scissors from "../../assets/scissors.svg"
import toothbrush from "../../assets/toothbrush.svg"
export default function Banho(){
    const MainBanho = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 180vh;
    `
    // Primeira sessao importante
    const Funcinamento = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60vh;
    `
    const Texto = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 50vw;
    height: 100%;
    h1{
        font-size: 4em;
        background-image: linear-gradient(264deg,#090979,#00d4ff);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    h2{
        font-size: 2.3em;
    }
    button:hover{
        background-color: #438dda;
    }
    `
    const Butao = styled.button`
    width: 30vw;
    height: 14vh;
    border: none;
    border-radius: 1em;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
    background-color: #175EA8;
    `
    const FigureBanho = styled.figure`
    width: 40vw;
    height: 95%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 1em;
    }
    `
    // Segunda sessao importante
    const Etapas = styled.section`
    width: 100%;
    height: 35vh;
    h1{
        font-size: 2em;
    }
    `
    const Icones = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    figure{
        display:flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        width: 18vw;
        height: 20vh;
        border: none;
        text-align: center;
        background-color: #F5F5F5;
        border-radius: 1em;
        margin: 10px;
    }
    figcaption{
        width: 10vw;
    }
    img{
        width: 10vw;
        height: 15vh;
    }
    `
    const [Icons, setIcons] = useState([
        {
            imagem: bubble,
            descriçao: "Banho"
        },
        {
            imagem: dog,
            descriçao: "Secagem"
        },
        {
            imagem: toothbrush,
            descriçao:"Escova na pelagem"
        },
        {
            imagem: cleaning,
            descriçao: "Limpeza de ouvido"
        },
        {
            imagem: scissors,
            descriçao: "Corte de unha"
        }
    ])
    // Terceira sessão importante
    const Cuidados = styled.section`
    width: 100%;
    height: 60vh;
    `
    const CuidadosButton = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    margin-left: 10px;
    & :hover{
        background-color: #F0F0F0;
    }
    button{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #fff;
        color: #000;
        font-weight: 700;
        font-size: 1.3em;
        border-radius: 0.7em;
        border: none;
        cursor: pointer;
        width: 30vw;
        height: 20vh;
    }
    figcaption{
        font-size: 1em;
        opacity: 0.7;
        font-weight: 100;
    }
    `
    const [Butoes, setButoes] = useState([
        {
            serviço: "Escovaçao dental  ⭢",
            descriçao: "Escovamos os dentes do seu pet, Para tirar o bafo de merda"
        },
        {
            serviço: "Hidratação  ⭢",
            descriçao:"usamos um produto para hidrataçao da pelagem"
        },
    ])
    
    
    return(
        <MainBanho>
            <Funcinamento>
                <Texto>
                    <h1>Banho e Tosa</h1>
                    <h2>O cuidado que seu pet merece</h2>
                    <h3>Serviços completos e seguros para a higiene do seu melhor amigo.</h3>
                    <Butao>Agentar Horário ⭢</Butao>
                </Texto>
                <FigureBanho>
                    <img src={PetBanho} alt="" />
                </FigureBanho>
            </Funcinamento>
            <Etapas>
                <h1>Etapas do banho</h1>
                <Icones>
                {Icons.map((item)=>(
                    <figure>
                        <img src={item.imagem} alt=""/>
                        <figcaption>{item.descriçao}</figcaption>
                    </figure>
                ))}
                </Icones>
            </Etapas>
            <Cuidados>
                <h1>Cuidados adicionais</h1>
                <CuidadosButton>
                    {Butoes.map((item)=>(
                        <button>{item.serviço}
                        <figcaption>{item.descriçao}</figcaption>
                        </button>

                    ))}

                </CuidadosButton>

            </Cuidados>

        </MainBanho>
    )
}
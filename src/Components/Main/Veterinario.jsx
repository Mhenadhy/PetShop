import styled from "styled-components";
import Vet from "../../assets/Vet.jpg"
import Ambulance from "../../assets/ambulance.svg"
export default function Veterinario() {
    const MainVeterianrio = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 180vh;
    `
    // Primeira sessao
    const Funcinamento = styled.section`
     display: flex;
     justify-content: center;
     align-items: center;
     justify-content: space-around;
     width: 100%;
     height: 60vh;
     `
    const FigureVet = styled.figure`
      width: 40vw;
      height: 95%;
      img{
          width: 100%;
          height: 100%;
          border-radius: 1em;
      }
      `
    const TextoVet = styled.section`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 50vw;
      height: 100%;
      button:hover{
        background-color: #df637c;
      }
      h1{
        font-size: 4em;
        background-image: linear-gradient(264deg,#cf1035,#9c0458);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
      h2{
        font-size: 2.1em;
      }
      h3{
        font-size: 1.5em;
        opacity: 0.7;
      }
      button{
        font-size: 1.5em;
        border-radius: 1em;
        border: none;
        cursor: pointer;
        background-color: #da4360;
        width: 30vw;
        height: 15vh;
      }
      `
    //   Segunda Sessão
    const Emergenica = styled.section`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-items: start;
      width: 80vw;
      height: 19vh;
      border: solid 0.1em;
      border-radius: 1em;
      img{
        width: 4vw;
      }
      p{
        font-size: 1.2em;
        margin-left: 5px;
      }
      `
    const FigureEmergencia = styled.figure`
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: space-around;
      width: 15vw;
      p{
        font-size: 1.4em;
      }
      `
    //   Tabela de Programa de vacinação
    const TabelaDeVacina = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    border: solid;
    `
    return (
        <MainVeterianrio>
            <Funcinamento>
                <FigureVet>
                    <img src={Vet} alt="" />
                </FigureVet>
                <TextoVet>
                    <h1>Centro Veterinario</h1>
                    <h2>Tudo para manter a saúde do seu pet em dia</h2>
                    <h3>Vacinas, consultas e exames com qualidade e carinho.</h3>
                    <button>Marcar Consulta  ⭢</button>
                </TextoVet>
            </Funcinamento>
            <Emergenica>
                <FigureEmergencia>
                    <img src={Ambulance} alt="Ambulancia" />
                    <p>Emergência</p>
                </FigureEmergencia>
                <p>Em caso de emergência, leve o seu pet imediatamente para o Hospital Veterinário Seres 24h mais próximo de você.</p>
            </Emergenica>
            <TabelaDeVacina>

            </TabelaDeVacina>

        </MainVeterianrio>
    )
}
import { createGlobalStyle } from "styled-components"
import {Routes, Route} from "react-router-dom"
import Header from "../src/Components/Header/Header"
import Main from "../src/Components/Main/Main"
import Pet from "../src/Components/Main/Pet"
import Banho from "../src/Components/Main/Banho"
import Veterinario from "./Components/Main/Veterinario"

function App() {
  
  const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `
  return (
    <>
    <EstiloGlobal/>
    <Header/>
     <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Pet" element={<Pet/>} />
      <Route path="/Banho" element={<Banho/>} />
      <Route path="/Veterinario" element={<Veterinario/>} />
     </Routes>
    </>
  )
}

export default App

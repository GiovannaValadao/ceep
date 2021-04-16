import React from "react";
import listaDeNotas from "./components/listaDeNotas";
function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="Escreva sua nota..."></textarea>
        <button>Criar Nota</button>
      </form>
      <listaDeNotas />
    </section>

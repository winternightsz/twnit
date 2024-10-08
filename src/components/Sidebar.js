"use client";
import { useState } from 'react';

import BotoesBtn from './BotoesBtn';
import BotoesTipo from '../data/BotoesTipo';
import BotoesNome from '../data/BotoesNome';

 // Ajuste o caminho conforme necessário

export default function Sidebar({ isNomes }) {
  const [selectedButtons, setSelectedButtons] = useState({}); // Usando apenas um estado para o botão selecionado

  const handleCheckboxChange = (nome) => {
    setSelectedButtons((prevSelected) => ({
      ...prevSelected,
      [nome]: !prevSelected[nome], // Alterna o estado do checkbox clicado
    }));
  };

  return (
    <>
      <aside
        id="separator-sidebar"
        className="left:0 sm:z-40 sm:w-64 hidden sm:block sm:h-screen sm:transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 sm:overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="grid md:grid-flow-row gap-2 p-2 lg:p-4">
              {BotoesTipo.map((card, index) => (
                <BotoesBtn
                  key={index}
                  nome={card.nome}
                  corTexto={card.corTexto}
                  cor={card.cor}
                  checked={!!selectedButtons[card.nome]} // Define como selecionado ou não
                  onChange={() => handleCheckboxChange(card.nome)} // Muda o estado quando clicado
                />
              ))}
            </li>
          </ul>

          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li className="grid md:grid-flow-row gap-2 p-2 lg:p-4">
              {BotoesNome.map((card, index) => (
                <BotoesBtn
                  key={index}
                  nome={card.nome}
                  corBg={card.corBg}
                  corTexto={card.corTexto}
                  cor={card.cor}
                  isNome={isNomes}
                  checked={!!selectedButtons[card.nome]} // Define como selecionado ou não
                  onChange={() => handleCheckboxChange(card.nome)} // Muda o estado quando clicado
                />
              ))}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

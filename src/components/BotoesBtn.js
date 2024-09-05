const BotoesBtn = ({ nome, cor, corTexto, corBg, isNome, checked, onChange }) => {
    return (
      <>
        <input
          type="checkbox"
          id={nome} // Usando "nome" como identificador único
          checked={checked} // Controla se o botão está selecionado
          onChange={onChange} // Dispara a mudança no botão
          className="   hidden"
          
        />
        <label
          htmlFor={nome}
          className={`${
            checked ? 'border-blue-600' : isNome === 'sim' ? cor : 'border-twOfficial shadow-[1px_1px_6px_0px_#fbb6ce]'
          } ${isNome === 'sim' ? corTexto : 'text-twOfficial'} 
                      ${isNome === 'sim' ? 'hover:' + corBg : 'hover:bg-twOfficial'} 
                      px-4 py-2 text-sm hover:text-white border focus:ring-4 focus:outline-none rounded-lg 
                      px-5 py-2.5 text-center me-2 mb-2 `}
        >
          {nome}
        </label>
      </>
    );
  };
  
  export default BotoesBtn;
  
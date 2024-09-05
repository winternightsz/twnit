import BotoesBtn from './BotoesBtn';
import BotoesTipo from '../data/BotoesTipo';
import BotoesNome from '../data/BotoesNome';


export default function Sidebar ({isNomes}) {
    return(
    <>     
   
            <aside  id="separator-sidebar" className="sm:z-40 sm:w-64 hidden sm:block sm:h-screen sm:transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 sm:overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="grid md:grid-flow-row gap-2 p-2 lg:p-4">
                            {BotoesTipo.map((card, index) => (
                            <BotoesBtn 
                                key={index} 
                                nome={card.nome}
                                corTexto={card.corTexto} 
                                cor={card.cor}      
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
                                />
                                ))}
                        </li>
                        
                    </ul>
                </div>
        </aside>
    </>  
    );

}
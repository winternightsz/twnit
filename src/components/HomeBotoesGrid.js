import BotoesBtn from './BotoesBtn';
import BotoesTipo from '../data/BotoesTipo';
import BotoesNome from '../data/BotoesNome';



export default function HomeBotoesGrid({isNomes}) {    
        const content = () => {

            if (isNomes == 'sim') {
                return (
                    <div className="grid grid-cols-2 md:grid-flow-col lg:grid-flow-col gap-2 p-2 lg:p-4">
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
                    </div>
                );
            } 

            else {
                return (
                    <div className="grid grid-cols-2 md:grid-flow-col lg:grid-flow-col gap-2 p-2 lg:p-4">
                        {BotoesTipo.map((card, index) => (
                          <BotoesBtn 
                            key={index} 
                            nome={card.nome}
                            corTexto={card.corTexto} 
                            cor={card.cor}      
                          />
                        ))}
                    </div>  
                );
            }
        };

    return content();
}

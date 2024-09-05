import AccsCard from './AccsCard';
import AccsInfo from '../data/AccsInfo';

export default function AccsGrid() {
    return (
      <div className="grid grid-cols-1 p-4 md:p-0 md:grid-cols-4 gap-8">
        {AccsInfo.map((card, index) => (
          <AccsCard 
            key={index} 
            nome={card.nome} 
            descricao={card.descricao} 
            linkNitter={card.linkNitter} 
            foto={card.foto} 
          />
        ))}
      </div>
    );
  }
  
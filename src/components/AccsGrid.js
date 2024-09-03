import AccsCard from './AccsCard';
import AccsInfo from '../data/AccsInfo';

export default function AccsGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 p-4">
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
  
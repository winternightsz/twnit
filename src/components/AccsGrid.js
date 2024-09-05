import AccsCard from './AccsCard';
import AccsInfo from '../data/AccsInfo';

export default function AccsGrid() {
    return (
      <div className="bg-black grid grid-cols-1 lg:grid-cols-4 p-8 gap-4">
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
  
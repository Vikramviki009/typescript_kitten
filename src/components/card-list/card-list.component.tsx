import { kitten } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  kittens: kitten[]
}
const CardList = ({ kittens } : CardListProps) => (
  <div className='card-list'>
    {kittens.map((kitten) => {
      return <Card key={kitten.id} kitten={kitten} />;
    })}
  </div>
);

export default CardList;

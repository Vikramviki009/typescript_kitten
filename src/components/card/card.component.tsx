import { kitten } from '../../App';
import './card.styles.css';

type CardProps = {
  kitten: kitten
};

const Card = ({ kitten }: CardProps) => {
  const { id, name, email } = kitten;

  return (
    <div className='card-container'>
      <img
        alt={`kitten ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

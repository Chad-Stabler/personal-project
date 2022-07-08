import { Link } from 'react-router-dom';

export default function PokeList({ pokemon }) {
  return (<div className="lists">
    {
      pokemon.map((poke, i) => <Link to={`/poke/${poke._id}`} className="item" key={poke.pokemon + i}>
        <p>{poke.pokemon}</p>
        <img src={poke.url_image} />
        <p>HP: {poke.hp}</p>
      </Link>)
    }
  </div>);
}
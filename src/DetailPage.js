import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePoke } from './services/fetch-utils';

export default function DetailPage() {
  const [poke, setPoke] = useState({});
  const params = useParams();
  
  useEffect(() => {
    async function getPokeById() {
      const data = await getSinglePoke(params._id);
    
      setPoke(data);
    }
    getPokeById();
  }, [params._id]);
  
  return (
    <div className='detail-page'>
      <Link to='/'>Home</Link>
      <div className='poke-detail'>
        <h1>{poke.pokemon}</h1>
        <img src={poke.url_image} />
        <h3>{poke.type_2 === 'NA' ? '' : poke.type_2} {poke.type_1} type</h3>
        <h4>HP: {poke.hp}</h4>
        <h4>Speed: {poke.speed}</h4>
        <h4>Weight: {poke.weight}</h4>
        <h4>First Ability: {poke.ability_1}</h4>
        <h5>Base XP: {poke.base_experience}</h5>
      </div>
    </div>);
}
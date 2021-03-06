import { useState, useEffect } from 'react';
import PokeList from './PokeList';
import { getPokemon } from './services/fetch-utils';
import Spinner from './Spinner';
import './App.css';

export default function PokeSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPokemon() {
    setIsLoading(true);
    const data = await getPokemon(query);

    setPokemon(data.results);
    setIsLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchPokemon();

    setQuery('');
  }

  return (
    <div className='app'>
      { isLoading ? <Spinner isLoading={isLoading} /> : <div className="searches">
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={e => setQuery(e.target.value)} />
          <button>Look for your poké</button>
        </form>
        <PokeList pokemon={pokemon}/>
      </div>}
    </div>
  );
}
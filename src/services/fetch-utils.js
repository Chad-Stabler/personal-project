export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/poke?pokeQuery=${filter}`);
  
  const data = await rawData.json();
  
  return data;
}
  
export async function getSinglePoke(id) {
  const rawData = await fetch(`/.netlify/functions/singlePoke?pokeQuery=${id}`);
  
  const data = await rawData.json();

  return data;
}
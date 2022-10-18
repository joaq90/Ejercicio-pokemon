
const allPokemon = [];

async function pokemon() {
  for (let i = 1; i< 151; i++){
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
  const resPokemon = await res.json ();
  allPokemons = [...allPokemon, resPokemon]
 // console.log(resPokemon)
  allPokemon.push(resPokemon);
}} 



const mapPokemon = (pokem) =>{
    const mappedPokemons = pokem.map((poke) => ({
      id: poke.id,
      name: poke.name,
      type: poke.types.map(type => type.type.name),
      height: poke.height,
      weight: poke.weight,
      img: poke.sprites.other.home.front_default,
      
    
    }))
    return mappedPokemons
  }

  const lista = document.querySelector('ol')

  const imprimirPokemons = (pokem) => {
    const div$$ = document.createElement('div');
    const img$$ = document.createElement('img');
    const h2$$ = document.createElement('h2');
    const h3$$ = document.createElement('h3');
    const h4$$ = document.createElement('h4');
    const h5$$ = document.createElement('h5');
    const h6$$ = document.createElement('h6');
    img$$.setAttribute("src", pokem.sprites.other.home.front_default); 
    h2$$.textContent = pokem.name;
    h3$$.textContent = pokem.id;
    h4$$.textContent = pokem.weight;
    h5$$.textContent = pokem.height;
    h6$$.textContent = pokem.types.map(type => type.type.name);
    div$$.appendChild(img$$);
    div$$.appendChild(h2$$);
    div$$.appendChild(h3$$);
    lista.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(h5$$);
    div$$.appendChild(h6$$);
  }

  //console.log(imprimirPokemons);

  async function init () {
    await pokemon();
    const mappedPokemons = mapPokemon(allPokemon);
    //console.log(mappedPokemons);
    for (const pokemon of allPokemon) {
    imprimirPokemons(pokemon);
  }}
  
  init();

 
//buscador
  const buscar = document.querySelector('input');
  buscar.addEventListener('input', () => search (buscar.value))

  const search = (name) => {
    const inputSearch = allPokemon.filter(pokemon => pokemon.name.includes(name))
    lista.textContent = ""

    for (const pokemon of inputSearch) {
      console.log(imprimirPokemons(pokemon))
    }
    
  } 



console.log(allPokemon)

  
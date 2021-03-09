(function startUpload() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
    .then((response) => {
      return response.json();
    })
    .then((allPokemons) => {
      allPokemons.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
})();

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pokeData) => {
      addPokemon(pokeData);
    });
}

function addPokemon(pokeData) {
  const newEl = document.createElement("div");
  newEl.className = "pokemon";
  newEl.onclick = printHello;
  newEl.id = `pokemon${pokeData.id}`;
  newEl.innerHTML = `<div>${pokeData.name}</div>
  <div>
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png"
  />
</div>`;
  document.querySelector("#pokemonContainer").appendChild(newEl);
}

function printHello(fetchPokemonData) {
  console.log("Hello");
}

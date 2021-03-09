const promises = [];

for (let i = 1; i <= 1000; i++) {
  promises.push(fetch("https://pokeapi.co/api/v2/pokemon/").then((resp) => resp.json()));
}

Promise.all(promises).then((results) => {
  const pokemon = results.map((data) => ({
    name: data.name,
    id: data.id,
    image: data.sprites["front_default"],
  }));
  showPokemon(pokemon);
});

function showPokemon(pokemon) {
  const newEl = document.createElement("div");
  newEl.className = "pokemonContainer";

  newEl.innerHTML = `${pokemon.name}`;
  document.querySelector("#listOfPokemons").appendChild(newEl);
}

/* function openPhoto() {
  const newPhoto = document.createElement("div");
  newPhoto.className = "PokemonImage";
  newPhoto.innerHTML = `
    <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    alt=""
    srcset=""
  />
      `;

  document.querySelector(".pokemonContainer").appendChild(newPhoto);
} */

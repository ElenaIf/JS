(function startUpload() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((response) => {
      return response.json();
    })
    .then((allPokemons) => {
      allPokemons.results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });

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

    newEl.innerHTML = `<div>${pokeData.name}</div>`;

    document.querySelector("#pokemonContainer").appendChild(newEl);

    function printHello() {
      const newImage = document.createElement("div");
      newImage.id = `pokeImage${pokeData.id}`;
      newImage.className = "hidden";
      newImage.innerHTML = `<img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png"
    />`;
      document.getElementById(`pokemon${pokeData.id}`).appendChild(newImage);
      document.getElementById(`pokeImage${pokeData.id}`).classList.toggle("visible");
    }
  }
})();

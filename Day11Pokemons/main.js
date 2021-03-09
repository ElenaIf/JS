(function () {
  document.addEventListener("DOMContentLoaded", ExecuteScript);

  /* const users = [
    {
      name: {
        title: "Mr",
        first: "Alexander",
        last: "Kristensen",
      },
      email: "alexander.kristensen@example.com",
      phone: "98708762",
      picture: {
        large: "https://randomuser.me/api/portraits/men/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      },
    },
  ]; */

  function ExecuteScript() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
      .then((resp) => resp.json())
      .then((json) => {
        json.results.forEach(addPokemon);
      });
  }

  function addPokemon(pokemon) {
    const newEl = document.createElement("div");
    newEl.className = "pokemon";
    newEl.innerHTML = `
        <div>${pokemon.name}</div>
        
        <div>  <a href="${pokemon.url}">${pokemon.url}</a></div>
       
    `;
    document.querySelector(".pokemonContainer").appendChild(newEl);
  }
})();

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
    fetch("https://randomuser.me/api/?results=100")
      .then((resp) => resp.json())
      .then((json) => {
        // { results: [], info: {}}
        json.results.forEach(addUser);
      });
  }

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `
        <div class="profile-image">
            <img src="${user.picture.large}"/>
        </div>
        <div class="first-name">${user.name.first}</div>
        <div class="last-name">${user.name.last}</div>
        <div class="email">${user.email}</div>
        <div class="phone">${user.phone}2</div>
    `;
    document.getElementById("user-list").appendChild(newEl);
  }
})();

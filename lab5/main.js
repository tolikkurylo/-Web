const header = document.querySelector("header");
const section = document.querySelector("section");

const requestURL = "superheroes.json";
const request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(jsonObj) {
  const h1 = document.createElement("h1");
  h1.textContent = jsonObj.squadName;

  const p = document.createElement("p");
  p.textContent = `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`;

  header.appendChild(h1);
  header.appendChild(p);
}

function showHeroes(jsonObj) {
  const heroes = jsonObj.members;

  heroes.forEach(hero => {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = hero.name;

    const p1 = document.createElement("p");
    p1.textContent = `Secret identity: ${hero.secretIdentity}`;

    const p2 = document.createElement("p");
    p2.textContent = `Age: ${hero.age}`;

    const p3 = document.createElement("p");
    p3.textContent = "Superpowers:";

    const ul = document.createElement("ul");

    hero.powers.forEach(power => {
      const li = document.createElement("li");
      li.textContent = power;
      ul.appendChild(li);
    });

    article.append(h2, p1, p2, p3, ul);
    section.appendChild(article);
  });
}

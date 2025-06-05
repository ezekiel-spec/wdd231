const cardsContainer = document.querySelector('#cards');

// Load JSON and build cards
fetch('data/directory.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(company => {
      const card = document.createElement('section');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = `images/${company.image}`; // Correct relative path
      img.alt = `${company.name} logo`;
      img.loading = "lazy";

      const h2 = document.createElement('h2');
      h2.textContent = company.name;

      const address = document.createElement('p');
      address.textContent = company.address;

      const desc = document.createElement('p');
      desc.textContent = company.description;

      const button = document.createElement('a');
      button.textContent = "Learn More";
      button.href = "#";

      card.append(img, h2, address, desc, button);
      cardsContainer.appendChild(card);
    });
  });

// View mode toggle
document.getElementById("grid").addEventListener("click", () => {
  cardsContainer.classList.add("grid-container");
  cardsContainer.classList.remove("list-container");
});

document.getElementById("list").addEventListener("click", () => {
  cardsContainer.classList.add("list-container");
  cardsContainer.classList.remove("grid-container");
});

// Visit message using localStorage
const message = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const today = new Date().toLocaleDateString();

if (lastVisit) {
  message.textContent = `Welcome back! Your last visit was on ${lastVisit}`;
} else {
  message.textContent = "Welcome to the Discover page!";
}
localStorage.setItem("lastVisit", today);

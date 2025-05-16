const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

const requestURL = 'data.json';

async function getBusinessData() {
    const response = await fetch(requestURL);
    const data = await response.json();
    displayBusinesses(data.businesses);
}

getBusinessData();

function displayBusinesses(businesses) {
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");

        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = "Visit Website";
        website.href = business.website;
        website.target = "_blank";

        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        display.appendChild(card);
    });
}
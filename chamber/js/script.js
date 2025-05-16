document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const memberContainer = document.getElementById("members");

async function fetchMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  memberContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");

    if (member.image) {
      const img = document.createElement("img");
      img.src = `images/${member.image}`;
      img.alt = `${member.name} logo`;
      card.appendChild(img);
    }

    const name = document.createElement("h3");
    name.textContent = member.name;
    const address = document.createElement("p");
    address.textContent = member.address;
    const phone = document.createElement("p");
    phone.textContent = member.phone;
    const website = document.createElement("a");
    website.href = member.website;
    website.textContent = "Visit Website";

    card.append(name, address, phone, website);
    memberContainer.appendChild(card);
  });
}

document.getElementById("grid").addEventListener("click", () => {
  memberContainer.classList.add("grid");
  memberContainer.classList.remove("list");
});

document.getElementById("list").addEventListener("click", () => {
  memberContainer.classList.add("list");
  memberContainer.classList.remove("grid");
});

fetchMembers();

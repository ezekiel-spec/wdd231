
const members = [
  { name: "Bwari Gold", level: "Gold", phone: "123-456", address: "Main St", website: "#", logo: "images/logo1.png" },
  { name: "Silver Tech", level: "Silver", phone: "456-789", address: "Broadway", website: "#", logo: "images/logo2.png" },
  { name: "Gold Business", level: "Gold", phone: "789-012", address: "Market Rd", website: "#", logo: "images/logo3.png" }
];

const spotlightContainer = document.querySelector(".spotlight-container");
const goldSilver = members.filter(m => m.level === "Gold" || m.level === "Silver");
const randomMembers = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 2);

randomMembers.forEach(member => {
  const card = document.createElement("div");
  card.innerHTML = \`
    <h3>\${member.name}</h3>
    <img src="\${member.logo}" alt="\${member.name} logo" />
    <p>Phone: \${member.phone}</p>
    <p>Address: \${member.address}</p>
    <a href="\${member.website}">Visit Website</a>
  \`;
  spotlightContainer.appendChild(card);
});

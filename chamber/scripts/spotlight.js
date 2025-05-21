// Sample JSON data for chamber members
const members = [
  {
    "companyName": "Bwari Electronics",
    "logo": "images/bwarielectronics.png.jpeg",
    "phone": "555-1234",
    "address": "123 Market St, Bwari",
    "website": "https://bwarielectronics.example.com",
    "membershipLevel": "Gold"
  },
  {
    "companyName": "Bwari Books",
    "logo": "images/bwaribook.jpeg",
    "phone": "555-5678",
    "address": "456 Library Rd, Bwari",
    "website": "https://bwaribooks.example.com",
    "membershipLevel": "Silver"
  },
  {
    "companyName": "Bwari Bakery",
    "logo": "imagesbakery_bwar.jpeg",
    "phone": "555-8765",
    "address": "789 Baker St, Bwari",
    "website": "https://bwaribakery.example.com",
    "membershipLevel": "Bronze"
  },
  {
    "companyName": "Bwari Fitness",
    "logo": "images/bwarifitness.jpeg",
    "phone": "555-4321",
    "address": "321 Gym Ln, Bwari",
    "website": "https://bwarifitness.example.com",
    "membershipLevel": "Gold"
  }
];

// Filter only Gold and Silver members
const goldSilverMembers = members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');

// Randomly pick 2 or 3 members each time
function getRandomSpotlights(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySpotlights() {
  const spotlightContainer = document.querySelector('.spotlight-container');
  spotlightContainer.innerHTML = '';

  const spotlightMembers = getRandomSpotlights(goldSilverMembers, 3);

  spotlightMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    card.innerHTML = `
      <img src="${member.logo}" alt="${member.companyName} logo" />
      <h3>${member.companyName}</h3>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

displaySpotlights();

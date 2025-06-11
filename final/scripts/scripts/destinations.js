// scripts/destinations.js

export async function loadAndDisplayDestinations(containerSelector) {
  try {
    const response = await fetch('data/destinations.json');
    if (!response.ok) throw new Error('Failed to fetch destination data');

    const destinations = await response.json();
    displayDestinations(destinations, containerSelector);
  } catch (error) {
    console.error('Error loading destinations:', error);
  }
}

function displayDestinations(destinations, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = '';

  destinations.forEach(destination => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}" loading="lazy">
      <h3>${destination.name}</h3>
      <p><strong>Country:</strong> ${destination.country}</p>
      <p>${destination.description}</p>
      <button class="details-button" data-id="${destination.id}">Details</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', event => {
      const id = event.target.dataset.id;
      const selected = destinations.find(dest => dest.id == id);
      showModal(selected);
    });
  });
}

function showModal(destination) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button" title="Close">&times;</span>
      <h2>${destination.name}</h2>
      <img src="${destination.image}" alt="${destination.name}">
      <p><strong>Country:</strong> ${destination.country}</p>
      <p>${destination.description}</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-button').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });
}

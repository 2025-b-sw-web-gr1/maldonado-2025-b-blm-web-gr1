/* Tinder-like: managed card stack with local profiles and drag interactions */
const profiles = [
  {
    name: 'Sofía', age: 25, distance: 2,
    bio: 'Amante del café ☕ y los atardeceres 🌅',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop'
  },
  {
    name: 'Isabella', age: 23, distance: 5,
    bio: 'Bailarina profesional 💃 | Viajera del mundo 🌎',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop'
  },
  {
    name: 'Valentina', age: 27, distance: 3,
    bio: 'Fotógrafa 📸 | Naturaleza y aventura',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop'
  },
  {
    name: 'Camila', age: 24, distance: 4,
    bio: 'Chef apasionada 👩‍🍳 | Foodie de corazón',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop'
  },
  {
    name: 'Martina', age: 26, distance: 1,
    bio: 'Arquitecta | Arte y diseño 🎨',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop'
  }
];

const cardContainer = document.getElementById('cardContainer');
const emptyState = document.getElementById('emptyState');
const likeBtn = document.getElementById('likeBtn');
const nopeBtn = document.getElementById('nopeBtn');
const starBtn = document.getElementById('starBtn');
const boostBtn = document.getElementById('boostBtn');

let currentIndex = profiles.length - 1;
const removedStack = [];

function createCard(profile, z) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.zIndex = z;
  card.innerHTML = `
    <img src="${profile.image}" alt="${profile.name}" class="card-image">
    <div class="action-indicator like-indicator">LIKE</div>
    <div class="action-indicator nope-indicator">NOPE</div>
    <div class="card-info">
      <div>
        <span class="card-name">${profile.name}</span>
        <span class="card-age">${profile.age}</span>
      </div>
      <div class="card-distance">📍 A ${profile.distance} km de distancia</div>
      <div class="card-bio">${profile.bio}</div>
    </div>
  `;

  let startX = 0, currentX = 0, isDragging = false;

  function startDrag(e) {
    isDragging = true;
    startX = e.type.startsWith('mouse') || e.pointerType === 'mouse' ? e.clientX : (e.touches ? e.touches[0].clientX : e.clientX);
    card.classList.add('dragging');
    window.addEventListener('pointermove', drag);
    window.addEventListener('pointerup', endDrag);
  }

  function drag(e) {
    if (!isDragging) return;
    currentX = e.type.startsWith('mouse') || e.pointerType === 'mouse' ? e.clientX : (e.touches ? e.touches[0].clientX : e.clientX);
    const diffX = currentX - startX;
    const rotate = diffX * 0.1;
    card.style.transform = `translateX(${diffX}px) rotate(${rotate}deg)`;
    card.classList.toggle('like', diffX > 50);
    card.classList.toggle('nope', diffX < -50);
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    window.removeEventListener('pointermove', drag);
    window.removeEventListener('pointerup', endDrag);
    const diffX = currentX - startX;
    if (Math.abs(diffX) > 100) {
      const dir = diffX > 0 ? 1 : -1;
      removeCard(card, dir);
    } else {
      card.style.transform = '';
      card.classList.remove('like', 'nope', 'dragging');
    }
  }

  // Pointer events: unified for mouse & touch
  card.addEventListener('pointerdown', startDrag);

  return card;
}

function removeCard(card, direction) {
  card.classList.add('removed');
  card.style.transition = 'transform .4s ease-out, opacity .3s ease';
  card.style.transform = `translateX(${direction * 600}px) rotate(${direction * 30}deg)`;
  card.style.opacity = '0';
  removedStack.push(card.outerHTML);
  setTimeout(() => {
    card.remove();
    currentIndex--;
    if (currentIndex < 0) emptyState.classList.add('show');
  }, 300);
}

function handleLike() {
  const card = cardContainer.querySelector('.card:last-child');
  if (card) removeCard(card, 1);
}

function handleNope() {
  const card = cardContainer.querySelector('.card:last-child');
  if (card) removeCard(card, -1);
}

likeBtn.addEventListener('click', handleLike);
nopeBtn.addEventListener('click', handleNope);
starBtn.addEventListener('click', () => {
  const card = cardContainer.querySelector('.card:last-child');
  if (card) {
    card.style.animation = 'pulse .35s ease';
    setTimeout(() => card.style.animation = '', 350);
  }
});
boostBtn.addEventListener('click', () => alert('¡Boost activado! 🚀'));

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') handleNope();
  if (e.key === 'ArrowRight') handleLike();
});

// Inicializar
profiles.forEach((p, i) => {
  // append so that last profile is on top
  const card = createCard(p, i);
  cardContainer.appendChild(card);
});

// Show empty state if no cards
if (profiles.length === 0) emptyState.classList.add('show');

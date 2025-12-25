// AI Love Messages
const messages = [
  "You are my favorite chapter of life ❤️",
  "From friends to forever, I choose you 💍",
  "Every memory with you is my treasure ✨",
  "You + Me = Home 🏠💕"
];

function generateMsg() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("aiMsg").innerText = msg;
}

// Questions interaction
function answer(text) {
  document.getElementById("answer").innerText = text;
}

// Floating hearts
for (let i = 0; i < 30; i++) {
  let heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
  document.querySelector('.hearts').appendChild(heart);
}

const container = document.getElementById('container');

container.addEventListener('mousemove', createParticles);

function createParticles(event) {
  const particleCount = 30;
  const randColor = getRandomColor();

  for (let i = 0; i < particleCount; i++) {
    const particleSize = Math.random() * 25 + 25;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 200 + 0;
    const targetX = event.clientX + Math.cos(angle) * distance;
    const targetY = event.clientY + Math.sin(angle) * distance;

    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.left = `${event.clientX - 20}px`;
    particle.style.top = `${event.clientY - 20}px`;
    particle.style.width = `${particleSize - 20}px`;
    particle.style.height = `${particleSize - 20}px`;
    particle.style.backgroundColor = randColor;
    particle.style.setProperty('--targetX', `${targetX - event.clientX}px`);
    particle.style.setProperty('--targetY', `${targetY - event.clientY}px`);
    const time = Math.random() * 2 + 0.5;
    particle.style.setProperty('--animationDuration', `${time}s`);

    container.appendChild(particle);
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

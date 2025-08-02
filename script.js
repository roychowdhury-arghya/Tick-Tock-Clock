// Digital clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
  document.getElementById('date').textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

const buttons = document.querySelectorAll('.theme-buttons button');
const digitalBox = document.getElementById('digitalBox');
const analogClock = document.getElementById('analogClock');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const theme = button.id;

    //line 23-29 or use 30-37 Same will happen

    // if (theme === 'aero') {
    //   digitalBox.style.display = 'none';
    //   analogClock.style.display = 'flex';
    // } else {
    //   digitalBox.style.display = 'grid';
    //   analogClock.style.display = 'none';
    // }
    if (theme === 'aero') {
      digitalBox.classList.add('hidden');
      analogClock.classList.remove('hidden');

    } else {
      digitalBox.classList.remove('hidden');
      analogClock.classList.add('hidden');
    }

    switch (theme) {
      case 'light':
        applyTheme({
          '--bg-color': '#e6e6e6ff',
          '--text-color': '#000000',
          '--card-bg': '#9e9e9eff',
          '--card-shadow': 'rgba(136, 136, 136, 0.1)',
          '--button-bg': '#bebebeff',
          '--button-text': '#000000',
          '--button-hover': '#000000ff',
          '--active-glow': '#000000ff',
          '--text-color-hover': '#ffffff',
        });
        break;
      case 'dark':
        applyTheme({
          '--bg-color': '#121212',
          '--text-color': '#ffffff',
          '--card-bg': '#1e1e1e',
          '--card-shadow': 'rgba(255, 255, 255, 0.1)',
          '--button-bg': '#2c2c2c',
          '--button-text': '#ffffff',
          '--button-hover': '#d3d3d3ff',
          '--active-glow': '#ffffffff',
          '--text-color-hover': '#000000ff',
        });
        break;
      case 'neon':
        applyTheme({
          '--bg-color': '#000000',
          '--text-color': '#ff00aaff',
          '--card-bg': '#000000',
          '--card-shadow': 'rgba(247, 0, 255, 1)',
          '--button-bg': '#2c2e24ff',
          '--button-text': '#ff00eaff',
          '--button-hover': '#111111',
          '--active-glow': '#ff00ff',
          '--text-color-hover': '#2bff00ff',
        });
        break;
      case 'aero':
        applyTheme({
          '--bg-color': '#00155cff',
          '--text-color': '#33a7ffff',
          '--card-bg': '#ffffff',
          '--card-shadow': 'rgba(1, 87, 155, 0.2)',
          '--button-bg': '#bbdefb',
          '--button-text': '#001275ff',
          '--button-hover': '#4490b9ff',
          '--active-glow': '#0288d1',
          '--text-color-hover': '#000000ff',
        });
        break;
    }
  });
});

function applyTheme(vars) {
  for (let key in vars) {
    document.documentElement.style.setProperty(key, vars[key]);
  }
}

// Analog Clock Rotation
setInterval(clocktick, 1000);
clocktick();
function clocktick() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotateClockHand('secondhand', seconds);
  rotateClockHand('minutehand', minutes);
  rotateClockHand('hourhand', hours);
}

function rotateClockHand(id, rotation) {
  const element = document.getElementById(id);
  if (element) {
    element.style.setProperty('--rotate', rotation * 360);
  }
}


document.getElementById('light').click();


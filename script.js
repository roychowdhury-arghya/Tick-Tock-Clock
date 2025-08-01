// Digital clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
  document.getElementById('date').textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

// Theme switching and visibility toggle
const buttons = document.querySelectorAll('.theme-buttons button');
const digitalBox = document.getElementById('digitalBox');
const analogClock = document.getElementById('analogClock');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const theme = button.id;

    if (theme === 'aero') {
      digitalBox.style.display = 'none';
      analogClock.style.display = 'flex';
    } else {
      digitalBox.style.display = 'block';
      analogClock.style.display = 'none';
    }

    switch (theme) {
      case 'light':
        applyTheme({
          '--bg-color': '#ffffff',
          '--text-color': '#000000',
          '--card-bg': '#ffffff',
          '--card-shadow': 'rgba(0, 0, 0, 0.1)',
          '--button-bg': '#dddddd',
          '--button-text': '#000000',
          '--button-hover': '#cccccc',
          '--active-glow': '#001affff',
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
          '--button-hover': '#3d3d3d',
          '--active-glow': '#00ffcc',
        });
        break;
      case 'neon':
        applyTheme({
          '--bg-color': '#000000',
          '--text-color': '#00ff00',
          '--card-bg': '#000000',
          '--card-shadow': 'rgba(0, 255, 0, 1)',
          '--button-bg': '#222222',
          '--button-text': '#39ff14',
          '--button-hover': '#111111',
          '--active-glow': '#ff00ff',
        });
        break;
      case 'aero':
        applyTheme({
          '--bg-color': '#00155cff',
          '--text-color': '#0f8ef0ff',
          '--card-bg': '#ffffff',
          '--card-shadow': 'rgba(1, 87, 155, 0.2)',
          '--button-bg': '#bbdefb',
          '--button-text': '#01579b',
          '--button-hover': '#90caf9',
          '--active-glow': '#0288d1',
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
setInterval(clocktick, 1000);
clocktick();

// ✅ Apply light theme by default on load
document.getElementById('light').click();


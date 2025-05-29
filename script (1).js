
const music = document.getElementById('music');
const overlay = document.querySelector('.overlay');
const cat = document.getElementById('cat');
const birthdayText = document.getElementById('birthday-text');
const messages = document.getElementById('messages');
const kiss = document.getElementById('kiss');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startAnimation() {
    music.play();
    await sleep(2000);

    // Candle cat arrives
    cat.classList.remove('hidden');
    overlay.style.display = 'none';
    await sleep(4000);

    // Show 3D text
    birthdayText.classList.remove('hidden');
    await sleep(3000);

    // Show message
    const lines = await fetch('text.txt').then(r => r.text()).then(t => t.split('\n'));
    messages.classList.remove('hidden');
    for (let line of lines) {
        messages.innerHTML = line;
        await sleep(2000);
    }

    // Cat leaves
    cat.classList.add('hidden');
    await sleep(1000);

    // Two cats kiss
    kiss.classList.remove('hidden');
    await sleep(3000);
    kiss.classList.add('hidden');

    // Darkness
    overlay.style.display = 'block';
}
window.onload = startAnimation;

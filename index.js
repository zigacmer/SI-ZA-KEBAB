const button = document.getElementById('runaway');
const buttonYes = document.getElementById('yes');
const offset = 100;

button.addEventListener('click', () => {
    alert('To pa ne gre tak');
    window.close();
});

buttonYes.addEventListener('click', () => {
    alert('za tu al po pes\nmcken pekoci?\ncitiri euro\ndober tek ♥');
});

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonBox = button.getBoundingClientRect();
    const buttonCenterX = buttonBox.left + buttonBox.width / 2;
    const buttonCenterY = buttonBox.top + buttonBox.height / 2;

    let moveMagnitude = 10;

    const dx = x - buttonCenterX;
    const dy = y - buttonCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);


    if (distance < offset) {
        const angle = Math.atan2(dy, dx);
        const newX = buttonBox.left - Math.cos(angle) * moveMagnitude;
        const newY = buttonBox.top - Math.sin(angle) * moveMagnitude;

        const finalX = Math.max(0, Math.min(window.innerWidth - buttonBox.width, newX));
        const finalY = Math.max(0, Math.min(window.innerHeight - buttonBox.height, newY));

        button.style.left = `${finalX}px`;
        button.style.top = `${finalY}px`;
    }
});
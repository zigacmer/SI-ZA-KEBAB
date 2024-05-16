const button = document.getElementById('runaway');
const buttonYes = document.getElementById('yes');

button.addEventListener('click', () => {
    alert('To pa ne gre tak');
    window.close();
});

buttonYes.addEventListener('click', () => {
    window.location='yes.html';
});

window.addEventListener('mousemove', (e) => {
    
    let offset = 100;

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
        let newX = buttonBox.left - Math.cos(angle) * moveMagnitude;
        let newY = buttonBox.top - Math.sin(angle) * moveMagnitude;

        let touchEdgeCount = 0;


        if (newX <= 0 || newX >= window.innerWidth - buttonBox.width) touchEdgeCount++;
        if (newY <= 0 || newY >= window.innerHeight - buttonBox.height) touchEdgeCount++;

        if (touchEdgeCount >= 2) {

            const centerX = (window.innerWidth - buttonBox.width) / 2;
            const centerY = (window.innerHeight - buttonBox.height) / 2;
            button.style.left = `${centerX}px`;
            button.style.top = `${centerY}px`;
        } else {

            newX = Math.max(0, Math.min(window.innerWidth - buttonBox.width, newX));
            newY = Math.max(0, Math.min(window.innerHeight - buttonBox.height, newY));
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    }
});


window.addEventListener('touchmove', (e) => {
    
    let offset = 0;

    const x = e.clientX;
    const y = e.clientY;

    const buttonBox = button.getBoundingClientRect();
    const buttonCenterX = buttonBox.left + buttonBox.width / 2;
    const buttonCenterY = buttonBox.top + buttonBox.height / 2;

    let moveMagnitude = 1000;

    const dx = x - buttonCenterX;
    const dy = y - buttonCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < offset) {
        const angle = Math.atan2(dy, dx);
        let newX = buttonBox.left - Math.cos(angle) * moveMagnitude;
        let newY = buttonBox.top - Math.sin(angle) * moveMagnitude;

        let touchEdgeCount = 0;


        if (newX <= 0 || newX >= window.innerWidth - buttonBox.width) touchEdgeCount++;
        if (newY <= 0 || newY >= window.innerHeight - buttonBox.height) touchEdgeCount++;

        if (touchEdgeCount >= 2) {

            const centerX = (window.innerWidth - buttonBox.width) / 2;
            const centerY = (window.innerHeight - buttonBox.height) / 2;
            button.style.left = `${centerX}px`;
            button.style.top = `${centerY}px`;
        } else {

            newX = Math.max(0, Math.min(window.innerWidth - buttonBox.width, newX));
            newY = Math.max(0, Math.min(window.innerHeight - buttonBox.height, newY));
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    }
});
if (window.innerWidth < 768) {
    button.style.width = '75px';
    buttonYes.style.width = '75px';
    document.documentElement.style.scale = '1.0';
}

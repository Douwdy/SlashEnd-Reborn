const background = document.querySelector('html');

background.addEventListener('mousemove', () => {
    const x = event.clientX;
    const y = event.clientY;
    const xPercent = x / window.innerWidth;
    const yPercent = y / window.innerHeight;
    
    background.style.backgroundPosition = `${xPercent * 3}% ${yPercent * 3}%`;
});
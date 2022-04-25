const background = document.querySelector('html');

background.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
 
    const xPercent = x / window.innerWidth;
    const yPercent = y / window.innerHeight;

    const xPercentRounded = xPercent.toFixed(1);
    const yPercentRounded = yPercent.toFixed(1);

    background.style.backgroundPosition = `${xPercentRounded}% ${yPercentRounded}%`;
});
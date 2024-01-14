const body= document.querySelector('body');

body.addEventListener('mousemove', (e) => {
    const xPos= e.offsetX;
    const yPos= e.offsetY;
    const span=document.createElement('span');
    span.style.left=xPos + 'px';
    span.style.top=yPos + 'px';
    let size= Math.floor(Math.random()*100);
    span.style.width=size + 'px';
    span.style.height=size + 'px';
    

    body.appendChild(span);
    setTimeout(() => {
        span.remove()
    },3000)


})
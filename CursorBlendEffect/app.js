const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(event)=>{
    cursor.style.cssText = `
    top: ${event.y - 80}px;
    left: ${event.x - 80}px
    `;
});
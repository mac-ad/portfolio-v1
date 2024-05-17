const hoverCircle = document.querySelector(".hover-gradient");

document.querySelector("body").addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  hoverCircle.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.116), transparent 80%)`;
});

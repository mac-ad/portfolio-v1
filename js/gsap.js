const hoverCircle = document.querySelector(".hover-gradient");

document.querySelector("body").addEventListener("mousemove", (e) => {
  gsap.to(hoverCircle, {
    background: `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.116), transparent 80%)`,
    duration: 1,
  });
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   hoverCircle.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.116), transparent 80%)`;
});

const header = document.querySelector("#about");
const main = document.querySelector("main");

const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

tl.fromTo(
  document.querySelectorAll("header >*"),
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1.2,
  }
)
  .fromTo(
    document.querySelectorAll(".social-links >*"),
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
    }
  )
  .fromTo(
    document.querySelectorAll("main"),
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
    }
  );

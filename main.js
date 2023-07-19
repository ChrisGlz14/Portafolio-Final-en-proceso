// Nav

const btnSwitch = document.querySelector("#switch");
const btnMobile = document.querySelector(".btnMobile");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

// Scroll In To Para deslizar con el NAV
document.addEventListener("DOMContentLoaded", function () {
  const btnHome = document.getElementById("nav-home");
  const btnProjects = document.getElementById("nav-projects");
  const btnAboutMe = document.getElementById("nav-about-me");
  const btnStack = document.getElementById("nav-stack");

  btnHome.addEventListener("click", function (e) {
    e.preventDefault();
    const homeSection = document.getElementById("home"); //
    homeSection.scrollIntoView({ behavior: "smooth" }); //
  });

  btnProjects.addEventListener("click", function (e) {
    e.preventDefault();
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({ behavior: "smooth" });
  });

  btnAboutMe.addEventListener("click", function (e) {
    e.preventDefault();
    const aboutMeSection = document.getElementById("about-me");
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  });

  btnStack.addEventListener("click", function (e) {
    e.preventDefault();
    const stackSection = document.getElementById("stack");
    stackSection.scrollIntoView({ behavior: "smooth" });
  });
});

btnMobile.addEventListener("click", () => {
  let links = document.querySelectorAll(".links");
  for (const link of links) {
    if (link.style.display === "") {
      link.style.display = "block"; // o cualquier otro valor adecuado para mostrar el elemento
    } else {
      link.style.display = "";
    }
  }
});

// Principal Presentacion

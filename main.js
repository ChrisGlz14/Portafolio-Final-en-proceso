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

// GO UP BTN

window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
    ;
  }
};

const btnTop = document.querySelector(".arrow-btn");

btnTop.addEventListener("click", function () {
  window.scrollTo({top:0, behavior:"smooth"})
})


//Email Contacto

const sendMail = document.getElementById("btn-mail");

// Escucha el evento de clic en el enlace
sendMail.addEventListener('click', handleSubmit);

// Función para abrir el cliente de correo con la dirección predefinida
function handleSubmit(e) {
  // Previene el comportamiento por defecto del enlace (navegar a una nueva página)
  e.preventDefault();

  // Obtiene la dirección de correo electrónico del atributo "href" del enlace
  const emailLink = sendMail.getAttribute('href');

  // Abre el cliente de correo con la dirección predefinida
  window.location.href = emailLink;
}



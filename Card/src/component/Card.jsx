import "./Card.css";

function Card() {
  return (
    <div className="container">
          <img src="\src\img\proyectocoles.png" alt="" />
        
      <div className="container-card">
        <div className="container-header">
          <h2>Nombre del proyecto</h2>
          <div className="icons">
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-rocket"></i>
          </div>
        </div>
        <p className="description-card">
          Descripcion de la tarjeta: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat quos neque assumenda vero! Illum corrupti
          neque molestiae blanditiis, sed, assumenda doloremque eius similique
          voluptates nemo repudiandae quam illo asperiores esse.
        </p>
        <div className="footer-card">
          <h3>Tecnologias utilizadas:</h3>
          <div className="footer-icons">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

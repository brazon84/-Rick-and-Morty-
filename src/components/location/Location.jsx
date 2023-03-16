import React from "react";
import './Location.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Location = ({ name, type, dimension, residents }) => {
  // se utilizan las prop para simplificar
  return (
    <div className="seccion1">
          <h2>{name}</h2>
      <section className="title d-flex justify-content-evenly align-items-center align-content-center">
        <ul className="shadow p-3 mb-10 bg-body-tertiary rounded">
          <li>
            <p className="d-flex flex-column">
              <span><b>Type: </b></span>
              {type}
            </p>
          </li>
          <li>
          <p className="d-flex flex-column">
            <span><b>Dimension: </b></span>
            {dimension}
          </p>
          </li>
          <li>
          <p className="d-flex flex-column">
            <span><b>Population: </b></span>
            {residents.length}
          </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Location;

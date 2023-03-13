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
            <p>
              <h4>Type: </h4>
              {type}
            </p>
          </li>
          <li>
          <p>
            <h4>Dimension: </h4>
            {dimension}
          </p>
          </li>
          <li>
          <p>
            <h4>Population: </h4>
            {residents.length}
          </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Location;

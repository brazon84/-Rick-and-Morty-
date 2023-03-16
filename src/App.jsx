import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./utils/getRandomNumber";
import Location from "./components/location/Location";
import ListResidents from "./components/listResident/ListResidents";
import baner from "./assets/baner.png"

const App = () => {
  const [LocalInfo, setLocalInfo] = useState(null); //useState es un hook que se esta inicando en null
  const [idSearch, setIdSearch] = useState("");

  let getIdRandom = () => getRandomNumber(1, 126); // realiza el dinamismo para generar numeros aleatoreos (me genera el numero de ID)
  
  const info = async (LocationId) => {
    const url = `https://rickandmortyapi.com/api/location/${LocationId}`; // con el getId trae un id diferente en cada llamado
    try {
      const res = await axios.get(url); //variable de respuesta (await)desempaqueta la promesa

      setLocalInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const idLocationChange = (e) => {
    const newValue = e.target.value;

    if (/^\d{0,3}$/.test(newValue)) setIdSearch(newValue);
    
  };

  const onclikcSubmit = (e) => {
    e.preventDefault();
  
    if (idSearch) {
      info(idSearch);
      setIdSearch(""); // establece el valor de idSearch en una cadena vacía
    } else {
      info(getIdRandom());
    }
  };
  

  useEffect(() => {
    info(getIdRandom());
  }, []);

  return (
    <div className="App">
    <div className="baner">
    <img src={baner} alt="font" />
    </div>
    <div>
      {LocalInfo && (
        <Location {...LocalInfo} /> // se utiliza para ampliar y renderizar el contenido mediante las prop llamadas en el componente
      )}
    </div>
    <div className="search">
      <form className="search1 d-flex" 
      onSubmit={onclikcSubmit} >
        <input
          className="form"
          type="search"
          name="id-location"
          value={idSearch}
          onChange={idLocationChange}
          placeholder="Number from 1 to 126"
        />
        <input
          type="submit"
          value="Search"
          />
      </form>
    </div>
        {LocalInfo &&
         
            <ListResidents residents={LocalInfo.residents}/>
          }    
    </div>
  );
        }

export default App;
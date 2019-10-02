import React, { useState } from "react";
import api from "./services/api";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {



  const [email, setEmail] = useState("");
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Funcionou mano!! Tá porra" + email);
    const response = await api.post('/sessions', {email});
    console.log(response);
    const {_id} = response.data;
    console.log(_id);
    localStorage.setItem('user', _id);


  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereça <strong> spots </strong> para os programadores e encontre
          <strong> talentos </strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> E - MAIL * </label>
          <input
            type="email"
            id="email"
            placeholder="Seu Melhor E-mail"
            value ={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">
            {" "}
            Entrar{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
//import BR from 'react-phone-number-input/locale/br'
import logo from './bolso.png';
//import logo2 from './'
import './App.css';

export default class PhoneInputGfg extends React.Component {
  constructor(props) {
      super(props);
      this.state = { phone: "" };
      
  }

render() {
  return (
    <div className='main'>
      <div className='header'>
      <h1>PIX <span>Patriota</span> &#127463;&#127479;</h1>
      <img src={logo} alt='foto do mito'></img>
      </div>
      <h2>Mande uma pessoa tomar no c# com a voz do <b>MITO</b>!!!!</h2>
      <h3>Insira um número de telefone com DDD</h3>
      <PhoneInput
                    defaultCountry="BR"
                    className="number"
                    placeholder="número de telefone"
                    country={"br"}
                    value={this.state.telefone}
                    onChange={(telefone) =>
                        this.setState({ telefone })
                    }></PhoneInput>
    </div>
  );

}}



import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './Componente/MenuSuperior';
import Resumo from './Componente/Resumo/Resumo';
//import { Switch, Router } from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <div>
       <MenuSuperior/>
       <Resumo/>
      </div>
    );
  }
}
export default App;

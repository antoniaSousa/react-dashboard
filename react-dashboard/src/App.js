import React, { Component } from 'react';
import './App.css';
import MenuSuperior from './Componente/MenuSuperior';
import Resumo from './Componente/Resumo/Resumo';
import Consultas from './Componente/Consultas/Consultas';
import Faturamento from './Componente/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';
class App extends Component {
  render(){
    return (
      <div>
       <MenuSuperior/>
       <div className="conatainer-fluid">
           <div className="row">
               <div className="col">
                   <Switch>
                       <Route path="/" exact component={Resumo} />
                       <Route path="/Consultas" component={Consultas} />
                       <Route path="/Faturamento" component={Faturamento} />
                   </Switch>
               </div>
           </div>
       </div>
      </div>
    );
  }
}
export default App;

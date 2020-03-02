import React, {Component} from "react";

class Resumo extends Component {
    constructor(props){
        super(props);
        this.state = {
        consultas: {
          consultas_30dias_anteriores : 0,
          consultas_30dias_posteriores : 0  
        },

        faturamento : {
            anterior : {
                valor: 0,
                comparativo : 0
            },

            previsto : {
                valor: 0,
                comparativo : 0
            }

        }
    }
}
    render(){
        return(
            <div>
                <h2 className="mt-2">Resumo </h2>
                <div className="row">
                    <div className="col">
                        <h3> Consultas</h3>

                        <div className="row>">
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">
                                        30 dias anteriores
                                    </div>
                                    <div className="card-body">
                                        {this.state.consultas.consultas_30dias_anteriores}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card mt-2 text-center">
                                        <div className="card-header">
                                            Proximos 30 dias
                                        </div>
                                        <div className="card-body">
                                            {this.state.consultas.consultas_30dias_posteriores}
                                        </div>
                                        </div> 
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Faturamento</h3>
                            <div className="row">
                                <div className="col">
                                    <div className="card mt-2 text-center">
                                        <div className="card-header">
                                            30 dias anteriores
                                        </div>
                                    <div className="card-body">
                                        {this.state.faturamento.anterior.valor.toLocaleString("pt-BR", {style : "currency", currency : "BRL"})}
                                        <span className="badge badge-success m1-1">
                                            {this.state.faturamento.anterior.comparativo} %
                                            </span> 
                                    </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mt-2 text-center">
                                            <div className="card-header">
                                                Proximos 30 dias
                                            </div>
                                            <div className="card-body">
                                                {this.state.faturamento.previsto.valor.toLocaleString("pt-BR", {style : "currency", currency : "BRL"})}
                                                <span className="badge badge-danger m1-1">
                                                    {this.state.faturamento.previsto.comparativo} %
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Resumo;
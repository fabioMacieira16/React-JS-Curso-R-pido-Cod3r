import './Contador.css';

import React, { Component } from "react";
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

class Contador extends Component {

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        });
    };

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        });
    };

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    mudarPasso= (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} 
                    onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display >
               <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador
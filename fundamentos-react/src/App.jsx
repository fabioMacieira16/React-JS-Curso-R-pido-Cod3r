import './App.css';
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComif from './components/basicos/CondicionalComif';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


export default (props) => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#11 - Mega" color="#73503C">
                <Mega qtdNumeros={8}/>
            </Card>

            <Card titulo="#10 - Contador" color="#293E6">
                <Contador passo={10} valor={100} />
            </Card>

            <Card titulo="#9 - Input" color="#9C0F5F">
                <Input />
            </Card>

            <Card titulo="#8 - Comunicação Indireta " color="#000">
                <Super />
            </Card>

            <Card titulo="#7 - Comunicação direta " color="#4298B5">
                <Pai sobrenome="Freitas" />
            </Card>

            <Card titulo="#6 - Condicional v2" color="#FA6900">
                <CondicionalComif numero={10} />
            </Card>

            <Card titulo="#5 - Condicional v1" color="#E94C6F">
                <Condicional numero={11} />
            </Card>

            <Card titulo="#4 - Repetição" color="#008BBA">
                <Repeticao />
            </Card>

            <Card titulo="#3 - Componets com filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#2 - Componet Com paramentro" color="#FF85CB">
                <ComParametro titulo="Esse é o subtitulo"
                    subtitulo="Esse é o subtitulo" />
            </Card>

            <Card titulo="#1 - Primeiro Component" color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
);

//export return App;

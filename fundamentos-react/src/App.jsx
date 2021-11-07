import './App.css';
import React from "react";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComif from './components/CondicionalComif';

export default (props) => (
    <div className="App">
        <Card titulo="#6 - Condicional v2">
            <CondicionalComif numero={11} />
        </Card>
        <Card titulo="#5 - Condicional v1">
            <Condicional numero={10} />
        </Card>
        <Card titulo="#4 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#3 - Componets com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#2 - Componet Com paramentro">
            <ComParametro titulo="Esse é o subtitulo"
                subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#1 - Primeiro Component">
            <Primeiro />
        </Card>
    </div>
);

//export return App;

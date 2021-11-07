import React, { useState } from "react";

export default (props) => {

    const [nome, setNome] = useState('7k por mes 2022')

    return (
        <>
            <h3>{nome}</h3>
            <input type="Text" value={nome} 
                onChange={ e => setNome(e.target.value)} />
        </>
    );
};
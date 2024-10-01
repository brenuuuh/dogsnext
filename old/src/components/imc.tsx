'use client';

import React from 'react';

export default function Imc() {
  const [altura, setAltura] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [imc, setImc] = React.useState('');

  const handleClick = () => {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
    return;
  };

  return (
    <div>
      <div>
        <label htmlFor="altura">Altura (em cm)</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={({ target }) => setAltura(target?.value)}
        />
        <label htmlFor="peso">Peso (em kg)</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={({ target }) => setPeso(target?.value)}
        />
      </div>
      <button onClick={handleClick}>Calcular</button>
      {imc && <p>Seu IMC é: {imc}</p>}
    </div>
  );
}

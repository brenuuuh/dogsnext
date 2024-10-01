'use client';

import IProduto from '@/contracts/IProduto';
import React from 'react';

export default function ClientFetch() {
  const [data, setData] = React.useState<IProduto[] | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.origamid.online/produtos');
      const json = (await response.json()) as IProduto[];
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <main>
      <h1>Produtos</h1>
      {data &&
        data.map((produto: IProduto) => (
          <ul key={produto.id}>
            <li>{produto.nome}:</li>
            <li>{produto.descricao}:</li>
            <li>
              {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </li>
          </ul>
        ))}
    </main>
  );
}

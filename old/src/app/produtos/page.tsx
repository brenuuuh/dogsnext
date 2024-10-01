import serverFetch from '@/components/serverFetch';
import IProduto from '@/contracts/IProduto';

export default async function Produtos() {
  const produtos = await serverFetch('https://api.origamid.online/produtos');
  return (
    <main>
      <h1>Produtos</h1>
      {produtos.map((produto: IProduto) => (
        <ul key={produto.id}>
          <li>{produto.nome}</li>
          <li>{produto.descricao}</li>
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

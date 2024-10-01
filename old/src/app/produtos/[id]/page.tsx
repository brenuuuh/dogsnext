import IPageParams from '@/contracts/IPageParams';

export default async function ProdutoPage({ params }: IPageParams) {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  );
  const produto = await response.json();
  return (
    <main>
      <h1>Produto</h1>
      <ul>
        <li>Nome: {produto.nome}</li>
        <li>Descrição: {produto.descricao}</li>
        <li>
          Preço:
          {produto.preco?.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </li>
        <li>Estoque: {produto.estoque}</li>
        <li>Importado: {produto.importado}</li>
      </ul>
    </main>
  );
}

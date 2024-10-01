import cursosApi from '@/api/cursos';

type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function Aula({ params }: PageParams) {
  const aula = await cursosApi.getAula(params.curso, params.aula);
  return (
    <main>
      <h1>Produtos</h1>
      <ul key={aula.id}>
        <li>Nome: {aula.nome}</li>
        <li>Descrição: {aula.descricao}</li>
        <li>Slug: {aula.slug}</li>
        <li>Ordem: {aula.ordem}</li>
        <li>Tempo: {aula.tempo}</li>
      </ul>
    </main>
  );
}

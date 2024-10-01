import cursosApi from '@/api/cursos';
import IAula from '@/contracts/IAula';
import Link from 'next/link';

type PageParams = {
  params: {
    curso: string;
  };
};
export default async function Curso({ params }: PageParams) {
  const detalhes = await cursosApi.getCurso(params.curso);
  return (
    <main>
      <h1>Produtos</h1>
      <ul key={detalhes.id}>
        <li>Nome: {detalhes.nome}</li>
        <li>Descrição: {detalhes.descricao}</li>
        <li>Slug: {detalhes.slug}</li>
        <ul>
          {detalhes?.aulas?.map((aula: IAula) => (
            <li key={aula.id}>
              <Link href={`${params.curso}/${aula.slug}`}>{aula.nome} </Link>
            </li>
          ))}
        </ul>
      </ul>
    </main>
  );
}

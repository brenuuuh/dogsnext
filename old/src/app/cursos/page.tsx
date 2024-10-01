import cursosApi from '@/api/cursos';
import ICurso from '@/contracts/ICurso';
import Link from 'next/link';

export default async function Cursos() {
  const cursos = await cursosApi.getCursos();
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {cursos.map((curso: ICurso) => (
          <li key={curso.id}>
            <Link href={`cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import serverFetch from '@/components/serverFetch';
import IAula from '@/contracts/IAula';
import ICurso from '@/contracts/ICurso';
import ICursoDetalhes from '@/contracts/ICursoDetalhes';

export async function getCursos() {
  const response = await serverFetch('https://api.origamid.online/cursos');
  return response as ICurso[];
}

export async function getCurso(curso: string) {
  const response = await serverFetch(
    `https://api.origamid.online/cursos/${curso}`,
  );
  return response as ICursoDetalhes;
}

export async function getAula(curso: string, aula: string) {
  const response = await serverFetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`,
  );
  return response as IAula;
}

const cursosApi = { getCursos, getCurso, getAula };
export default cursosApi;

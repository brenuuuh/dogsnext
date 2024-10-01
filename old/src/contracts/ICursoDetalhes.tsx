import IAula from './IAula';
import ICurso from './ICurso';

interface ICursoDetalhes extends ICurso {
  aulas: IAula[];
}

export default ICursoDetalhes;

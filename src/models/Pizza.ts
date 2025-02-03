import Tipo from './Tipo';
import Usuario from './Usuario';

export default interface Pizza {
  id: number;
  sabor: string;
  valor: string;
  descricao: string;
  tamanho: string;
  tipo: Tipo | null;
  usuario: Usuario | null;
}
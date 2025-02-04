import Usuario from './Usuario';
import Tipo from './Tipo';

export default interface Pizza {
  nome: string | undefined;
  foto: string | undefined;
  preco: any;
  id: number;
  sabor: string;
  valor: string;
  descricao: string;
  tamanho: string;
  tipo: Tipo | null;
  usuario: Usuario | null;
}
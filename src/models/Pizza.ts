import { ReactNode } from 'react';
import Usuario from './Usuario';
import Tipo from './Tipo';

export default interface Pizza {
  titulo: ReactNode;
  texto: ReactNode;
  id: number;
  sabor: string;
  valor: string;
  descricao: string;
  tamanho: string;
  tipo: Tipo | null;
  usuario: Usuario | null;
}
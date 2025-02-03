import { ReactNode } from 'react';
import Usuario from './Usuario';

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
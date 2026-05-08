export interface Aula {
  id: string;
  titulo: string;
  horario: string;
  local: string;
  ativo: boolean;
}

export const AULAS_MOCK: Aula[] = [
  {
    id: '1',
    titulo: 'Pensamento Computacional',
    horario: '18:40 - 20:10',
    local: 'Bloco B - Lab B6',
    ativo: true,
  },
  {
    id: '2',
    titulo: 'Introdução à Computação',
    horario: '20:30 - 22:00',
    local: 'Bloco C - Lab C1',
    ativo: false,
  },
];
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('mapautf.db');

export interface AulaDB {
  id?: number;
  subject: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
  local: string;
}

export const initDB = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT NOT NULL,
      day_of_week TEXT NOT NULL,
      start_time TEXT NOT NULL,
      end_time TEXT NOT NULL,
      local TEXT NOT NULL
    );
  `);
};

export const salvarAula = (aula: Omit<AulaDB, 'id'>) => {
  const statement = db.prepareSync(
    'INSERT INTO classes (subject, day_of_week, start_time, end_time, local) VALUES ($subject, $day_of_week, $start_time, $end_time, $local)'
  );
  statement.executeSync({
    $subject: aula.subject, 
    $day_of_week: aula.day_of_week, 
    $start_time: aula.start_time, 
    $end_time: aula.end_time, 
    $local: aula.local
  });
};

export const listarAulas = (): AulaDB[] => {
  return db.getAllSync<AulaDB>('SELECT * FROM classes');
};

export const excluirAula = (id: number) => {
  const statement = db.prepareSync('DELETE FROM classes WHERE id = $id');
  try {
    statement.executeSync({ $id: id });
  } finally {
    statement.finalizeSync();
  }
};
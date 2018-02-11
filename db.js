import Dexie from 'dexie';

const db = new Dexie('Agenda App');
db.version(1).stores({ contatos: '++id' });

export default db;

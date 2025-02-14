import { insertRecord } from '@/scripts/databaseScripts';

export async function insertMatch(){
    await insertRecord('o-vilarejo_partidas', {});
}
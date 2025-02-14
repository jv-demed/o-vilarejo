import { insertRecord } from '@/scripts/databaseScripts';

export async function insertPlayer(player){
    await insertRecord('o-vilarejo_jogadores', player);
}
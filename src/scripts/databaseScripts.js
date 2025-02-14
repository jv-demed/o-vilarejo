import { supabase } from '@/supabase/client';

export async function insertRecord(table, obj){
    const { error } = await supabase.from(table).insert(obj);
    if(error) console.log(error);
}
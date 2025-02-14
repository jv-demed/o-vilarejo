'use client'
import { useEffect } from 'react';
import { useDataList } from '@/hooks/useDataList';
import { getRealtime, removeChannel } from '@/supabase/realtime';

export function useRealtimeList({ name, table, select, filter }){

    const data = useDataList({ 
        table: table,
        select: select,
        filter: filter
    });

    useEffect(() => {
        const channel = getRealtime({ 
            name: name,
            table: table,
            callback: data.refresh
        });
        return () => removeChannel(channel);
    }, []);

    return data;
}
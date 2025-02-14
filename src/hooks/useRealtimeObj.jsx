'use client'
import { useEffect } from 'react';
import { useDataObj } from '@/hooks/useDataObj';
import { getRealtime, removeChannel } from '@/supabase/realtime';

export function useRealtimeObj({ name, table, select, filter }) {

    const data = useDataObj({ 
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
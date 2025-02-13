'use client'
import { useEffect } from 'react';
import { getRealtime, removeChannel } from '@/supabase/realtime';
import { useDataList } from '@/hooks/useDataList';

export function useRealtime({ name, table }) {

    const data = useDataList({ table: table });

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
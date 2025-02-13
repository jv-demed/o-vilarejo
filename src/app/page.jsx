'use client'
import { useEffect, useState } from 'react';
import { Container } from '@/components/boxes/Container';
import { TextInput } from '@/components/inputs/TextInput';
import { ActionButton } from '@/components/buttons/ActionButton';
import { useDataList } from '@/hooks/useDataList';
import { getRealtime } from '@/supabase/realtime';

export default function Home(){
    
    const players = useDataList({
        table: 'o-vilarejo_jogadores'
    });

    useEffect(() => {
        const channel = getRealtime({ 
            name: 'players realtime',
            table: 'o-vilarejo_jogadores',
            callback: players.refresh
        });
        return () => removeChannel(channel);
    }, []);

    console.log(players);

    const [name, setName] = useState('');

    return (
        <Container>
            <header>
                <h1 className='text-3xl'>
                    O Vilarejo
                </h1>
            </header>
            <div className='flex flex-col gap-2 w-full'>
                <TextInput placeholder='Nome...'
                    value={name}
                    setValue={setName}
                />
                <ActionButton name='Entrar' 
                    disabled={name == ''}
                />
            </div>
        </Container>
    );
}
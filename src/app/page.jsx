'use client'
import { useState } from 'react';
import { useRealtime } from '@/hooks/useRealtime';
import { Container } from '@/components/boxes/Container';
import { TextInput } from '@/components/inputs/TextInput';
import { ActionButton } from '@/components/buttons/ActionButton';

export default function Home(){
    
    const players = useRealtime({
        name: 'players',
        table: 'o-vilarejo_jogadores'
    });
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
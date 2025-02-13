'use client'
import { useEffect, useState } from 'react';
import { useRealtime } from '@/hooks/useRealtime';
import { Container } from '@/components/boxes/Container';
import { TextInput } from '@/components/inputs/TextInput';
import { ActionButton } from '@/components/buttons/ActionButton';

export default function Home(){
    
    const players = useRealtime({
        name: 'players',
        table: 'o-vilarejo_jogadores'
    });
    
    const [playersLength, setPlayersLength] = useState(0);
    useEffect(() => {
        setPlayersLength(players.list.length);
    }, [players.list]);

    const [name, setName] = useState('');

    return (
        <Container>
            <div className='flex flex-col gap-2 w-full'>
                <TextInput placeholder='Nome...'
                    value={name}
                    setValue={setName}
                />
                <ActionButton 
                    name={`Entrar ${playersLength > 0 && `${playersLength}/10`}`} 
                    disabled={name == ''}
                    
                />
            </div>
        </Container>
    );
}
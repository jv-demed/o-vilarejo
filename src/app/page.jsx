'use client'
import { useEffect, useState } from 'react';
import { useRealtimeList } from '@/hooks/useRealtimeList';
import { Container } from '@/components/boxes/Container';
import { TextInput } from '@/components/inputs/TextInput';
import { ActionButton } from '@/components/buttons/ActionButton';
import { insertPlayer } from '@/scripts/playersScripts';
import { useRouter } from 'next/navigation';
import { useRealtimeObj } from '@/hooks/useRealtimeObj';
import { insertMatch } from '@/scripts/matchesScripts';

export default function Home(){

    const router = useRouter();

    const match = useRealtimeObj({
        table: 'o-vilarejo_partidas',
        filter: q => q.eq('status', 0)
    });
    console.log(match);
    
    const players = useRealtimeList({
        name: 'players',
        table: 'o-vilarejo_jogadores'
    });
    
    const [playersLength, setPlayersLength] = useState(0);
    useEffect(() => {
        setPlayersLength(players.list.length);
    }, [players.list]);

    const [user, setUser] = useState({ jogador: '' });

    return (
        <Container>
            <div className='flex flex-col gap-2 w-full'>
                <TextInput placeholder='Nome...'
                    value={user.jogador}
                    setValue={e => setUser({ ...user, jogador: e })}
                />
                <ActionButton 
                    name={`Entrar ${playersLength > 0 ? `${playersLength}/10` : ''}`} 
                    disabled={user.jogador == ''}
                    action={async () => {
                        !match.obj && await insertMatch();
                        await insertPlayer(user);
                        router.push(`/${match.obj.id}`);
                    }}
                />
            </div>
        </Container>
    );
}
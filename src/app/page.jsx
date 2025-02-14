'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRealtimeObj } from '@/hooks/useRealtimeObj';
import { useRealtimeList } from '@/hooks/useRealtimeList';
import { insertMatch } from '@/scripts/matchesScripts';
import { insertPlayer } from '@/scripts/playersScripts';
import { Container } from '@/components/boxes/Container';
import { TextInput } from '@/components/inputs/TextInput';
import { ActionButton } from '@/components/buttons/ActionButton';

export default function Home(){

    const router = useRouter();

    const match = useRealtimeObj({
        table: 'o-vilarejo_partidas',
        filter: q => q.eq('status', 0)
    });
    
    const players = useRealtimeList({
        name: 'players',
        table: 'o-vilarejo_jogadores'
    });
    
    const [playersLength, setPlayersLength] = useState(0);
    useEffect(() => {
        setPlayersLength(players.list.length);
    }, [players.list]);

    const [user, setUser] = useState({ jogador: '' });

    useEffect(() => {
        const storedUser = localStorage.getItem('jogador');
        const storedMatchId = localStorage.getItem('partidaId');
        if(storedUser && storedMatchId){
            router.push(`/${storedMatchId}`);
        }
        if(storedUser){
            setUser({ jogador: storedUser });
        }
    }, []);

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
                        localStorage.setItem('jogador', user.jogador);
                        localStorage.setItem('partidaId', match.obj.id);
                        router.push(`/${match.obj.id}`);
                    }}
                />
            </div>
        </Container>
    );
}
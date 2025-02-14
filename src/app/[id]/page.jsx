'use client'
import { Container } from '@/components/boxes/Container';
import { Loading } from '@/components/elements/Loading';
import { useRealtimeList } from '@/hooks/useRealtimeList';

export default function Partida(){
    
    const players = useRealtimeList({
        name: 'players',
        table: 'o-vilarejo_jogadores'
    });

    return (
        <Container>
            {players.list.length < 10 && <div className='flex flex-col items-center gap-4'>
                <span>Aguardando outros jogadores...</span>
                <span>{players.list.length}/10</span>
                <Loading />    
            </div>}
        </Container>
    );
}
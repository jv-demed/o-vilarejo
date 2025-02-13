import { ICONS } from '@/assets/icons';

export function Loading({ 
    color = 'text-mintCream', 
    width = 'text-xl' 
}){
    return (
        <div className='flex items-center justify-center w-full h-auto'>
            <ICONS.loading className={`${width} ${color} animate-fast-spin`} />
        </div>
    );
};
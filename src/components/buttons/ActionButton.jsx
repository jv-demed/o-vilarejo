'use client'
import { useState } from 'react';
import { Loading } from '../elements/Loading';

export function ActionButton({ 
    type, 
    name, 
    icon, 
    width, 
    disabled, 
    action 
}){

    const [isLoading, setIsLoading] = useState(false);

    return(
        <button
            type={type || 'button'}
            disabled={disabled}
            style={{ width: width || '100%' }}
            className={`
                flex items-center justify-center gap-2.5
                rounded cursor-pointer px-2 h-10 text-mintCream
                focus:outline-none focus:ring-2 focus:ring-amaranthPurple   
                ${disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-amaranthPurple'}
            `}
            onClick={async () => {
                setIsLoading(true);
                action && await action();
                setIsLoading(false);
            }}
        >
            {isLoading ? <Loading /> : <>
                {name && <span>{name}</span>}
                {icon && <icon.component className='text-2xl' />}
            </>}
        </button>
    )
}
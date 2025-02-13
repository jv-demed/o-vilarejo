'use client'

export function TextInput({ 
    placeholder, 
    value, 
    setValue, 
    disabled 
}){
    return(
        <input type='text'
            name='input-label'
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder || '...'}
            disabled={disabled}
            className={`
                bg-gunmetal border border-border text-mintCream
                rounded w-full px-4 h-12
                hover:border-amaranthPurple transition 
                focus:outline-none focus:ring-2 focus:ring-amaranthPurple focus:border-amaranthPurple
            `}
        />
    )
}
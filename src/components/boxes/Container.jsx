export function Container({ children }){
    return (
        <main className={`
            flex flex-col items-center gap-10 
            p-4 w-full
        `}>
            {children}
        </main>
    );
}
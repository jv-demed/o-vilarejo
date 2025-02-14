export function Container({ children }){
    return (
        <main className={`
            flex flex-col items-center gap-10 
            p-4 h-[90vh] w-full
        `}>
            {children}
        </main>
    );
}
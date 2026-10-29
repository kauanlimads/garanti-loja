import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col bg-white shadow-sm px-36">
            <div className="flex items-center justify-between gap-20 p-5">
                <Link href="/" className="text-2xl">Garanti</Link>

                <input
                    type="text"
                    placeholder="Pesquise por produtos"
                    className="w-full p-3 bg-neutral-50 shadow-sm"
                />

                <nav className="flex items-center gap-x-5">
                    <Link 
                        href="/"
                        className="font-semibold p-3 bg-neutral-50 shadow-sm text-nowrap"    
                    >
                        Crie sua conta
                    </Link>
                    <Link href="/">Compras</Link>
                </nav>
            </div>
            <div className="flex items-center justify-between px-5 py-2.5">
                <nav className="flex items-center gap-x-5">
                    <button className="font-semibold p-3 bg-neutral-50 shadow-sm">
                        Nossos Produtos
                    </button>
                    <Link href="/">Computadores e Notebooks</Link>
                    <Link href="/">Smartphones e Celulares</Link>
                    <Link href="/">Peças de Hardware</Link>
                    <Link href="/">Periféricos e Game</Link>
                    <Link href="/">TV e Áudio</Link>
                    <Link href="/">Livros</Link>
                    <Link href="/">Vestuário</Link>
                    <Link href="/">Móveis para a Casa</Link>
                </nav>
            </div>
        </header>
    )
}
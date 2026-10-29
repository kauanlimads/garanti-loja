import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col bg-neutral-50">
            <section className="flex items-start justify-betwen gap-x-20 p-5 px-36">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-lg font-semibold">Navegue para</h1>
                    <nav className="flex flex-col gap-y-3">
                        <Link href="/">Nossos Produtos</Link>
                        <Link href="/">Serviços</Link>
                        <Link href="/">Sobre nós</Link>
                        <Link href="/">Ajuda</Link>
                        <Link href="/">Contato</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-lg font-semibold">Nossos Produtos</h1>
                    <nav className="flex flex-col gap-y-3">
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
            </section>
            <div className="flex items-center justify-center p-2 bg-neutral-100 px-36">
                <p className="text-sm font-semibold">Garanti Store 2026, Todos os direitos já estão reservados.</p>
            </div>
        </footer>
    )
}
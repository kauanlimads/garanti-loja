import Image from "next/link"
import Link from "next/link"

export default function ProductCard() {
    return (
        <article className="max-w-xs flex flex-col w-full shadow-sm">
            <div className="w-full h-64 bg-neutral-50"></div>
            <div className="flex flex-col gap-3 p-3 bg-white">
                <Link href="/" className="text-sm line-clamp-2">Kit Computador Completo com Processador Intel i9 Mouse e Teclado Multilaser</Link>
                <p className="text-lg">R$ 4350.90</p>
            </div>
        </article>
    )
}
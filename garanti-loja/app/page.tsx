import ProductCard from "@/app/ui/product-card";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="py-5 px-40">
        <div className="flex items-center gap-4">
          {Array.from([0,1,2,3,4,5], (index) => (
            <ProductCard key={index}/>
          ))}
        </div>
      </section>
      <section className="py-5 px-40">
        <div className="flex items-center gap-4">
          {Array.from([0,1,2,3,4,5,6,7], (index) => (
            <ProductCard key={index}/>
          ))}
        </div>
      </section>
    </main>
  )
}
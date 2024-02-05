import Card from "@/lib/components/Card";
import data from "@/lib/data.json";
import { Product } from "@/lib/types";


export default function Home() {

  const products: Product[] = data;

  return (
    <main className=" min-h-screen  p-24">
    
      <div className="z-10 w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
       
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
        
      </div>

    </main>
  );
}

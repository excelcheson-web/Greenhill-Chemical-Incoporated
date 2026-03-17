import { ProductCard } from "@/components/ui/product-card";
import type { Product } from "@/lib/types";
import products from "@/content/products.json";

export function ProductGrid() {
  const items: Product[] = products;

  return (
    <section aria-labelledby="product-grid-heading">
      <h2
        id="product-grid-heading"
        className="mb-8 text-2xl font-bold text-brand-anthracite"
      >
        Chemical Products
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

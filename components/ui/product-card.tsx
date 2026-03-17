import { FileDown, FlaskConical, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasCertifications = product.certifications.length > 0;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-lg border border-brand-border bg-white",
        "p-6 shadow-sm transition-shadow hover:shadow-md",
        "focus-within:ring-2 focus-within:ring-brand-mint focus-within:ring-offset-2"
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-brand-anthracite">
          <FlaskConical className="h-5 w-5 shrink-0" aria-hidden="true" />
          <h3 className="text-lg font-bold leading-tight">{product.name}</h3>
        </div>
        {hasCertifications && (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full",
              "bg-brand-mint/10 px-2 py-0.5 text-xs font-medium text-brand-anthracite"
            )}
            title={product.certifications.join(", ")}
            aria-label={`Eco-certified: ${product.certifications.join(", ")}`}
          >
            <Leaf className="h-3 w-3" aria-hidden="true" />
            Eco
          </span>
        )}
      </div>

      {/* Details */}
      <dl className="mb-6 flex-1 space-y-2 text-sm text-brand-anthracite/80">
        <div className="flex justify-between">
          <dt className="font-medium">CAS Number</dt>
          <dd className="font-mono tabular-nums">{product.casNumber}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">Formula</dt>
          <dd>{product.formula}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-medium">Purity</dt>
          <dd>{product.purityGrade}</dd>
        </div>
      </dl>

      {/* SDS Download */}
      <a
        href={product.sdsUrl}
        download
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-md",
          "bg-brand-anthracite px-4 py-2.5 text-sm font-semibold text-white",
          "transition-colors hover:bg-brand-anthracite/90",
          "focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2"
        )}
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        Download SDS
      </a>
    </article>
  );
}

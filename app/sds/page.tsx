import Link from 'next/link';
import { sdsRecords } from '@/content/sds-data';

export default function SdsIndexPage() {
  const sdsList = Object.values(sdsRecords);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-brand-anthracite sm:text-4xl">
          Safety Data Sheets
        </h1>
        <p className="mt-4 text-lg text-brand-anthracite/70 max-w-2xl mx-auto">
          Complete GHS documentation for all products. View hazard pictograms, statements, and download PDF versions.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sdsList.map((sds) => (
          <div key={sds.productId} className="group">
            <Link 
              href={`/sds/${sds.productId}`}
              className="block rounded-2xl border border-brand-border p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-brand-light"
            >
              <h3 className="font-bold text-brand-anthracite text-xl mb-2">
                {sds.productName}
              </h3>
              <p className="text-sm text-brand-anthracite/70 mb-3">
                View GHS summary & download PDF
              </p>
              <span className="inline-flex items-center gap-1 text-brand-mint text-sm font-medium">
                View SDS →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


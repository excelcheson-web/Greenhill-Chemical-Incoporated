import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="relative h-16 w-32 mb-4">
              <Image
                src="/images/greenhills-logo.png"
                alt="Greenhills Chemicals"
                fill
                className="object-contain opacity-10 grayscale"
              />
            </div>
            <p className="text-sm mb-4">
              Greenhills Product Bldg, M.L Quezon St. Casuntingan,<br />
              Mandaue City, Cebu, Philippines
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/supply-chain" className="text-sm hover:text-brand-mint transition-colors">Supply Chain</Link></li>
              <li><Link href="/sds" className="text-sm hover:text-brand-mint transition-colors">Safety Data Sheets</Link></li>
              <li><Link href="/about" className="text-sm hover:text-brand-mint transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-brand-mint transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Compliance</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm hover:text-brand-mint transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-brand-mint transition-colors">Terms of Service</Link></li>
              <li><Link href="/certifications" className="text-sm hover:text-brand-mint transition-colors">ISO Certification</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Copyright */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <p className="text-sm mb-4">+63 962 502 1374</p>
            <p className="text-sm mb-6">info@greenhillschemicals.ph</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm md:flex md:justify-between md:items-center">
          <p>&copy; 2026 Greenhills Chemicals. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-6 justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-brand-mint transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-mint transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { footerContact, footerLinks } from '../../services/content';

export function Footer() {
  return (
    <footer className="px-2 pb-6 pt-4 md:px-3 md:pb-8 md:pt-6">
      <div className="mx-auto max-w-layout rounded-block bg-[#050607] px-5 py-10 text-white md:px-10 md:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-4xl font-semibold tracking-tight">Life of Pai</h3>
            <p className="mt-4 text-sm text-white/70">Travel stories for couples balancing work and adventure.</p>
            <p className="mt-5 text-sm text-white/80">• {footerContact.address}</p>
            <p className="mt-2 text-sm text-white/80">• {footerContact.phone}</p>
          </div>

          <nav className="flex flex-wrap gap-7 text-sm text-white/85">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-9 border-t border-white/20 pt-5 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Life of Pai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

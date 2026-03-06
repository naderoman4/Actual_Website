import Link from 'next/link';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/groupe-actual/' },
  { label: 'Instagram', href: 'https://instagram.com/groupeactual/' },
  { label: 'YouTube', href: 'https://youtube.com/channel/UCPZyYWHRGq9fFAO9bjcmVhA' },
  { label: 'X (Twitter)', href: 'https://twitter.com/GroupeACTUAL' },
  { label: 'Facebook', href: 'https://facebook.com/GroupeActual/' },
];

export default function Footer() {
  return (
    <footer className="bg-actual-dark text-white">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-actual-red rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Actual Sport</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Dans le sport comme en entreprise,<br />
              la réussite se fait en équipe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/40">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/engagement" className="block text-white/70 hover:text-white text-sm transition-colors">Engagement</Link>
              <Link href="/partenariats" className="block text-white/70 hover:text-white text-sm transition-colors">Partenariats Sportifs</Link>
              <Link href="/champions-club" className="block text-white/70 hover:text-white text-sm transition-colors">Actual Champions Club</Link>
              <Link href="/voile" className="block text-white/70 hover:text-white text-sm transition-colors">Voile Team Actual</Link>
              <Link href="/media" className="block text-white/70 hover:text-white text-sm transition-colors">Média</Link>
              <Link href="/actualites" className="block text-white/70 hover:text-white text-sm transition-colors">Actualités</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/40">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>11 rue Emile Brault</p>
              <p>53000 Laval, France</p>
              <p className="mt-3">
                <a href="mailto:guillaume.neronbancel@groupeactual.eu" className="hover:text-white transition-colors">
                  guillaume.neronbancel@groupeactual.eu
                </a>
              </p>
              <p>
                <a href="tel:+33243012034" className="hover:text-white transition-colors">
                  +33 2 43 01 20 34
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs font-medium transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs">&copy; 2025 Actual Sport — by Actual Group</p>
        <div className="flex gap-6 text-xs text-white/40">
          <Link href="/mentions-legales" className="hover:text-white/70 transition-colors">Mentions légales</Link>
          <Link href="/donnees-personnelles" className="hover:text-white/70 transition-colors">Protection des données</Link>
        </div>
      </div>
    </footer>
  );
}

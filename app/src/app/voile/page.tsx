'use client';

import Link from 'next/link';
import ScrollCarousel from '@/components/ScrollCarousel';

const stats = [
  { value: '32m', label: 'Longueur' },
  { value: '23m', label: 'Largeur' },
  { value: '51.7 nds', label: 'Vitesse de pointe' },
  { value: '170 000h', label: 'De construction' },
];

const palmares = [
  'Vainqueur de la Brest Atlantiques 2019',
  'Vainqueur de la Transat Jacques Vabre 2021',
  'Vainqueur de la Route du Rhum 2022',
  "Vainqueur de l'Arkea Ultim Challenge Brest 2024",
];

const courses = [
  { title: "Transat Cafe L'Or", slug: 'transat-cafe-lor' },
  { title: 'Saison 2025', slug: 'saison-2025' },
  { title: 'Saison 2024', slug: 'saison-2024' },
  { title: 'Saison 2023', slug: 'saison-2023' },
  { title: 'Saison 2022', slug: 'saison-2022' },
  { title: 'Saison 2021', slug: 'saison-2021' },
];

const teamMembers = [
  { name: 'Yves Le Blevec', role: 'Directeur' },
  { name: 'Anthony Marchand', role: 'Skipper' },
  { name: 'Sandrine Bertho', role: 'Admin / Logistique' },
  { name: 'Jeremy Place', role: 'Directeur Technique' },
];

export default function VoilePage() {
  return (
    <main className="bg-actual-dark text-white">
      {/* ── BLOC 1 — Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2847] to-actual-dark" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Team Actual
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Depuis plus de 20 ans a la pointe de la course au large
          </p>
        </div>
      </section>

      {/* ── BLOC 2 — Actual et la course au large ── */}
      <section className="section-padding bg-[#0f2847]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Actual et la course au large
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Tout a commence par le hasard d&apos;une rencontre et l&apos;audace
              d&apos;un skipper. En 2001, Yves Le Blevec vient solliciter Actual
              pour l&apos;accompagner sur sa premiere Mini Transat. Il la termine
              premier bizuth.
            </p>
            <p>
              Vingt-quatre ans plus tard, Actual group est acteur majeur de la
              course au large. Le Team Actual est devenu une filiale du groupe :
              18 collaborateurs au service de la performance et de
              l&apos;innovation maritime.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="https://team-actual.fr/histoire"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Decouvrir l&apos;histoire du Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOC 3 — Actual Ultim 4 ── */}
      <section className="section-padding bg-actual-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Actual Ultim 4
          </h2>
          <p className="text-center text-actual-red text-lg md:text-xl font-semibold tracking-wide mb-10">
            Audace &mdash; Innovation &mdash; Performance
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16">
            Le nouveau bateau du Team Actual repousse les limites de
            l&apos;architecture navale. Plus puissant, plus rapide, plus
            innovant : l&apos;Actual Ultim 4 est le plus performant des Ultim
            jamais construit, concu pour dominer les plus grandes courses
            oceanique du globe.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl bg-[#0f2847]/60 border border-white/10"
              >
                <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {s.value}
                </span>
                <span className="text-gray-400 text-sm uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Palmares */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-200">
              Palmares
            </h3>
            <ul className="space-y-3 text-center">
              {palmares.map((item) => (
                <li
                  key={item}
                  className="text-gray-300 text-base md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="https://team-actual.fr/actual-ultim-4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              En savoir plus sur l&apos;Actual Ultim 4
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOC 4 — Les courses (ScrollCarousel) ── */}
      <section className="section-padding bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Les courses
          </h2>
          <ScrollCarousel>
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`https://team-actual.fr/${course.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex-shrink-0 w-72 md:w-80 rounded-2xl bg-[#0f2847] border border-white/10 p-8 flex flex-col items-center justify-center min-h-[200px] text-center transition-transform hover:scale-[1.03]"
              >
                <span className="text-xl md:text-2xl font-bold text-white">
                  {course.title}
                </span>
              </Link>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* ── BLOC 5 — Anthony Marchand — Skipper ── */}
      <section className="section-padding bg-[#0f2847]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Anthony Marchand
          </h2>
          <p className="text-actual-red text-lg font-semibold text-center mb-10">
            Skipper
          </p>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Autodidacte passionne, Anthony Marchand s&apos;est impose dans le
              monde de la course au large par sa determination et son talent. En
              janvier 2023, il devient le plus jeune skipper a prendre le depart
              d&apos;une course en Ultim. En 2024, il boucle sa premiere
              circumnavigation en solitaire, confirmant son statut parmi
              l&apos;elite de la voile oceanque. Il est desormais aux commandes
              de l&apos;Actual Ultim 4.
            </p>
          </div>

          {/* Palmares */}
          <div className="mt-10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
              Palmares
            </h3>
            <p className="text-gray-400 text-center text-base leading-loose">
              3e Transat Cafe L&apos;Or 2025 &middot; 4e Arkea Ultim Challenge
              2024 &middot; 5e Transat Jacques Vabre 2023 &middot; 3e Solitaire
              du Figaro 2019
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://team-actual.fr/skipper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Decouvrir Anthony Marchand
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOC 6 — Le Team Actual ── */}
      <section className="section-padding bg-actual-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Le Team Actual
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-6">
            18 personnes : marins, techniciens, ingenieurs, logisticiens au
            service d&apos;un objectif commun — repousser les limites de la
            performance en course au large.
          </p>
          <blockquote className="border-l-4 border-actual-red pl-6 italic text-gray-400 max-w-3xl mx-auto mb-14 text-base md:text-lg">
            &laquo; Le Team Actual fonctionne comme une Business Unit a part
            entiere du groupe, avec son autonomie, ses objectifs et son exigence
            de resultat. &raquo;
            <span className="block mt-2 not-italic text-sm text-gray-500">
              — Samuel Tual
            </span>
          </blockquote>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-hover rounded-2xl bg-[#0f2847]/60 border border-white/10 p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#0f2847] border-2 border-actual-red mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-actual-red">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://team-actual.fr/anthony-et-le-team"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Decouvrir le Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

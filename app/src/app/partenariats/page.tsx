'use client';

import Link from 'next/link';
import ScrollCarousel from '@/components/ScrollCarousel';

const clubs = [
  { name: 'Stade Toulousain', sport: 'Rugby' },
  { name: 'Stade Lavallois', sport: 'Football' },
  { name: 'OGC Nice', sport: 'Football' },
  { name: 'LOSC', sport: 'Football' },
  { name: 'FC Lorient', sport: 'Football' },
  { name: 'OL Feminin', sport: 'Football' },
  { name: 'SC Bastia', sport: 'Football' },
];

const events = [
  {
    title: 'Journee des partenaires',
    description:
      'Une journee unique pour celebrer nos partenariats et partager des moments forts avec nos clubs.',
    date: 'A venir',
  },
  {
    title: 'Tournoi Actual Cup',
    description:
      'Un tournoi inter-entreprises qui rassemble collaborateurs et passionnes de sport.',
    date: 'A venir',
  },
  {
    title: 'Seminaire Sport & Entreprise',
    description:
      'Quand la performance sportive inspire la performance collective en entreprise.',
    date: 'A venir',
  },
];

const activations = [
  {
    title: 'Animations en agence',
    description:
      'Des activations sportives dans nos agences pour faire vivre la passion du sport au plus pres de nos collaborateurs.',
  },
  {
    title: 'Rencontres avec les clubs',
    description:
      'Des moments privilegies entre nos equipes et les sportifs professionnels de nos clubs partenaires.',
  },
  {
    title: 'Actions solidaires',
    description:
      'Le sport comme vecteur d\'inclusion et de solidarite, au coeur de nos engagements territoriaux.',
  },
];

const contenus = [
  { title: 'Serie Heritage', description: 'Plongez dans l\'histoire des clubs qui font la fierte de leurs territoires.' },
  { title: 'Le Vestiaire', description: 'Dans les coulisses des clubs, la ou tout se decide.' },
  { title: 'Portraits de Champions', description: 'Rencontrez ceux qui incarnent la performance et le depassement de soi.' },
  { title: 'Actual x Sport', description: 'Les temps forts de nos partenariats en images.' },
  { title: 'Inside Match', description: 'Vivez les jours de match comme si vous y etiez.' },
];

export default function PartenariatsPage() {
  return (
    <main className="min-h-screen">
      {/* ============ BLOC 1 - HERO ============ */}
      <section className="relative bg-actual-dark min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-actual-red font-semibold uppercase tracking-widest mb-4 text-sm">
            Faire equipe ensemble
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Nos partenariats sportifs
          </h1>
          <div className="mt-6 w-20 h-1 bg-actual-red mx-auto rounded-full" />
        </div>
      </section>

      {/* ============ BLOC 2 - LES CLUBS ============ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-actual-dark mb-4">
            Les clubs
          </h2>
          <p className="text-gray-600 max-w-3xl mb-12 text-lg leading-relaxed">
            Dans le travail comme dans le sport, c&apos;est l&apos;engagement qui pousse
            a se depasser. Actual s&apos;engage aupres des clubs qui font vivre le sport
            sur leurs territoires.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clubs.map((club) => (
              <div
                key={club.name}
                className="bg-actual-dark text-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px] card-hover"
              >
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-actual-red bg-actual-red/10 px-3 py-1 rounded-full mb-4">
                    {club.sport}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{club.name}</h3>
                </div>
                <Link
                  href="#"
                  className="mt-4 text-sm font-medium text-actual-red hover:underline inline-flex items-center gap-1"
                >
                  En savoir plus
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 3 - LES EVENEMENTS ============ */}
      <section className="section-padding bg-actual-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Les evenements</h2>
          <p className="text-gray-300 max-w-3xl mb-12 text-lg leading-relaxed">
            Le sport cree des moments qu&apos;on ne vit nulle part ailleurs. Des
            rencontres, des emotions, des experiences partagees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-actual-red">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-3">{event.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 4 - ACTIVATIONS LOCALES ============ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:flex md:items-start md:justify-between md:gap-16 mb-12">
            <div className="md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-actual-dark mb-4">
                Activations locales
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Avec plus de 170 partenariats noues a travers toute la France, Actual
                fait vivre le sport au plus pres des territoires et de ses collaborateurs.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0 text-center">
              <span className="block text-7xl md:text-8xl font-extrabold text-actual-red leading-none">
                170+
              </span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-2 block">
                Partenariats
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activations.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <h3 className="text-xl font-bold text-actual-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 5 - CONTENUS ============ */}
      <section className="section-padding bg-actual-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Contenus</h2>
              <p className="text-gray-400 mt-2 text-lg">
                Retrouvez nos series, reportages et contenus exclusifs.
              </p>
            </div>
            <Link href="/media" className="btn-primary hidden md:inline-flex">
              Tout Voir
            </Link>
          </div>

          <ScrollCarousel>
            {contenus.map((item) => (
              <div
                key={item.title}
                className="min-w-[280px] md:min-w-[340px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-44 bg-gradient-to-br from-actual-red/30 to-actual-dark flex items-center justify-center">
                  <span className="text-white/40 text-sm font-medium uppercase tracking-wider">
                    Media
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </ScrollCarousel>

          <div className="mt-8 text-center md:hidden">
            <Link href="/media" className="btn-primary inline-flex">
              Tout Voir
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

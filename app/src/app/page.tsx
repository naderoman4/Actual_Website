'use client';

import Link from 'next/link';
import ScrollCarousel from '@/components/ScrollCarousel';

const champions = [
  { name: 'Anthony Marchand', sport: 'Voile', slug: 'anthony-marchand', image: '/images/acc-0.png' },
  { name: 'Lou Boisnard', sport: 'Kayak', slug: 'lou-boisnard', image: '/images/acc-1.png' },
  { name: 'Simone Zanoni', sport: 'Chef étoilé', slug: 'simone-zanoni', image: '/images/acc-2.png' },
  { name: 'Axel Alletru', sport: 'Pilote - Parathlète', slug: 'axel-alletru', image: '/images/acc-3.png' },
  { name: 'Tya Zebrowski', sport: 'Surf', slug: 'tya-zebrowski', image: '/images/acc-4.png' },
  { name: 'Joséphine Bayle', sport: 'Course à pied', slug: 'josephine-bayle', image: '/images/acc-5.png' },
  { name: 'Arthur Guérin-Boëri', sport: 'Apnée', slug: 'arthur-guerin-boeri', image: '/images/acc-6.png' },
  { name: 'Jordy Weiss', sport: 'Boxe', slug: 'jordy-weiss', image: '/images/acc-7.png' },
  { name: 'Samuel Durand', sport: 'Réalisateur', slug: 'samuel-durand', image: '/images/acc-8.png' },
];

const mediaItems = [
  { title: 'Série Héritage', description: 'Plongez dans les parcours inspirants de ceux qui repoussent les limites.', image: '/images/home-7.png' },
  { title: 'Le Vestiaire', description: 'Les coulisses du sport et de la performance, sans filtre.', image: '/images/home-8.png' },
  { title: 'Off The Record', description: 'Des conversations intimes avec les acteurs du sport.', image: '/images/home-9.png' },
];

const newsItems = [
  { title: 'Team Actual : cap sur la saison 2026', excerpt: 'Retour sur les ambitions et les défis de la nouvelle saison offshore.', image: '/images/home-10.png', slug: '#' },
  { title: 'Champions Club : de nouveaux talents rejoignent l\'aventure', excerpt: 'Découvrez les athlètes qui intègrent le programme d\'accompagnement.', image: '/images/home-11.png', slug: '#' },
  { title: 'Actual partenaire du sport local', excerpt: 'Un engagement fort auprès des clubs et événements de proximité.', image: '/images/home-12.png', slug: '#' },
];

export default function Home() {
  return (
    <>
      {/* ========== 1. HERO SECTION ========== */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-0.png"
            alt="Actual Sport Hero"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none tracking-tight">
            Faire équipe
            <br />
            <span className="text-actual-red">ensemble</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Dans le sport comme en entreprise, la réussite est collective.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/engagement" className="btn-primary">
              Découvrir notre engagement
            </Link>
            <Link href="/voile" className="btn-outline">
              Le Team Actual
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 2. SAMUEL TUAL QUOTE SECTION ========== */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="w-16 h-1 bg-actual-red mx-auto mb-10" />
          <blockquote className="text-3xl md:text-5xl font-bold text-actual-dark leading-tight">
            &laquo;&nbsp;Dans le sport comme en entreprise, la réussite se fait en équipe.&nbsp;&raquo;
          </blockquote>
          <p className="mt-6 text-lg text-actual-dark/60 font-medium">
            Samuel Tual — Fondateur du Groupe Actual
          </p>
          <Link
            href="/engagement"
            className="inline-block mt-10 btn-primary"
          >
            Lire le manifeste
          </Link>
        </div>
      </section>

      {/* ========== 3. TEAM ACTUAL SECTION ========== */}
      <section className="bg-actual-dark section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/home-1.png"
                alt="Team Actual — Course au large"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-actual-dark/60 to-transparent" />
            </div>
            <div>
              <span className="text-actual-red font-bold uppercase tracking-widest text-sm">
                Course au large
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mt-4 leading-none">
                Team Actual
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Depuis plus de 20 ans, le Team Actual repousse les limites de la course au large.
                De la Class40 à l'Ultim, l'équipe incarne les valeurs du Groupe Actual :
                engagement, performance collective et dépassement de soi.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                Une aventure humaine et sportive hors du commun, portée par des marins d'exception.
              </p>
              <Link href="/voile" className="inline-block mt-8 btn-primary">
                Découvrir le Team Actual
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. PARTENARIATS SECTION ========== */}
      <section className="bg-actual-dark2 section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-actual-red font-bold uppercase tracking-widest text-sm">
              Nos engagements
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mt-4 leading-none">
              Partenariats sportifs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Clubs', description: 'Soutenir les clubs locaux et accompagner la pratique sportive au quotidien.', image: '/images/home-2.png' },
              { title: 'Événements', description: 'Partenaire d\'événements sportifs majeurs à travers toute la France.', image: '/images/home-3.png' },
              { title: 'Activations Locales', description: 'Des actions concrètes au plus près des territoires et des passionnés.', image: '/images/home-4.png' },
            ].map((item) => (
              <Link
                key={item.title}
                href="/partenariats"
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] card-hover block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/70 text-base leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-actual-red font-semibold text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                    Découvrir
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. ACTUAL CHAMPIONS CLUB SECTION ========== */}
      <section className="bg-actual-dark section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="text-actual-red font-bold uppercase tracking-widest text-sm">
                Actual Champions Club
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mt-4 leading-none">
                Accompagner les talents au-delà de la performance
              </h2>
            </div>
            <div>
              <p className="text-lg text-white/70 leading-relaxed">
                L'Actual Champions Club rassemble des athlètes et personnalités
                d'exception autour de valeurs communes : l'engagement, le dépassement de soi
                et l'esprit d'équipe. Un programme unique d'accompagnement humain et professionnel.
              </p>
              <Link href="/champions-club" className="inline-block mt-6 btn-outline">
                Découvrir le Champions Club
              </Link>
            </div>
          </div>
        </div>
        <ScrollCarousel className="px-6">
          {champions.map((athlete) => (
            <Link
              key={athlete.slug}
              href={`/champions-club/${athlete.slug}`}
              className="flex-shrink-0 w-72 md:w-80 group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] card-hover">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-actual-red text-sm font-bold uppercase tracking-wider">
                    {athlete.sport}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {athlete.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </ScrollCarousel>
      </section>

      {/* ========== 6. MÉDIA SECTION ========== */}
      <section className="bg-actual-dark2 section-padding">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-actual-red font-bold uppercase tracking-widest text-sm">
                Contenus
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mt-4 leading-none">
                Média
              </h2>
            </div>
            <Link href="/media" className="btn-outline self-start md:self-auto">
              Tous les contenus
            </Link>
          </div>
        </div>
        <ScrollCarousel className="px-6">
          {mediaItems.map((item) => (
            <Link
              key={item.title}
              href="/media"
              className="flex-shrink-0 w-80 md:w-96 group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video card-hover">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-actual-red/90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ScrollCarousel>
      </section>

      {/* ========== 7. NEWS SECTION ========== */}
      <section className="bg-actual-dark section-padding">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-actual-red font-bold uppercase tracking-widest text-sm">
                À la une
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase mt-4 leading-none">
                Actualités
              </h2>
            </div>
            <Link href="/actualites" className="btn-outline self-start md:self-auto">
              Toutes les actualités
            </Link>
          </div>
        </div>
        <ScrollCarousel className="px-6">
          {newsItems.map((article, i) => (
            <Link
              key={i}
              href={`/actualites/${article.slug}`}
              className="flex-shrink-0 w-80 md:w-96 group"
            >
              <div className="rounded-2xl overflow-hidden bg-actual-dark2 card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-actual-red transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-white/50 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center mt-4 text-actual-red font-semibold text-sm uppercase tracking-wide group-hover:gap-3 gap-2 transition-all">
                    Lire l&apos;article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </ScrollCarousel>
      </section>
    </>
  );
}

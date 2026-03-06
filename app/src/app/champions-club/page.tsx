'use client';

import Link from 'next/link';
import ScrollCarousel from '@/components/ScrollCarousel';

const athletes = [
  { name: 'Anthony Marchand', sport: 'Voile', slug: 'anthony-marchand', link: true },
  { name: 'Lou Boisnard', sport: 'Kayak', slug: 'lou-boisnard', link: true },
  { name: 'Simone Zanoni', sport: 'Chef étoilé', slug: 'simone-zanoni', link: true },
  { name: 'Axel Alletru', sport: 'Pilote - Parathlète', slug: 'axel-alletru', link: true },
  { name: 'Ugo Mola', sport: 'Rugby - Entraîneur', slug: 'ugo-mola', link: false },
  { name: 'Tya Zebrowski', sport: 'Surf', slug: 'tya-zebrowski', link: true },
  { name: 'Joséphine Bayle', sport: 'Course à pied', slug: 'josephine-bayle', link: true },
  { name: 'Arthur Guérin-Boëri', sport: 'Apnée', slug: 'arthur-guerin-boeri', link: true },
  { name: 'Jordy Weiss', sport: 'Boxe', slug: 'jordy-weiss', link: true },
  { name: 'Samuel Durand', sport: 'Réalisateur', slug: 'samuel-durand', link: true },
];

const mediaCategories = [
  {
    title: 'Actual Champions Club Reveals',
    description: 'Vidéos signatures',
  },
  {
    title: 'Talks',
    description: 'Récits personnels',
  },
  {
    title: 'Off The Record',
    description: 'Coulisses de la performance',
  },
];

function AthleteCard({ athlete }: { athlete: (typeof athletes)[number] }) {
  const card = (
    <div className="min-w-[300px] aspect-[3/4] relative rounded-xl overflow-hidden card-hover group/card cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-105"
        style={{ backgroundImage: `url(/images/athletes/${athlete.slug}-0.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold">{athlete.name}</h3>
        <p className="text-white/80 text-sm mt-1">{athlete.sport}</p>
      </div>
    </div>
  );

  if (athlete.link) {
    return (
      <Link href={`/champions-club/${athlete.slug}`} className="flex-shrink-0">
        {card}
      </Link>
    );
  }

  return <div className="flex-shrink-0">{card}</div>;
}

export default function ChampionsClubPage() {
  return (
    <main className="bg-actual-dark text-white">
      {/* BLOC 1 - Hero */}
      <section className="hero-overlay relative min-h-[80vh] flex items-center justify-center text-center bg-black">
        <div className="section-padding max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            ACTUAL CHAMPIONS CLUB
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
            Accompagner les talents au-delà de la performance et faire vivre les valeurs du sport dans le monde du travail
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            L&apos;Actual Champions Club rassemble des leaders inspirants, dont les parcours, les choix et l&apos;état d&apos;esprit résonnent avec les enjeux du travail : discipline, engagement, excellence, transmission.
          </p>
        </div>
      </section>

      {/* BLOC 2 - Une vision assumée */}
      <section className="section-padding bg-actual-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Une vision assumée
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Samuel Tual */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Samuel Tual</h3>
                <p className="text-actual-red font-medium mt-1">Président d&apos;Actual Group</p>
              </div>
              <blockquote className="text-white/70 italic text-lg leading-relaxed flex-1 mb-8">
                &ldquo;Citation à venir...&rdquo;
              </blockquote>
              <Link href="#" className="btn-primary inline-block text-center">
                Lire la tribune
              </Link>
            </div>

            {/* Bruno Sola */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Bruno Sola</h3>
                <p className="text-actual-red font-medium mt-1">CEO d&apos;Actual Network</p>
              </div>
              <blockquote className="text-white/70 italic text-lg leading-relaxed flex-1 mb-8">
                &ldquo;Citation à venir...&rdquo;
              </blockquote>
              <Link href="#" className="btn-outline inline-block text-center">
                Découvrir la vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 - Découvrez l'Actual Champions Club */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Découvrez l&apos;Actual Champions Club
          </h2>
        </div>
        <div className="max-w-[100vw] px-6">
          <ScrollCarousel>
            {athletes.map((athlete) => (
              <AthleteCard key={athlete.slug} athlete={athlete} />
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* BLOC 4 - Média */}
      <section className="section-padding bg-actual-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Média</h2>
        </div>
        <div className="max-w-[100vw] px-6">
          <ScrollCarousel>
            {mediaCategories.map((category) => (
              <div
                key={category.title}
                className="min-w-[350px] md:min-w-[400px] aspect-video relative rounded-xl overflow-hidden card-hover group/media cursor-pointer flex-shrink-0 bg-white/5 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/70">{category.description}</p>
                </div>
              </div>
            ))}
          </ScrollCarousel>
        </div>
      </section>
    </main>
  );
}

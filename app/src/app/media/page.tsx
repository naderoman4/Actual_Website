'use client';

import { useState } from 'react';
import Link from 'next/link';

const formatFilters = ['Photos', 'Vidéos', 'Audio', 'Histoires'];
const themeFilters = [
  'Tous',
  'Voile',
  'Boxe',
  'Running',
  'Apnée',
  'Kayak',
  'Rugby',
  'Football',
  'Actual Champions Club',
  'Team Actual',
];

const featuredContent = {
  main: {
    type: 'Vidéo',
    title: 'Anthony Marchand : Cap sur le Vendée Globe',
    athlete: 'Anthony Marchand',
    sport: 'Voile',
    excerpt:
      'Plongez dans les coulisses de la préparation d\'Anthony Marchand pour le plus grand défi de sa carrière.',
  },
  side: [
    {
      type: 'Photo',
      title: 'Jordy Weiss : L\'intensité du ring',
      athlete: 'Jordy Weiss',
      sport: 'Boxe',
    },
    {
      type: 'Histoire',
      title: 'Lou Boisnard : Le fleuve comme terrain de jeu',
      athlete: 'Lou Boisnard',
      sport: 'Kayak',
    },
  ],
};

const gridItems = [
  { type: 'Photo', title: 'Entraînement à l\'aube', athlete: 'Joséphine Bayle', sport: 'Running' },
  { type: 'Vidéo', title: 'Les secrets de la récupération', athlete: 'Axel Alletru', sport: 'Parathlète' },
  { type: 'Histoire', title: 'Du ring à la vie : parcours d\'un champion', athlete: 'Jordy Weiss', sport: 'Boxe' },
  { type: 'Audio', title: 'Podcast : La voix du large', athlete: 'Anthony Marchand', sport: 'Voile' },
  { type: 'Photo', title: 'Plongée en eau profonde', athlete: 'Arthur Guérin-Boëri', sport: 'Apnée' },
  { type: 'Vidéo', title: 'Jour de match : dans le vestiaire', athlete: 'Stade Toulousain', sport: 'Rugby' },
  { type: 'Histoire', title: 'Tya et l\'océan : une histoire d\'amour', athlete: 'Tya Zebrowski', sport: 'Surf' },
  { type: 'Audio', title: 'Rencontre avec un chef d\'exception', athlete: 'Simone Zanoni', sport: 'Gastronomie' },
  { type: 'Photo', title: 'La descente parfaite', athlete: 'Lou Boisnard', sport: 'Kayak' },
];

const typeBadgeColor: Record<string, string> = {
  Photo: 'bg-blue-500',
  Vidéo: 'bg-actual-red',
  Histoire: 'bg-emerald-600',
  Audio: 'bg-amber-500',
};

const gridHeights = [
  'h-72', 'h-96', 'h-80', 'h-64', 'h-96', 'h-72', 'h-80', 'h-64', 'h-96',
];

export default function MediaPage() {
  const [activeFormat, setActiveFormat] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState('Tous');

  return (
    <main className="bg-white text-actual-dark">
      {/* BLOC 1 - Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center bg-actual-dark">
        <div className="hero-overlay" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            Média
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Des talents, leurs parcours, nos histoires
          </p>
        </div>
      </section>

      {/* BLOC 2 - Filter bar */}
      <section className="section-padding pb-8 md:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Format filters */}
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Format
            </p>
            <div className="flex flex-wrap gap-2">
              {formatFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() =>
                    setActiveFormat(activeFormat === filter ? null : filter)
                  }
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeFormat === filter
                      ? 'bg-actual-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Theme filters */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Thème
            </p>
            <div className="flex flex-wrap gap-2">
              {themeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveTheme(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeTheme === filter
                      ? 'bg-actual-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 3 - À la une */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">À la une</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main featured card */}
            <Link
              href="#"
              className="lg:col-span-2 relative rounded-2xl overflow-hidden card-hover group min-h-[400px] lg:min-h-[500px] bg-gray-200 block"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${typeBadgeColor[featuredContent.main.type]}`}
              >
                {featuredContent.main.type}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/70 text-sm mb-2">
                  {featuredContent.main.athlete} &mdash; {featuredContent.main.sport}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                  {featuredContent.main.title}
                </h3>
                <p className="text-white/80 text-base max-w-xl">
                  {featuredContent.main.excerpt}
                </p>
              </div>
            </Link>

            {/* Side cards */}
            <div className="flex flex-col gap-6">
              {featuredContent.side.map((item) => (
                <Link
                  key={item.title}
                  href="#"
                  className="relative rounded-2xl overflow-hidden card-hover group flex-1 min-h-[200px] bg-gray-200 block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${typeBadgeColor[item.type]}`}
                  >
                    {item.type}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/70 text-sm mb-1">
                      {item.athlete} &mdash; {item.sport}
                    </p>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOC 4 - La grille */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">La grille</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gridItems.map((item, index) => (
              <Link
                key={item.title}
                href="#"
                className={`block relative rounded-2xl overflow-hidden card-hover group bg-gray-200 break-inside-avoid ${gridHeights[index]}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${typeBadgeColor[item.type]}`}
                >
                  {item.type}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-xs mb-1">
                    {item.athlete} &mdash; {item.sport}
                  </p>
                  <h3 className="text-white text-base font-bold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-primary">Charger plus de contenus</button>
          </div>
        </div>
      </section>
    </main>
  );
}

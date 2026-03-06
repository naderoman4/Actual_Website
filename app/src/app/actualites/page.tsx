'use client';

import { useState } from 'react';
import Link from 'next/link';

const categoryFilters = [
  'Toutes',
  'Voile',
  'Rugby',
  'Football',
  'Boxe',
  'Running',
  'Apnée',
  'Kayak',
  'Actual Champions Club',
  'Team Actual',
];

const clubFilters = [
  'Tous',
  'Stade Toulousain',
  'OGC Nice',
  'LOSC',
  'FC Lorient',
  'OL Féminin',
  'SC Bastia',
  'Stade Lavallois',
  'Team Actual',
];

const featuredArticle = {
  category: 'Rugby',
  date: '28 février 2026',
  title: 'Stade Toulousain x Actual : une saison de tous les records',
  excerpt:
    'Retour sur une saison exceptionnelle pour le partenariat entre Actual et le Stade Toulousain. Entre performances sur le terrain et engagements hors des stades, cette collaboration continue de repousser les limites.',
};

const articles = [
  {
    category: 'Voile',
    date: '25 février 2026',
    title: 'Anthony Marchand : le Vendée Globe en ligne de mire',
    excerpt:
      'Le skipper du Team Actual accélère sa préparation pour la grande course au large.',
  },
  {
    category: 'Boxe',
    date: '20 février 2026',
    title: 'Jordy Weiss décroche le titre européen',
    excerpt:
      'Victoire éclatante pour le boxeur de l\'Actual Champions Club lors du championnat d\'Europe à Paris.',
  },
  {
    category: 'Football',
    date: '18 février 2026',
    title: 'OGC Nice : Actual renouvelle son engagement',
    excerpt:
      'Le groupe Actual prolonge son partenariat avec l\'OGC Nice pour trois saisons supplémentaires.',
  },
  {
    category: 'Running',
    date: '15 février 2026',
    title: 'Joséphine Bayle : record personnel sur le marathon',
    excerpt:
      'La coureuse de l\'Actual Champions Club signe un chrono impressionnant à Séville.',
  },
  {
    category: 'Actual Champions Club',
    date: '12 février 2026',
    title: 'Trois nouveaux talents rejoignent le Club',
    excerpt:
      'L\'Actual Champions Club accueille trois athlètes d\'exception pour renforcer sa communauté.',
  },
  {
    category: 'Kayak',
    date: '8 février 2026',
    title: 'Lou Boisnard : objectif Jeux 2028',
    excerpt:
      'La kayakiste française se projette déjà vers Los Angeles avec ambition et détermination.',
  },
];

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [activeClub, setActiveClub] = useState('Tous');

  return (
    <main className="bg-white text-actual-dark">
      {/* BLOC 1 - Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center bg-actual-dark">
        <div className="hero-overlay" />
        <div className="relative z-10 section-padding max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            Actualités
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Toute l&apos;actualité du sport selon Actual
          </p>
        </div>
      </section>

      {/* BLOC 2 - Filter bar */}
      <section className="section-padding pb-8 md:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Catégorie
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveCategory(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === filter
                      ? 'bg-actual-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Club filters */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Club
            </p>
            <div className="flex flex-wrap gap-2">
              {clubFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveClub(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeClub === filter
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

      {/* BLOC 3 - Featured article */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <Link
            href="#"
            className="block relative rounded-2xl overflow-hidden card-hover group min-h-[400px] lg:min-h-[450px] bg-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-actual-red px-3 py-1 rounded-full text-xs font-bold text-white">
                  {featuredArticle.category}
                </span>
                <span className="text-white/60 text-sm">{featuredArticle.date}</span>
              </div>
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 max-w-3xl">
                {featuredArticle.title}
              </h2>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mb-6">
                {featuredArticle.excerpt}
              </p>
              <span className="btn-primary">Lire l&apos;article</span>
            </div>
          </Link>
        </div>
      </section>

      {/* BLOC 4 - Article grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.title}
                href="#"
                className="block bg-white rounded-2xl overflow-hidden card-hover group"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-actual-red px-3 py-1 rounded-full text-xs font-bold text-white">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-actual-dark mb-2 group-hover:text-actual-red transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-actual-red text-sm font-semibold uppercase tracking-wider">
                    Lire &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-primary">Charger plus d&apos;articles</button>
          </div>
        </div>
      </section>
    </main>
  );
}

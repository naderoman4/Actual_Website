'use client';

import Link from 'next/link';
import ScrollCarousel from '@/components/ScrollCarousel';

interface AthleteProfileProps {
  name: string;
  sport: string;
  heroImage: string;
  introText: string;
  bioText: string;
  clubText: string;
  clubValue: string;
  clubQuote: string;
  slug: string;
}

export default function AthleteProfile({
  name,
  sport,
  heroImage,
  introText,
  bioText,
  clubText,
  clubValue,
  clubQuote,
  slug,
}: AthleteProfileProps) {
  const pronoun = ['Lou Boisnard', 'Tya Zebrowski', 'Joséphine Bayle'].includes(name)
    ? 'elle'
    : 'il';

  return (
    <main>
      {/* BLOC 1 - Hero */}
      <section className="relative min-h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 w-full section-padding pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">{sport}</p>
        </div>
      </section>

      {/* BLOC 2 - Intro */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-2xl leading-relaxed text-actual-dark/90">{introText}</p>
        </div>
      </section>

      {/* BLOC 3 - Bio */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-actual-dark/80">{bioText}</p>
        </div>
      </section>

      {/* BLOC 4 - Actual Champions Club */}
      <section className="bg-actual-dark text-white section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            {name} et l&apos;Actual Champions Club
          </h2>

          {/* Two placeholder video/interview cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-xl overflow-hidden card-hover flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-actual-red/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-actual-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Video a venir</p>
              </div>
            </div>
            <div className="aspect-video bg-white/5 border border-white/10 rounded-xl overflow-hidden card-hover flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-actual-red/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-actual-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Interview a venir</p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-white/80 mb-6">{clubText}</p>
            <p className="text-lg leading-relaxed text-white/80 mb-6">
              Au sein de l&apos;Actual Champions Club, {pronoun} incarne{' '}
              <span className="text-actual-red font-semibold">{clubValue}</span>.
            </p>
            <blockquote className="border-l-4 border-actual-red pl-6 text-xl italic text-white/90">
              &ldquo;{clubQuote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* BLOC 5 - En savoir plus */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-actual-dark">En savoir plus</h2>
        </div>
        <div className="max-w-[100vw] px-6">
          <ScrollCarousel>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[350px] bg-gray-50 rounded-xl overflow-hidden card-hover flex-shrink-0 border border-gray-200"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image article {i}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-actual-red font-medium mb-2">Article</p>
                  <h3 className="text-lg font-bold text-actual-dark mb-2">
                    Article a venir
                  </h3>
                  <p className="text-actual-dark/60 text-sm">
                    Contenu a venir concernant {name}.
                  </p>
                </div>
              </div>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* BLOC 6 - Regarder maintenant */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-actual-dark">Regarder maintenant</h2>
        </div>
        <div className="max-w-[100vw] px-6">
          <ScrollCarousel>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[350px] aspect-video bg-actual-dark rounded-xl overflow-hidden card-hover flex-shrink-0 relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-actual-red/20 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-actual-red" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Video {i} a venir</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollCarousel>
        </div>
      </section>
    </main>
  );
}

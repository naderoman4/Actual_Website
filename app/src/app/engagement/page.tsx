import Link from "next/link";

export const metadata = {
  title: "Engagement — Actual Sport",
  description:
    "Chez Actual, nous croyons à la force du collectif. Découvrez nos engagements sportifs, nos valeurs et notre ancrage local.",
};

export default function EngagementPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* BLOC 1 — Hero                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/engagement-hero.jpg')" }}
        />
        <div className="hero-overlay" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight">
            Engagement
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Chez Actual, nous croyons à la force du collectif
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOC 2 — Qui sommes-nous                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-actual-dark mb-12 uppercase tracking-tight">
            Qui sommes-nous
          </h2>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-actual-dark2">
            <p>
              Nous croyons aux sportifs, aux champions d&apos;aujourd&apos;hui
              et aux talents de demain.
            </p>
            <p>
              Nous croyons en ceux qui les aident à s&apos;entraîner, à
              progresser, à remporter des succès, à se relever dans les coups
              durs.
            </p>
            <p>
              Nous croyons en ceux qui les soignent, qui les nourrissent, qui
              les conduisent, qui ouvrent les stades et vérifient les
              équipements.
            </p>
            <p>
              Nous croyons en ceux qui les soutiennent, les applaudissent et les
              acclament dans les stades ou sur les pontons.
            </p>
            <p>
              Nous croyons en tous ceux qui sont aux côtés des sportifs&nbsp;:
              entraîneurs, préparateurs, techniciens, supporters.
            </p>
          </div>

          <div className="mt-12 border-l-4 border-actual-red pl-6">
            <p className="text-xl md:text-2xl font-semibold text-actual-dark leading-snug">
              Car dans toute performance sportive, il y a toujours un travail
              collectif.
            </p>
          </div>

          <p className="mt-16 text-3xl md:text-5xl font-extrabold text-actual-red text-center uppercase tracking-tight">
            Nous voulons faire équipe ensemble.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOC 3 — Le collectif avant tout                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative section-padding bg-actual-dark text-white overflow-hidden">
        {/* Transparent background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/engagement-collectif.jpg')" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 uppercase tracking-tight">
            Le collectif avant tout
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/85">
            <p>
              La performance collective dépasse toujours la somme des talents
              individuels. C&apos;est cette conviction qui guide notre engagement
              dans le sport.
            </p>
            <p>
              Nous ne voulons pas simplement apposer un logo sur un maillot.
              Nous voulons <span className="font-bold text-white">devenir le maillot</span>.
              Faire partie intégrante de l&apos;équipe, partager les victoires
              comme les défaites, vivre le sport de l&apos;intérieur.
            </p>
            <p>
              Être partenaire, pour Actual, c&apos;est s&apos;engager aux côtés
              des athlètes et de ceux qui les entourent, dans la durée, avec la
              même exigence et le même esprit d&apos;équipe.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOC 4 — Les valeurs, pas l'audimat                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-actual-dark mb-10 uppercase tracking-tight">
            Les valeurs, pas l&apos;audimat
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-actual-dark2">
            <p>
              Nous choisissons nos engagements sportifs pour ce qu&apos;ils
              portent, pas pour ce qu&apos;ils rapportent en visibilité. Ce qui
              nous intéresse, ce sont les valeurs&nbsp;:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Effort",
              "Dépassement de soi",
              "Respect",
              "Responsabilité",
              "Courage",
              "Persévérance",
              "Fraternité",
            ].map((value) => (
              <div
                key={value}
                className="bg-white border border-gray-200 rounded-sm px-5 py-4 text-center font-bold text-actual-dark uppercase text-sm tracking-wider shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-actual-dark2">
            Ces valeurs sont celles du sport. Ce sont aussi celles du travail.
            C&apos;est pourquoi elles nous parlent et nous rassemblent.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOC 5 — Un ancrage local                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative section-padding bg-actual-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 uppercase tracking-tight">
            Un ancrage local
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/85">
            <p>
              Actual est présent partout en France, au plus près des territoires.
              Notre engagement sportif reflète cette proximité&nbsp;: nous
              soutenons des clubs, des événements et des athlètes là où nos
              équipes vivent et travaillent.
            </p>
            <p>
              Du rugby au football, de la voile aux sports collectifs, nos
              partenariats s&apos;inscrivent dans une logique de terrain,
              d&apos;ancrage territorial et de lien social. Parce que le sport,
              comme l&apos;emploi, est un formidable vecteur de cohésion locale.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOC 6 — Plonger dans l'univers Actual Sport                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-actual-dark mb-14 uppercase tracking-tight text-center">
            Plonger dans l&apos;univers Actual Sport
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card — Champions Club */}
            <Link href="/champions-club" className="group card-hover block">
              <div className="bg-actual-dark rounded-sm overflow-hidden h-full flex flex-col">
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/card-champions-club.jpg')",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                    Actual Champions Club
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Un collectif de leaders inspirants qui font du travail une
                    chance.
                  </p>
                  <span className="mt-4 inline-flex items-center text-actual-red font-semibold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Découvrir
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Card — Team Actual */}
            <Link href="/voile" className="group card-hover block">
              <div className="bg-actual-dark rounded-sm overflow-hidden h-full flex flex-col">
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/card-team-actual.jpg')",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                    Team Actual
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    20 ans de course au large, à la barre des trimarans les plus
                    rapides du monde.
                  </p>
                  <span className="mt-4 inline-flex items-center text-actual-red font-semibold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Découvrir
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Card — Partenariats sportifs */}
            <Link href="/partenariats" className="group card-hover block">
              <div className="bg-actual-dark rounded-sm overflow-hidden h-full flex flex-col">
                <div
                  className="h-52 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/card-partenariats.jpg')",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
                    Partenariats sportifs
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Rugby, football, activations locales&nbsp;: le sport partout
                    où Actual est présent.
                  </p>
                  <span className="mt-4 inline-flex items-center text-actual-red font-semibold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Découvrir
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

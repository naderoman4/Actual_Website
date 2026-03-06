'use client';

import AthleteProfile from '@/components/AthleteProfile';

export default function SimoneZanoniPage() {
  return (
    <AthleteProfile
      name="Simone Zanoni"
      sport="Chef étoilé"
      heroImage="/images/athletes/simone-zanoni-0.png"
      introText="Né en Lombardie dans une ferme familiale, Simone Zanoni a appris l'exigence avant même d'entrer en cuisine. Chef du restaurant triplement étoilé Gordon Ramsay à Londres à 27 ans, il est aujourd'hui à la tête du George au Four Seasons George V à Paris."
      bioText="Simone grandit en Lombardie où tout se fait maison. À 18 ans, il part à Londres chez Gordon Ramsay. Il prend la tête du restaurant à 27 ans, trois étoiles Michelin. En 2014, il rejoint le Four Seasons George V à Paris. Une étoile Michelin en 2017, une étoile verte en 2024 pour sa cuisine responsable avec un potager de 3 000 m²."
      clubText="Simone ne cuisine pas pour impressionner. Il cuisine parce que chaque détail compte."
      clubValue="l'excellence"
      clubQuote="L'excellence se bâtit dans l'invisible et dans le détail que personne ne remarquera, sauf si on l'omet."
      slug="simone-zanoni"
    />
  );
}

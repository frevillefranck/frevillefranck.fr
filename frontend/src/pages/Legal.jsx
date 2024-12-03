import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function Legal() {
  useScrollToTop();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              1. Informations Générales
            </h2>
            <p className="text-gray-600 mb-4">
              Conformément aux dispositions des articles 6-III et 19 de la Loi
              n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
              numérique, il est précisé aux utilisateurs du site
              www.frevillefranck.fr l'identité des différents intervenants dans
              le cadre de sa réalisation et de son suivi.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">
                <strong>Propriétaire :</strong> Franck Fréville
              </p>
              <p className="mb-2">
                <strong>Adresse :</strong> 9a rue de la justice, 62880
                Vendin-le-vieil
              </p>
              <p className="mb-2">
                <strong>Email :</strong> freville.franck.dev@gmail.com
              </p>
              <p>
                <strong>Responsable de la publication :</strong> Franck Fréville
              </p>
              <p>
                <strong>SIREN :</strong> 930 761 572
              </p>
              <p>
                <strong>SIRET :</strong> 930 761 572 00013
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              2. Hébergement
            </h2>
            <p className="text-gray-600">
              L'hébergement du site est assuré par Hostinger, situé à l'adresse
              suivante :<br />
              Jonavos g. 60C, Kaunas 44192, Lituanie
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              3. Propriété Intellectuelle
            </h2>
            <p className="text-gray-600">
              L'ensemble des contenus présents sur ce site (textes, images,
              vidéos, logos, etc.) est protégé par les lois en vigueur sur la
              propriété intellectuelle. Toute reproduction ou utilisation des
              contenus est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              4. Données Personnelles
            </h2>
            <p className="text-gray-600">
              Ce site ne collecte pas de données personnelles à des fins
              commerciales. Les informations recueillies via le formulaire de
              contact (nom, email, message) sont uniquement utilisées pour
              répondre aux demandes des utilisateurs. Ces informations ne sont
              pas stockées de manière prolongée et ne sont jamais partagées avec
              des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              5. Responsabilité
            </h2>
            <p className="text-gray-600">
              Franck Fréville ne saurait être tenue pour responsable des erreurs
              ou omissions sur le site, de l'indisponibilité temporaire du site,
              ou des dommages directs ou indirects pouvant résulter de
              l'utilisation de ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              6. Liens Hypertextes
            </h2>
            <p className="text-gray-600">
              Le site www.frevillefranck.fr peut contenir des liens vers
              d'autres sites. Franck Fréville n'exerce aucun contrôle sur ces
              sites et ne peut être tenue responsable de leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              7. Modifications
            </h2>
            <p className="text-gray-600">
              Franck Fréville se réserve le droit de modifier les présentes
              mentions légales à tout moment. Les utilisateurs sont invités à
              consulter régulièrement cette page pour prendre connaissance des
              éventuelles modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              8. Droit Applicable
            </h2>
            <p className="text-gray-600">
              Les présentes mentions légales sont régies par le droit français.
              Tout litige relatif à l'utilisation du site sera soumis aux
              tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              9. Cookies
            </h2>
            <p className="text-gray-600">
              Ce site n'utilise aucun cookie à des fins de suivi, de
              personnalisation ou de publicité.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

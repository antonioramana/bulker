import React from 'react';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/NavBar';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">IDEO (BULKER) - CONDITIONS GÉNÉRALES DE VENTE</h1>
        <p className="mb-4">IDEO - 9 route de Turin - 06300 Nice - SIREN : 932 283 633 - Edité le 13/09/2024</p>

        <h2 className="text-xl font-semibold mt-6">1. GÉNÉRALITÉS</h2>
        <p className="mb-4">
          1.1. Les présentes Conditions Générales de Vente (ci-après « CGV ») sont systématiquement
          adressées ou remises à chaque client pour lui permettre de passer commande. En conséquence,
          le fait de passer commande implique l’adhésion entière et sans réserve du client à ces CGV.
        </p>
        <p className="mb-4">1.2. Elles annulent et remplacent toutes les conditions antérieures.</p>
        <p className="mb-4">
          1.3. Toutes conditions contraires qui pourraient être stipulées par l’Acheteur notamment dans
          ses propres conditions générales d’achat sont annulées par les présentes et réputées non
          écrites à notre égard.
        </p>
        <p className="mb-4">
          1.4. Les renseignements figurant sur nos catalogues, notices ou imprimés publicitaires sont
          donnés à titre indicatif sans aucun engagement de notre part.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. TARIFS</h2>
        <p className="mb-4">2.1. Tous nos prix s’entendent hors taxes.</p>
        <p className="mb-4">
          2.2. Les prix peuvent être ajustés à la hausse comme à la baisse quelles qu’en soient les raisons
          (exemples : variations des coûts des matières premières, des prix de l’énergie dont le gasoil,
          etc…) sans avis préalable.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. MODALITÉS DE PAIEMENT</h2>
        <p className="mb-4">3.1. Les factures de IDEO sont payables au comptant, à réception de facture (hors condition spéciale).</p>
        <p className="mb-4">
          3.2. Aucune réclamation ou contestation n’autorise le client à suspendre le paiement de la
          facture.
        </p>
        <p className="mb-4">
          3.3. Seuls les avoirs émis par IDEO peuvent annuler partiellement ou totalement les factures.
        </p>
        <p className="mb-4">3.4. IDEO ne fait pas d’escompte pour paiement anticipé.</p>
        <p className="mb-4">
          3.5. Les premières commandes aux nouveaux clients seront exécutées dès retour approuvé et
          complété par leurs soins de l’imprimé d’ouverture de compte.
        </p>
        <p className="mb-4">
          3.6. IDEO se réserve la possibilité d’exiger le paiement d’avance des produits dans le cas de
          nouveaux clients, de clients ayant précédemment manqué à leurs obligations en matière de
          paiement ou en cas de renseignements financiers faisant apparaître un risque éventuel.
        </p>
        <p className="mb-4">
          3.7. Le non-paiement d'une seule échéance de paiement entrainera immédiatement de plein
          droit l'application :
        </p>
        <ul className="list-disc ml-5 mb-4">
          <li>de pénalités de retard fixées à 10% sur la base de l'intégralité des sommes impayées jusqu'à complet paiement ;</li>
          <li>le paiement de l'indemnité forfaitaire de recouvrement d'un montant de quarante euros conformément à l’article D441-5 du Code de Commerce ;</li>
          <li>la déchéance du terme de toutes les factures, la totalité des sommes dues devenant immédiatement exigible et sans formalités ;</li>
          <li>le paiement de tous les frais occasionnés par le recouvrement des sommes dues et effectivement décaissées par IDEO ;</li>
          <li>la suspension de toutes les commandes en cours et le droit de refuser toute nouvelle commande du client.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. LIVRAISON</h2>
        <p className="mb-4">
          4.1. Les délais de livraison sont donnés à titre indicatif. Les retards de livraison ne donnent à
          l’acheteur le droit d’annuler la vente ou de refuser la marchandise qu’après mise en demeure
          préalable par courrier RAR de l’acheteur resté sans effet 5 jours ouvrés à la date de réception de
          celui-ci. Ils ne peuvent donner lieu à retenue, compensation, pénalité ou dommages et intérêts.
        </p>
        <p className="mb-4">
          4.2. Même dans le cas où un délai de livraison a été accepté par nos soins, nous serons néanmoins
          déchargés de plein droit de toute obligation à cet égard en cas de force majeure ou d’événements
          tels que grèves totales ou partielles, inondations, incendie, actes de guerre etc... entraînant un arrêt
          total ou partiel de nos activités ou des fabrications ou livraisons de nos propres fournisseurs.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. RECLAMATIONS</h2>
        <p className="mb-4">
          5.1. Quelques soient les conditions de vente, les marchandises voyagent aux risques et périls du
          client destinataire. Conformément aux articles L133-1 et suivants du Code de commerce, il
          appartient au client destinataire de faire toutes constatations nécessaires, en présence du
          chauffeur, sur le bordereau du transporteur avant émargement et de confirmer ses réserves par
          acte extrajudiciaire ou par lettre recommandée avec avis de réception auprès du transporteur,
          dans les trois jours, non compris les jours fériés, qui suivent la réception des marchandises. Faute
          pour le client de respecter ce délai toute action contre le transporteur pour avarie ou perte partielle
          sera éteinte. Une copie de ce courrier assortie du bon de livraison concerné devra être adressée
          par LRAR à IDEO dans les cinq jours ouvrés à compter de la réception des marchandises, à défaut
          aucune réclamation ne sera opposable à IDEO.
        </p>
        <p className="mb-4">
          5.2. Sans préjudice des dispositions à prendre vis-à-vis du transporteur, les réclamations sur les
          vices apparents ou sur la non-conformité du produit livré au produit commandé ou au bordereau
          d'expédition, doivent être formulées par écrit dans les cinq jours ouvrés de l'arrivée des produits.
          Toute livraison qui n'aurait pas fait l'objet de réclamation dans ce délai sera réputée conforme et ne
          pourra faire l'objet d'aucune réclamation ultérieure.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. DROIT DE PROPRIÉTÉ</h2>
        <p className="mb-4">
          Les marchandises livrées restent la propriété de IDEO jusqu’au paiement intégral de la totalité du
          montant dû (le montant de base majoré des intérêts moratoires et les frais engagés pour obtenir le
          paiement de la facture), même si les marchandises ont déjà été traitées.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. PROPRIÉTÉ INTELLECTUELLE</h2>
        <p className="mb-4">
          L’acheteur et les sous-traitants ou les clients de l’acheteur ne disposeront pas du droit, en vertu du
          contrat de vente, de copier, réparer, réviser ou reconstituer, ni de faire copier, réparer, réviser ou
          reconstituer les stocks livrés sans le consentement écrit au préalable par IDEO.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. CONFIDENTIALITÉ</h2>
          <p className="mb-4">
            8.1. Sauf indication contraire par écrit par IDEO, tous les renseignements qui portent, de quelque manière que ce soit,
            sur les documents techniques ou commerciaux, les échantillons fournis ou transférés, seront confidentiels, sans
            tenir compte du fait que ces renseignements aient été marqués ou identifiés comme confidentiels par IDEO.
          </p>
          <p className="mb-4">
            8.2. L'acheteur accepte que tous les renseignements confidentiels qu’il a reçus de IDEO, seront gardés comme
            strictement confidentiels, et ne seront utilisés à d’autres fins. L'acheteur ne permettra pas que les renseignements
            soient reproduits, communiqués ou utilisés de quelque façon que ce soit, en totalité ou en partie, en rapport avec les
            services ou les marchandises fournis à d'autres, sans le consentement préalable écrit de IDEO. L'acheteur consent à une
            obligation de confidentialité de la part des employés, des agents, des sous-traitants et des fournisseurs de l'acheteur.
          </p>
          <p className="mb-4">
            8.3. L'obligation de confidentialité se maintiendra pendant toute la période de l’exécution du contrat de vente et sera
            maintenue pendant trois ans.
          </p>
          <h2 className="text-xl font-semibold mt-6">9. COMPÉTENCE JURIDIQUE</h2>
          <p className="mb-4">
            En cas de contestation entre les parties, le Tribunal compétent sera celui du siège social de la société IDEO.
          </p>

      </main>

      <Footer />
    </div>
  );
};

export default Terms;

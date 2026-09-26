import { MusicalInstrument } from '../types/music';

export const INSTRUMENTS_DATA: MusicalInstrument[] = [
  {
    id: 'piano',
    name: 'Piano à queue de concert',
    category: 'cordophone',
    subcategory: 'Cordes frappées par marteaux avec clavier',
    originRegion: 'Florence (Italie)',
    approximateDate: 'Vers 1698 - 1700',
    ancestors: ['Monocorde', 'Tympanon', 'Clavicorde', 'Clavecin'],
    inventorOrLuthier: 'Bartolomeo Cristofori (gardien des instruments du prince Ferdinand de Médicis)',
    materials: [
      'Épicéa de résonance (Val di Fiemme)',
      'Acier à haute résistance et cuivre pour cordes filées',
      'Fonte d\'acier pour le cadre monobloc',
      'Feutre de laine mérinos pressé pour les marteaux',
      'Ébène et ivoire (aujourd\'hui composites) pour les touches'
    ],
    soundMechanism: 'Une touche enfoncée par le doigt actionne un système de leviers articulés propulsant un marteau de feutre contre une corde métallique, puis s\'échappe pour la laisser vibrer librement avant qu\'un étouffoir ne vienne l\'amortir.',
    soundChain: [
      'Touche du clavier (bras de levier premier)',
      'Pilote et chevalet de mécanique',
      'Levier d\'échappement (libération du marteau avant l\'impact)',
      'Marteau en feutre haute densité',
      'Corde en acier tendue sous 70 à 90 kg de tension',
      'Vibration transversale transmise au chevalet',
      'Table d\'harmonie en épicéa (amplificateur acoustique 3D)',
      'Ondes acoustiques propagées dans l\'air',
      'Oreille humaine'
    ],
    anatomy: [
      {
        name: 'Clavier (88 touches)',
        location: 'Avant de l\'instrument',
        material: 'Bois d\'épicéa équilibré au plomb, placage acrylique ou ébène',
        acousticRole: 'Interface mécanique permettant au pianiste de doser la vitesse d\'impact du marteau.'
      },
      {
        name: 'Mécanisme d\'échappement',
        location: 'Au-dessus de l\'arrière des touches',
        material: 'Charpente en bois dur, ressorts en acier, coussinets en cuir',
        acousticRole: 'Désolidarise le marteau de la touche juste avant la frappe, évitant que le marteau ne bloque la corde en restant appuyé.'
      },
      {
        name: 'Marteaux',
        location: 'Face aux cordes',
        material: 'Noyau en bois léger entouré de feutre de laine vierge compressé',
        acousticRole: 'Transfère l\'énergie cinétique à la corde. La dureté du feutre détermine la richesse en harmoniques aiguës.'
      },
      {
        name: 'Cordes (acier et cuivre)',
        location: 'Horizontales sur le cadre',
        material: 'Acier tréfilé pour les aiguës, acier filé de fil de cuivre pour les graves',
        acousticRole: 'Source vibratoire primaire générant la fréquence fondamentale et le spectre harmonique.'
      },
      {
        name: 'Chevalet',
        location: 'Collé sur la table d\'harmonie sous les cordes',
        material: 'Hêtre massif ou érable dur',
        acousticRole: 'Pont conducteur indispensable transmettant l\'énergie vibratoire des cordes à la table d\'harmonie.'
      },
      {
        name: 'Table d\'harmonie',
        location: 'Sous l\'ensemble des cordes, sur toute la caisse',
        material: 'Lames d\'épicéa de résonance à cernes de croissance serrés et réguliers',
        acousticRole: 'Haut-parleur naturel de l\'instrument ; sans elle, la vibration d\'une corde dans l\'air est quasi inaudible.'
      },
      {
        name: 'Cadre en fonte',
        location: 'Structure supérieure porteuse',
        material: 'Fonte grise moulée d\'un seul bloc',
        acousticRole: 'Supporte la tension colossale cumulée des 230 cordes (environ 18 à 20 tonnes).'
      },
      {
        name: 'Étouffoirs et Pédales',
        location: 'Au-dessus des cordes et au niveau des pieds',
        material: 'Feutre souple monté sur tiges de laiton commandées par tringles',
        acousticRole: 'La pédale forte lève tous les étouffoirs d\'un coup, libérant la résonance par sympathie de toutes les cordes.'
      }
    ],
    culturalRole: 'Roi incontesté des instruments occidentaux, instrument de composition par excellence de Mozart, Beethoven, Chopin et Liszt.',
    historicalEvolution: 'Parti du « gravicembalo col piano e forte » de Cristofori avec marteaux en cuir, renforcé au XIXe siècle par les cadres métalliques d\'Alpheus Babcock et Steinway & Sons pour satisfaire les grandes salles de concert.',
    descendantsOrVariants: ['Piano droit', 'Piano numérique', 'Clavier arrangeur', 'Rhodes & Wurlitzer'],
    relatedTopics: ['Bartolomeo Cristofori', 'Frédéric Chopin', 'Johann Sebastian Bach', 'Acoustique du piano', 'Tempérament égal']
  },
  {
    id: 'violon',
    name: 'Violon classique & baroque',
    category: 'cordophone',
    subcategory: 'Cordes frottées par archet à manche libre',
    originRegion: 'Crémone et Brescia (Italie du Nord)',
    approximateDate: 'Début du XVIe siècle (vers 1530)',
    ancestors: ['Rebec médiéval', 'Vielle à archet', 'Lira da braccio'],
    inventorOrLuthier: 'Andrea Amati, puis perfectionné par Antonio Stradivari et Giuseppe Guarneri del Gesù',
    materials: [
      'Épicéa pour la table d\'harmonie et l\'âme',
      'Érable ondé pour le fond, les éclisses et le manche',
      'Ébène pour la touche, le sillet, le cordier et les chevilles',
      'Crins de cheval de Mongolie pour l\'archet',
      'Boyau de mouton ou âme synthétique filée argent/aluminium pour les cordes'
    ],
    soundMechanism: 'L\'archet garni de crins enduits de colophane accroche et relâche continuellement la corde par friction (phénomène de stick-slip d\'Helmholtz), créant une oscillation en onde en dents de scie transmise au corps via le chevalet.',
    soundChain: [
      'Archet et crins enduits de résine (colophane)',
      'Friction adhésive et glissement sur la corde (stick-slip)',
      'Vibration en onde triangulaire de la corde',
      'Chevalet taillé en érable (filtre et pivot oscillant)',
      'Âme en épicéa (transmetteur vers le fond)',
      'Barre d\'harmonie (répartiteur longitudinal sous la table)',
      'Table en épicéa et fond en érable (résonateurs couplés)',
      'Air intérieur expulsé par les ouïes en "f"',
      'Rayonnement spatial vers l\'oreille'
    ],
    anatomy: [
      {
        name: 'L\'Âme (anima)',
        location: 'Cylindre vertical coincé à l\'intérieur, sous le pied droit du chevalet',
        material: 'Épicéa sélectionné au millimètre près',
        acousticRole: 'Le cœur acoustique du violon. Transmet la vibration de la table vers le fond et couple les deux faces.'
      },
      {
        name: 'Le Chevalet',
        location: 'Posé perpendiculairement sur la table entre les ouïes',
        material: 'Érable dur non verni',
        acousticRole: 'Soutient la tension des cordes et transforme leur vibration latérale en bascule verticale.'
      },
      {
        name: 'Les Ouïes en "f"',
        location: 'Deux ouvertures symétriques sur la table',
        material: 'Découpes minutieuses dans l\'épicéa',
        acousticRole: 'Permettent à la table de fléchir librement et agissent comme résonateur de Helmholtz pour les basses fréquences.'
      },
      {
        name: 'La Barre d\'harmonie',
        location: 'Collée sous la table d\'harmonie le long de la corde de sol',
        material: 'Épicéa taillé en courbe progressive',
        acousticRole: 'Renforce la table contre la pression du chevalet et propage les basses fréquences sur toute la longueur.'
      },
      {
        name: 'Le Manche et la Touche',
        location: 'Prolongement supérieur de la caisse',
        material: 'Érable avec touche en ébène sans frettes',
        acousticRole: 'Support où les doigts raccourcissent la corde pour changer continuellement la hauteur.'
      },
      {
        name: 'L\'Archet',
        location: 'Baguette tenue en main droite',
        material: 'Bois de pernambouc (Brésil), crins d\'étalon, hausse en ébène',
        acousticRole: 'Moteur dynamique. La colophane assure la micro-adhérence indispensable pour faire entrer la corde en résonance.'
      }
    ],
    culturalRole: 'Pilier absolu de la musique d\'orchestre et de chambre, virtuose étourdissant avec Niccolò Paganini.',
    historicalEvolution: 'Le violon baroque (cordes en boyau, manche droit, archet convexe) s\'est transformé au XIXe siècle en violon moderne (manche renversé plus long, touche allongée, tension doublée, archet concave de Tourte) pour dominer les salles philharmoniques.',
    descendantsOrVariants: ['Alto', 'Violoncelle', 'Contrebasse', 'Violon électrique'],
    relatedTopics: ['Antonio Stradivari', 'Acoustique du violon', 'Niccolò Paganini', 'Lois de Mersenne']
  },
  {
    id: 'oud',
    name: 'Oud oriental (Luth arabe)',
    category: 'cordophone',
    subcategory: 'Cordes pincées au plectre à caisse bombée et manche court sans frettes',
    originRegion: 'Mésopotamie antique et Perse, perfectionné en Arabie et en Andalousie',
    approximateDate: 'Forme moderne fixée au VIIe - IXe siècle',
    ancestors: ['Barbat perse', 'Luth mésopotamien antique'],
    inventorOrLuthier: 'Popularisé et perfectionné à Bagdad puis à Cordoue par le maître Ziryab (IXe siècle)',
    materials: [
      'Bois précieux variés pour la caisse : noyer, palissandre, érable ou cyprès assemblés en côtes',
      'Épicéa ou cèdre pour la table d\'harmonie',
      'Ébène ou os pour les rosettes ajourées',
      'Boyau naturel ou nylon avec filé métal pour les doubles cordes',
      'Plume d\'aigle (ou corne/plastique) pour le plectre (risha)'
    ],
    soundMechanism: 'Les cordes pincées par la risha transmettent leur onde à une table très fine percée d\'une grande rosace et de deux petites, amplifiée par la caisse voûtée demi-poire.',
    soundChain: [
      'Plectre souple (Risha en plume d\'aigle ou corne)',
      'Pincement des choeurs de cordes doubles',
      'Chevalet collé directement sur la table',
      'Table d\'harmonie en épicéa très mince (2 mm)',
      'Rosaces sculptées (shamsiyyat) régulant l\'échappement de l\'air',
      'Caisse bombée en côtes assemblées (qas\'a)',
      'Onde sonore chaleureuse et boisée rayonnée'
    ],
    anatomy: [
      {
        name: 'La Caisse bombée (Al-Qas\'a)',
        location: 'Dos de l\'instrument',
        material: '15 à 23 côtes de bois cintrées à chaud (palissandre, érable, cyprès)',
        acousticRole: 'Volume de résonance parabolique éliminant les ondes stationnaires d\'angle et donnant un son riche et profond.'
      },
      {
        name: 'La Table d\'harmonie (Al-Wajh)',
        location: 'Face avant',
        material: 'Épicéa léger ou cèdre non verni',
        acousticRole: 'Très réactive, elle vibre au moindre effleurement et projette le timbre intimiste du maqâm.'
      },
      {
        name: 'Les Rosaces ajourées (Shamsiyyat)',
        location: 'Une grande centrale et deux petites supérieures',
        material: 'Bois sculpté ou os en filigrane géométrique',
        acousticRole: 'Évent acoustique permettant la respiration de la caisse tout en conservant la rigidité de la table.'
      },
      {
        name: 'Le Manche sans frettes',
        location: 'Entre la caisse et le chevillier',
        material: 'Bois dur plaqué d\'ébène',
        acousticRole: 'Absence totale de frettes : indispensable pour réaliser les glissandi (zahlafa) et les quarts de ton subtils du maqâm.'
      },
      {
        name: 'Le Chevillier incliné',
        location: 'Sommet du manche à 45-70 degrés',
        material: 'Bois dur avec chevilles coniques en buis ou ébène',
        acousticRole: 'L\'angle prononcé augmente la pression des cordes sur le sillet supérieur sans nécessiter de mécanisme métallique lourd.'
      }
    ],
    culturalRole: '« Sultan des instruments » dans toute la musique arabe, instrument théorique d\'Al-Farabi et symbole de la poésie andalouse.',
    historicalEvolution: 'À l\'origine doté de 4 cordes correspondant aux 4 humeurs de la médecine antique, Ziryab lui ajouta une 5e corde rouge au centre symbolisant l\'âme, et remplaça le plectre de bois par une plume d\'aigle.',
    descendantsOrVariants: ['Luth européen de la Renaissance', 'Oud turc', 'Oud irakien de Munir Bashir', 'Kuitra maghrébine'],
    relatedTopics: ['Ziryab', 'Al-Farabi', 'Le Maqâm', 'Musique arabo-andalouse']
  },
  {
    id: 'guembri',
    name: 'Guembri / Sintir (Basse sacrée Gnawa)',
    category: 'cordophone',
    subcategory: 'Luth-tambour à manche rond et peau tendue',
    originRegion: 'Maroc (Essaouira, Marrakech) et Afrique subsaharienne soudano-sahélienne',
    approximateDate: 'Patrimoine séculaire transmis par les confréries Gnawa',
    ancestors: ['Tidinit mauritanien', 'Ngoni sahélien mandingue'],
    inventorOrLuthier: 'Maâlems (maîtres luthiers et officiants spirituels gnawas)',
    materials: [
      'Tronc de noyer ou peuplier monoxyle (creusé d\'une seule pièce)',
      'Peau de cou de dromadaire tannée',
      'Boyaux de chèvre torsadés pour les 3 cordes',
      'Manche cylindrique en bois dur traversant la caisse',
      'Feuille de tôle avec anneaux de fer pour le hochet (sarsar)'
    ],
    soundMechanism: 'L\'officiant (Maâlem) frappe la peau de la paume et du pouce tout en pinçant les cordes avec l\'index et l\'ongle, créant simultanément une ligne de basse profonde et une pulsation percussive de tambour, doublée du bourdonnement métallique du sarsar.',
    soundChain: [
      'Frappe percussive de l\'ongle et de la pulpe sur les cordes en boyau',
      'Impact simultané du pouce sur la peau de dromadaire',
      'Chevalet rudimentaire reposant directement sur la membrane élastique',
      'Cavité allongée creusée dans le bois plein',
      'Vibration du sarsar métallique planté en bout de manche',
      'Transe acoustique aux fréquences sous-basses enveloppantes'
    ],
    anatomy: [
      {
        name: 'La Caisse monoxyle',
        location: 'Corps de l\'instrument',
        material: 'Tronc d\'arbre (peuplier, noyer ou acajou) évidé à la gouge',
        acousticRole: 'Cavité ovoïde résonatrice produisant des harmoniques chaudes et des basses fréquences percutantes.'
      },
      {
        name: 'La Table en peau de dromadaire',
        location: 'Face supérieure',
        material: 'Peau de cou de dromadaire tannée et clouée encore humide',
        acousticRole: 'Combine la fonction d\'une table de luth et d\'une membrane de tambour (percussion intégrée).'
      },
      {
        name: 'Les Cordes en boyau de chèvre',
        location: '3 cordes (deux longues et un chanterelle courte)',
        material: 'Boyaux de chèvre séchés et torsadés à la main',
        acousticRole: 'Procurent un son rond, mat, percussif et hypnotique sans sustain métallique brillant.'
      },
      {
        name: 'Le Sarsar (hochet métallique)',
        location: 'Enfoncé à l\'extrémité du manche',
        material: 'Tige de fer plat garnie de petits anneaux métalliques mobiles',
        acousticRole: 'Vibre par sympathie à chaque coup de basse, ajoutant un timbre crépitant sacré caractéristique.'
      }
    ],
    culturalRole: 'Instrument central et sacré des cérémonies nocturnes de la Lila Gnawa, réputé soigner les âmes et dialoguer avec les esprits (Mloulk).',
    historicalEvolution: 'Créé par les esclaves noirs déportés au Maroc à travers le Sahara, mariant les souvenirs de la kora et du ngoni avec les traditions berbères et arabes du Maghreb.',
    descendantsOrVariants: ['Hajhouj', 'Guembri des musiciens Chaabi et Aïta', 'Gimbri moderne à micro piézoélectrique'],
    relatedTopics: ['Mahmoud Guinia', 'Musiques du Maroc & Amazigh', 'Physique du timbre et bourdon']
  },
  {
    id: 'kora',
    name: 'Kora mandingue (Harpe-luth africaine)',
    category: 'cordophone',
    subcategory: 'Harpe-luth à 21 cordes sur calebasse',
    originRegion: 'Afrique de l\'Ouest (Sénégal, Gambie, Mali, Guinée - ancien Empire du Mali)',
    approximateDate: 'XVIe - XVIIe siècle (légende de la grotte de Kansala)',
    ancestors: ['Harpe arquée africaine', 'Bolon', 'Donso ngoni'],
    inventorOrLuthier: 'Familles légendaires de griots (Kouyaté, Diabaté, Cissokho)',
    materials: [
      'Grande calebasse hémisphérique évidée',
      'Peau de vache ou de biche tannée tendue par des clous de tapissier',
      'Bois de rose ou ven (Guibourtia) pour le manche et le chevalet',
      'Fil de pêche en nylon de différents diamètres pour les 21 cordes',
      'Anneaux de cuir (konso) ou mécaniques de guitare pour l\'accordage'
    ],
    soundMechanism: 'Le musicien tient les deux poignées latérales en bois avec les doigts du milieu, laissant pouces et index libres pour pincer les cordes disposées en deux rangées verticales parallèles de chaque côté d\'un haut chevalet cranté.',
    soundChain: [
      'Pouces et index pinçant les 21 cordes',
      'Chevalet vertical cranté fendant l\'espace acoustique',
      'Transmission perpendiculaire de la force à la peau de vache',
      'Calebasse géante servant de caisse sphérique de résonance',
      'Évent acoustique latéral rond',
      'Son cristallin de harpe mêlé au rebond percussif africain'
    ],
    anatomy: [
      {
        name: 'La Calebasse hémisphérique',
        location: 'Arrière de l\'instrument',
        material: 'Fruit géant de calebasse séché et coupé en deux',
        acousticRole: 'Cavité de résonance naturelle profonde d\'un demi-mètre de diamètre.'
      },
      {
        name: 'Le Chevalet vertical',
        location: 'Posé perpendiculairement sur la peau',
        material: 'Bois dur plat muni de crans bilatéraux',
        acousticRole: 'Sépare les cordes en deux plans : 11 cordes pour la main gauche (basses), 10 pour la main droite (aigus).'
      },
      {
        name: 'Les Tiges de préhension (barres manuelles)',
        location: 'Deux bâtons parallèles de chaque côté du manche',
        material: 'Bois dur poli',
        acousticRole: 'Permettent aux trois derniers doigts de stabiliser l\'instrument pour libérer pouces et index dans des polyphonies complexes.'
      },
      {
        name: 'L\'Évent sonore',
        location: 'Sur le côté de la calebasse',
        material: 'Orifice circulaire découpé dans la peau et la coque',
        acousticRole: 'Projette les ondes acoustiques vers l\'auditeur et sert parfois de tirelire pour les offrandes aux griots.'
      }
    ],
    culturalRole: 'Voix des griots (Jalis), dépositaires de l\'histoire orale des dynasties mandingues et des traités de paix.',
    historicalEvolution: 'Autrefois équipée de boyaux d\'antilope et accordée par des lanières de cuir tressées (konso), la kora a adopté les cordes en nylon dans les années 1960 et les mécaniques de guitare pour jouer avec les orchestres symphoniques du monde entier.',
    descendantsOrVariants: ['Gravikora (version électroacoustique moderne)', 'Kora à 22 ou 32 cordes'],
    relatedTopics: ['Toumani Diabaté', 'Afrique subsaharienne', 'Polyrythmie et harpes']
  },
  {
    id: 'flute-traversiere',
    name: 'Flûte traversière de concert',
    category: 'aerophone',
    subcategory: 'Flûte à biseau sans conduit à trous latéraux et clétage Boehm',
    originRegion: 'Europe (perfectionnée à Munich et Paris au XIXe siècle)',
    approximateDate: 'Système moderne conçu en 1832 et 1847',
    ancestors: ['Flûte en os aurignacienne', 'Dizi chinois', 'Flûte traversière baroque en bois (traverso)'],
    inventorOrLuthier: 'Theobald Boehm (orfèvre, flûtiste et acousticien bavarois)',
    materials: [
      'Argent massif 925, or ou maillechort argenté',
      'Tampons en baudruche et feutre sous les clés',
      'Ressorts en acier ou or blanc pour le clétage',
      'Bouchon en liège à l\'extrémité de la tête'
    ],
    soundMechanism: 'Le souffle du musicien est projeté contre l\'arête tranchante du trou d\'embouchure (biseau). Le jet d\'air oscille alternativement vers l\'intérieur et l\'extérieur du tube, créant des tourbillons périodiques qui excitent la colonne d\'air stationnaire.',
    soundChain: [
      'Jet d\'air laminaire produit par les lèvres du flûtiste',
      'Fractionnement du flux sur le biseau tranchant de l\'embouchure',
      'Création d\'un tourbillon oscillant (effet hydrodynamique)',
      'Couplage avec la colonne d\'air interne du tube cylindrique',
      'Établissement d\'une onde stationnaire avec nœuds et ventres de pression',
      'Ouverture de clés de Boehm raccourcissant la longueur acoustique',
      'Émission d\'un son pur et brillant riche en harmoniques paires'
    ],
    anatomy: [
      {
        name: 'L\'Embouchure et la Plaque de lèvres',
        location: 'Sur la tête de l\'instrument',
        material: 'Argent ou or ciselé avec trou ovale au biseau aiguisé',
        acousticRole: 'Générateur acoustique. La forme et l\'angle du biseau déterminent l\'attaque, la netteté et la projection du son.'
      },
      {
        name: 'Le Corps et le Clétage de Boehm',
        location: 'Section centrale cylindrique',
        material: 'Tube métallique de 19 mm de diamètre interne percé de trous de large diamètre',
        acousticRole: 'Le système de tringles et plateaux permet à 9 doigts de boucher des trous acoustiquement parfaits et impossibles à couvrir à la main.'
      },
      {
        name: 'La Patte (d\'ut ou de si)',
        location: 'Extrémité inférieure de la flûte',
        material: 'Tube court prolongeant le corps avec 3 ou 4 clés supplémentaires',
        acousticRole: 'Descend la tessiture jusqu\'au Si grave et modifie subtilement la résonance des harmoniques aiguës.'
      }
    ],
    culturalRole: 'L\'un des solistes les plus virtuoses de l\'orchestre symphonique, célèbre pour le son pastoral du *Prélude à l\'après-midi d\'un faune* de Debussy.',
    historicalEvolution: 'Passage du traverso en bois à 1 seule clé de Jean Hotteterre à la flûte tout métal à perce cylindrique et trous béants calculés scientifiquement par Theobald Boehm au milieu du XIXe siècle.',
    descendantsOrVariants: ['Piccolo', 'Flûte alto en sol', 'Flûte basse', 'Flûte de pan', 'Ney oriental'],
    relatedTopics: ['Physique des ondes stationnaires', 'Claude Debussy', 'Theobald Boehm']
  },
  {
    id: 'theremin',
    name: 'Thérémine & Synthétiseur analogique',
    category: 'electrophone',
    subcategory: 'Instruments électroniques à oscillateurs et radiofréquences',
    originRegion: 'Russie (Saint-Pétersbourg) pour le thérémine, USA (Trumansburg) pour Moog',
    approximateDate: '1919 (Thérémine) / 1964 (Synthétiseur Moog)',
    ancestors: ['Télégraphe', 'Télharmonium de Thaddeus Cahill (1897)', 'Ondes Martenot (1928)'],
    inventorOrLuthier: 'Lev Sergueïevitch Termen (Léon Thérémine) et Dr. Robert Moog',
    materials: [
      'Circuits électroniques à lampes triodes ou transistors au silicium',
      'Antennes en laiton ou acier nickelé',
      'Boîtier en bois précieux (noyer ou palissandre)',
      'Haut-parleurs électrodynamiques'
    ],
    soundMechanism: 'Pour le thérémine : détection capacitive sans contact physique. Deux oscillateurs haute fréquence inaudibles interfèrent ; le rapprochement de la main du musicien modifie la capacité du circuit et produit par hétérodynage un son audible dans l\'enceinte.',
    soundChain: [
      'Champ électrostatique entourant les antennes',
      'Capacité électrique corporelle du musicien modifiant la fréquence RF',
      'Mélange hétérodyne de deux oscillateurs RF',
      'Fréquence différentielle audible obtenue',
      'Filtre passe-bas et amplification de puissance',
      'Bobine mobile du haut-parleur projetant l\'onde dans la pièce'
    ],
    anatomy: [
      {
        name: 'Antenne verticale de hauteur',
        location: 'Côté droit de l\'appareil',
        material: 'Tige métallique conductrice',
        acousticRole: 'Plus la main s\'approche, plus la hauteur de la note monte (capacité inverse).'
      },
      {
        name: 'Antenne horizontale de volume',
        location: 'Boucle courbée sur le côté gauche',
        material: 'Tube de laiton en boucle',
        acousticRole: 'Plus la main descend vers la boucle, plus le son s\'atténue jusqu\'au silence total.'
      },
      {
        name: 'Oscillateurs de battement (Beat-Frequency Oscillator)',
        location: 'À l\'intérieur du coffret',
        material: 'Circuits inductifs et capacitifs LC',
        acousticRole: 'Génèrent une fréquence fixe (ex. 170 kHz) et une fréquence variable (170 à 173 kHz). La soustraction mathématique donne les fréquences audibles (0 à 3 000 Hz).'
      }
    ],
    culturalRole: 'Premier instrument électronique au monde joué sans aucun contact physique, devenu la voix mystérieuse du cinéma d\'angoisse et de science-fiction (Hitchcock, *Spellbound*).',
    historicalEvolution: 'A inspiré directement Robert Moog dans sa jeunesse, qui a fabriqué ses propres thérèmines avant de concevoir le légendaire synthétiseur modulaire Moog avec filtre en échelle 24 dB/octave.',
    descendantsOrVariants: ['Minimoog', 'Ondes Martenot', 'Synthétiseurs modulaires Eurorack', 'Thérémine numérique Moog Theremini'],
    relatedTopics: ['Robert Moog', 'Physique du son et électricité', 'XXe siècle et musiques électroniques']
  }
];

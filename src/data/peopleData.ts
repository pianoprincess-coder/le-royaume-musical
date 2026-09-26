import { MusicalFigure } from '../types/music';

export const PEOPLE_DATA: MusicalFigure[] = [
  {
    id: 'pythagore',
    name: 'Pythagore de Samos',
    lifespan: 'Env. 570 – 495 avant J.-C.',
    birthPlace: 'Samos (Grèce antique) et Crotone (Grande-Grèce)',
    roles: ['Philosophe', 'Mathématicien', 'Théoricien de l\'acoustique'],
    era: 'Antiquité grecque archaïque',
    historicalContext: 'Période pré-socratique où les penseurs grecs cherchent le principe premier (archè) régissant le cosmos.',
    mainContributions: [
      'Découverte des rapports numériques simples régissant la consonance musicale à l\'aide du monocorde',
      'Établissement des ratios 2:1 (octave), 3:2 (quinte) et 4:3 (quarte)',
      'Théorie philosophique de l\'Harmonie des Sphères reliant musique et astronomie'
    ],
    keyWorksOrInventions: [
      {
        title: 'Le Monocorde pythagoricien',
        details: 'Instrument de laboratoire à une seule corde tendue au-dessus d\'une règle graduée avec chevalet mobile.'
      },
      {
        title: 'Théorie de la Gamme pythagoricienne',
        details: 'Génération de l\'échelle musicale par empilement récursif de quintes pures (3/2).'
      }
    ],
    influencesReceived: ['Savoirs astronomiques et géométriques de l\'Égypte ancienne et de Babylone'],
    influencesExerted: ['Platon', 'Aristote', 'Boèce', 'Johannes Kepler', 'Toute la théorie musicale occidentale'],
    quotesOrTestimonies: '« Il y a de la géométrie dans le frémissement des cordes, il y a de la musique dans l\'espacement des sphères. »',
    relatedTopics: ['Galerie des Mathématiques', 'Physique du son', 'Antiquité & Grèce']
  },
  {
    id: 'ziryab',
    name: 'Abul-Hasan Ali Ibn Nafi (Ziryab)',
    lifespan: '789 – 857',
    birthPlace: 'Bagdad (Califat abbasside) puis Cordoue (Émirat omeyyade d\'Al-Andalus)',
    roles: ['Maître de musique', 'Poète', 'Luthiste prodige', 'Pédagogue et réformateur culturel'],
    era: 'Âge d\'or de l\'Islam médiéval & Al-Andalus',
    historicalContext: 'Rayonnement intellectuel des califats de Bagdad sous Haroun al-Rachid et de l\'Espagne musulmane sous Abd al-Rahman II.',
    mainContributions: [
      'Père fondateur de la musique arabo-andalouse (Al-Âla) et du concept de la Nouba (suite de chants et rythmes)',
      'Fondation du premier conservatoire de musique d\'Europe à Cordoue',
      'Ajout de la 5e corde centrale au Oud (symbolisant l\'âme) et remplacement du plectre de bois par une plume d\'aigle'
    ],
    keyWorksOrInventions: [
      {
        title: 'Système des 24 Noubas andalouses',
        details: 'Chaque nouba correspondait à une heure de la journée et à une humeur de l\'âme humaine.'
      },
      {
        title: 'Réforme organologique du Oud',
        details: 'Allégement de la table d\'harmonie et cordes en soie filée plus résonantes.'
      }
    ],
    influencesReceived: ['Ishaq al-Mawsili à Bagdad', 'Théories d\'Al-Kindi'],
    influencesExerted: ['Musique de cour de Cordoue', 'Troubadours d\'Occitanie', 'Patrimoine du Maghreb (Maroc, Algérie, Tunisie)'],
    quotesOrTestimonies: 'Surnommé « Ziryab » (le Merle noir) en raison de sa voix d\'une beauté enchanteresse et de son teint brun.',
    relatedTopics: ['Oud oriental', 'Maroc & Monde Amazigh', 'Monde Arabe & Maqâm']
  },
  {
    id: 'guido-darezzo',
    name: 'Guido d\'Arezzo (Gui d\'Arezzo)',
    lifespan: 'Env. 991 – 1033',
    birthPlace: 'Italie (Abbaye de Pomposa puis Cathédrale d\'Arezzo)',
    roles: ['Moine bénédictin', 'Théoricien de la musique', 'Pédagogue'],
    era: 'Moyen Âge roman',
    historicalContext: 'Époque où l\'apprentissage des chants liturgiques exigeait plus de dix ans de mémorisation orale laborieuse pour les moines.',
    mainContributions: [
      'Invention de la portée musicale moderne (d\'abord 4 lignes de couleurs distinctes : jaune pour ut, rouge pour fa)',
      'Invention de la solmisation : Ut, Ré, Mi, Fa, Sol, La à partir de l\'Hymne à Saint Jean-Baptiste',
      'Conception de la Main guidonienne, première méthode mnémotechnique visuelle pour chanter à vue'
    ],
    keyWorksOrInventions: [
      {
        title: 'Micrologus de disciplina artis musicae (vers 1026)',
        details: 'Deuxième traité musical le plus copié et lu de tout le Moyen Âge après celui de Boèce.'
      },
      {
        title: 'Prologus in Antiphonarium',
        details: 'Démonstration devant le pape Jean XIX qui apprit en quelques minutes à chanter un verset inconnu sans maître.'
      }
    ],
    influencesReceived: ['Chant grégorien traditionnel', 'Boèce'],
    influencesExerted: ['Tous les systèmes de notation musicale de l\'Histoire moderne'],
    quotesOrTestimonies: '« Par cette méthode, les clercs peuvent en quelques mois apprendre ce qu\'auparavant ils peinaient à saisir en plusieurs années. »',
    relatedTopics: ['Bibliothèque du Solfège', 'Histoire du Moyen Âge', 'Ut queant laxis']
  },
  {
    id: 'hildegard-von-bingen',
    name: 'Sainte Hildegard von Bingen',
    lifespan: '1098 – 1179',
    birthPlace: 'Bermersheim vor der Höhe (Saint-Empire romain germanique, Rhénanie)',
    roles: ['Abbesse bénédictine', 'Compositrice', 'Mystique', 'Naturaliste et médecin'],
    era: 'Moyen Âge central (XIIe siècle rhénan)',
    historicalContext: 'Époque des croisades et de la Renaissance du XIIe siècle, où les femmes étaient généralement exclues de la sphère savante officielle.',
    mainContributions: [
      'Plus vaste corpus musical monodique conservé d\'un auteur médiéval identifiable (plus de 70 chants sacrés)',
      'Écriture musicale d\'une audace inouïe avec des sauts d\'intervalles (quintes et octaves) et des ambitus vocaux vertigineux',
      'Création du premier drame musical liturgique moralisé de l\'Histoire (*Ordo Virtutum*)'
    ],
    keyWorksOrInventions: [
      {
        title: 'Symphonia armonie celestium revelationum (vers 1150)',
        details: 'Recueil de 77 chants liturgiques poétiques d\'une flamboyance mystique unique.'
      },
      {
        title: 'Ordo Virtutum (Le Jeu des Vertus, vers 1151)',
        details: 'Morceau théâtral et musical mettant en scène le combat de l\'Âme contre le Diable.'
      }
    ],
    influencesReceived: ['Liturgie bénédictine', 'Visions mystiques'],
    influencesExerted: ['Musique sacrée européenne', 'Compositrices modernes', 'Écologie et musicothérapie'],
    quotesOrTestimonies: '« La musique réveille en nous la mémoire de la pureté originelle d\'Adam avant la chute. »',
    relatedTopics: ['Histoire du Moyen Âge', 'La Voix Humaine', 'Chant grégorien']
  },
  {
    id: 'bartolomeo-cristofori',
    name: 'Bartolomeo Cristofori',
    lifespan: '1655 – 1731',
    birthPlace: 'Padoue puis Florence (Grand-duché de Toscane)',
    roles: ['Facteur de clavecins', 'Ingénieur luthier', 'Inventeur du piano'],
    era: 'Baroque tardif',
    historicalContext: 'Au service du grand mécène prince Ferdinand de Médicis à la cour florentine.',
    mainContributions: [
      'Invention du mécanisme à marteaux et échappement permettant de jouer doux (*piano*) ou fort (*forte*)',
      'Résolution du problème de rebond du marteau grâce à l\'attrape-marteau (paramartello)',
      'Création des étouffoirs individuels en feutre amortissant les cordes à la relâche de la touche'
    ],
    keyWorksOrInventions: [
      {
        title: 'Gravicembalo col piano e forte (vers 1700)',
        details: 'Premier piano de l\'Histoire, dont trois exemplaires originaux survivent (au MET de New York, à Rome et à Leipzig).'
      }
    ],
    influencesReceived: ['Mécanique des clavecins et épinettes toscanes'],
    influencesExerted: ['Silbermann', 'Stein', 'Mozart', 'Toute la dynastie pianistique moderne'],
    quotesOrTestimonies: 'Décrit en 1711 par le journaliste Scipione Maffei comme une « découverte merveilleuse qui ouvre une nouvelle ère pour l\'expression des émotions ».',
    relatedTopics: ['Piano à queue de concert', 'Lois de Mersenne', 'Époque Baroque']
  },
  {
    id: 'bach',
    name: 'Johann Sebastian Bach',
    lifespan: '1685 – 1750',
    birthPlace: 'Eisenach puis Leipzig (Saint-Empire germanique)',
    roles: ['Compositeur', 'Organiste virtuose', 'Cantor de Saint-Thomas', 'Architecte du contrepoint'],
    era: 'Apogée de l\'Époque Baroque',
    historicalContext: 'La Réforme luthérienne et les cours princières de Saxe (Weimar, Köthen, Leipzig).',
    mainContributions: [
      'Sommet indépassable du contrepoint vocal et instrumental et de la forme fugue',
      'Légitimation et célébration du nouveau système de tempérament (*Le Clavier bien tempéré*)',
      'Synthèse universelle des styles musicaux français, italien et allemand'
    ],
    keyWorksOrInventions: [
      {
        title: 'Le Clavier bien tempéré (BWV 846–893)',
        year: '1722 & 1744',
        details: '48 préludes et fugues explorant méthodiquement chacune des 24 tonalités majeures et mineures.'
      },
      {
        title: 'L\'Art de la fugue (BWV 1080)',
        year: '1742–1750',
        details: 'Testament musical ultime explorant toutes les permutations possibles d\'un thème unique.'
      },
      {
        title: 'La Passion selon saint Matthieu (BWV 244)',
        year: '1727',
        details: 'Monument dramatique et spirituel pour double chœur et double orchestre.'
      }
    ],
    influencesReceived: ['Buxtehude', 'Vivaldi', 'Couperin', 'Frescobaldi'],
    influencesExerted: ['Mozart', 'Beethoven', 'Mendelssohn', 'Brahms', 'L\'ensemble de la musique occidentale'],
    quotesOrTestimonies: 'Beethoven disait de lui : « Ce n\'est pas un ruisseau [Bach en allemand], c\'est un océan ! »',
    relatedTopics: ['Époque Baroque', 'Galerie des Mathématiques', 'Le Tempérament égal']
  },
  {
    id: 'clara-schumann',
    name: 'Clara Schumann (née Wieck)',
    lifespan: '1819 – 1896',
    birthPlace: 'Leipzig puis Francfort (Allemagne)',
    roles: ['Pianiste virtuose légendaire', 'Compositrice', 'Éditrice et professeure de conservatoire'],
    era: 'Romantisme européen',
    historicalContext: 'Siècle d\'affirmation de l\'individualité romantique où les musiciennes étaient cantonnées à l\'amateurisme de salon.',
    mainContributions: [
      'Pionnière du récital moderne : elle imposa de jouer par cœur (sans partition) et mit en valeur les œuvres de Bach, Beethoven et Chopin',
      'Compositions magistrales pour piano et orchestre défiant la virtuosité technique de son temps',
      'Édition critique monumentale de l\'œuvre intégrale de Robert Schumann'
    ],
    keyWorksOrInventions: [
      {
        title: 'Concerto pour piano en la mineur, op. 7',
        year: '1835 (écrit à 14-16 ans)',
        details: 'Chef-d\'œuvre précoce acclamé par Chopin et Mendelssohn.'
      },
      {
        title: 'Trio avec piano en sol mineur, op. 17',
        year: '1846',
        details: 'Considéré comme l\'un des plus grands trios avec piano du répertoire romantique mondial.'
      }
    ],
    influencesReceived: ['Friedrich Wieck (son père)', 'Frédéric Chopin', 'Felix Mendelssohn'],
    influencesExerted: ['Johannes Brahms (son ami intime et disciple)', 'Générations d\'interprètes au Conservatoire Hoch'],
    quotesOrTestimonies: 'Liszt écrivit : « Elle a tout ce que l\'art peut exiger de plus parfait : le sentiment, l\'intelligence et la technique souveraine. »',
    relatedTopics: ['Le Romantisme Musical', 'Piano à queue', 'La Forme Sonate']
  },
  {
    id: 'robert-moog',
    name: 'Dr. Robert Moog',
    lifespan: '1934 – 2005',
    birthPlace: 'New York (États-Unis)',
    roles: ['Ingénieur électronicien', 'Acousticien', 'Pionnier des synthétiseurs modernes'],
    era: 'XXe siècle numérique et analogique',
    historicalContext: 'L\'après-guerre et la naissance de la culture pop, du rock psychédélique et des musiques expérimentales.',
    mainContributions: [
      'Invention du synthétiseur analogique contrôlé en tension (VCO, VCF, VCA)',
      'Création du brevet du légendaire filtre passe-bas en échelle à transistors à 24 dB/octave (Moog ladder filter)',
      'Démocratisation et standardisation du clavier comme interface de jeu électronique (*Minimoog* en 1970)'
    ],
    keyWorksOrInventions: [
      {
        title: 'Synthétiseur modulaire Moog (1964)',
        details: 'Présenté à l\'AES (Audio Engineering Society), il a propulsé le son de l\'album *Switched-On Bach* de Wendy Carlos.'
      },
      {
        title: 'Minimoog Model D (1970)',
        details: 'Le premier synthétiseur portable et compact, devenu l\'instrument emblématique de Stevie Wonder, Kraftwerk et Pink Floyd.'
      }
    ],
    influencesReceived: ['Léon Thérémine', 'Raymond Scott', 'Électroacoustique'],
    influencesExerted: ['Kraftwerk', 'Stevie Wonder', 'Daft Punk', 'L\'ensemble des musiques électroniques actuelles'],
    quotesOrTestimonies: '« Je suis ingénieur. Je fabrique des outils pour que d\'autres puissent créer de la beauté. »',
    relatedTopics: ['Thérémine & Synthétiseur', 'Technologies Musicales', 'XXe et XXIe Siècles']
  }
];

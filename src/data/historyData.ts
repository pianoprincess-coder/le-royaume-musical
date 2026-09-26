import { MusicalPeriod } from '../types/music';

export const HISTORICAL_PERIODS: MusicalPeriod[] = [
  {
    id: 'prehistoire',
    name: 'Préhistoire & Premiers Souffles',
    subtitle: 'La naissance du geste musical et les flûtes aurignaciennes',
    dates: 'Env. 45 000 à 3 500 avant J.-C.',
    region: 'Eurasie, Afrique, premières communautés humaines',
    context: 'Avant même l\'écriture et les cités, Homo sapiens utilise son corps, des os d\'oiseaux, des cornes et des stalactites pour dialoguer avec les forces naturelles et structurer les rituels collectifs.',
    keyInnovations: [
      'Fabrication de flûtes percées en os d\'oiseau et ivoire de mammouth',
      'Arcs musicaux précurseurs des cordophones',
      'Exploitation de la résonance acoustique des grottes ornées (Chauvet, Niaux)'
    ],
    musicalPractices: 'Musique rituelle, incantatoire, chamanique, étroitement unie à la danse, au souffle et aux battements corporels.',
    before: 'Pure vocalisation biologique et percussions corporelles spontanées des hominidés primitifs.',
    appearance: 'Les archéologues découvrent à Hohle Fels (Allemagne, ~35 000 av. J.-C.) des flûtes en radius de vautour taillées avec des trous digitaux précis, prouvant une échelle musicale calculée dès l\'Aurignacien.',
    evolution: 'Transition des simples sifflets vers des instruments polyphoniques, tambours en peaux tendues sur bois au Néolithique.',
    after: 'Structuration des premières liturgies religieuses et hymnes d\'État dans les cités antiques de Mésopotamie et du Nil.',
    majorFigures: ['Chasseurs-cueilleurs aurignaciens', 'Premiers guérisseurs et chamanes'],
    emblematicInstruments: ['Flûte de Hohle Fels en os de vautour', 'Rhombes en os ou bois', 'Tambours néolithiques en argile', 'Arc musical'],
    representativeWorks: [
      {
        title: 'Appels de chasse et chants chamaniques reconstitués',
        composer: 'Tradition orale aurignacienne',
        date: '~35 000 av. J.-C.',
        description: 'Recherches d\'archéoacoustique démontrant l\'utilisation des échelles pentatoniques naturelles sur les flûtes en os.'
      }
    ],
    culturalLinks: 'Archéologie, acoustique des grottes, anthropologie des religions primitives.'
  },
  {
    id: 'antiquite-orient',
    name: 'Mésopotamie, Sumer & Égypte Pharaonique',
    subtitle: 'Les liturgies des temples et la plus ancienne partition du monde',
    dates: '~3 500 à ~500 avant J.-C.',
    region: 'Croissant Fertile, Tigre, Euphrate et Vallée du Nil',
    context: 'L\'apparition de l\'écriture cunéiforme et hiéroglyphique permet d\'archiver les instruments des temples, les chants royaux et les premières théories d\'accords.',
    keyInnovations: [
      'Invention de la première notation musicale sur tablette d\'argile (Chant hourrite n°6)',
      'Développement des harpes d\'apparat en or et lapis-lazuli d\'Ur',
      'Rôle des prêtresses et corporations de musiciens sacrés (shemayet)'
    ],
    musicalPractices: 'Chants d\'offrande aux dieux (Inanna, Hathor, Enlil), fanfares royales militaires et banquets de cour.',
    before: 'Traditions orales néolithiques non archivées par l\'écrit.',
    appearance: 'Découverte à Ougarit (Syrie actuelle) du Chant hourrite n°6 daté de ~1400 av. J.-C., hymne à la déesse Nikkal comprenant des indications d\'accords sur harpe ou lyre à neuf cordes.',
    evolution: 'Échange d\'instruments entre la Mésopotamie, Canaan et l\'Égypte : harpes arquées, luths à long manche, doubles clarinettes en roseau.',
    after: 'Transmission des modes orientaux vers la Grèce archaïque via Chypre, la Phénicie et les côtes d\'Ionie.',
    majorFigures: ['Puabi (reine d\'Ur)', 'Enheduanna (première poétesse connue)', 'Prêtresses chanteuses d\'Amon'],
    emblematicInstruments: ['Harpe royale d\'Ur', 'Sistre d\'Hathor', 'Double aulos / Arghul', 'Lyre babylonienne'],
    representativeWorks: [
      {
        title: 'Hymne hourrite n°6 (Hymne à Nikkal)',
        composer: 'Scribe anonyme d\'Ougarit',
        date: '~1400 av. J.-C.',
        description: 'Plus ancien morceau complet de musique notée connu de l\'humanité, transcrit sur tablette cunéiforme avec accords babyloniens.'
      }
    ],
    culturalLinks: 'Épigraphie cunéiforme, mythologie babylonienne, organologie des tombes royales.'
  },
  {
    id: 'grece-rome',
    name: 'Grèce Antique & Rome',
    subtitle: 'La musique comme science de l\'Univers et l\'Épitaphe de Seikilos',
    dates: '~800 avant J.-C. à 476 après J.-C.',
    region: 'Bassin méditerranéen, Grèce, Grande-Grèce, Empire Romain',
    context: 'La musique (mousikē) est au cœur de la paideia (éducation), indissociable de la poésie, de la tragédie d\'Eschyle et Sophocle, et des mathématiques pythagoriciennes.',
    keyInnovations: [
      'Pythagore formalise les proportions mathématiques des intervalles (2:1 octave, 3:2 quinte, 4:3 quarte)',
      'Notation alphabétique grecque précise (hauteurs et rythmes)',
      'Invention de l\'orgue hydraulique (Hydraule) par Ctésibios d\'Alexandrie au IIIe s. av. J.-C.'
    ],
    musicalPractices: 'Chœurs de tragédie antique, jeux pythiques et olympiques, banquets (symposia), cérémonies dionysiaques et apolliniennes.',
    before: 'Musique liturgique sumérienne et égyptienne sans théorie géométrique unifiée.',
    appearance: 'L\'Épitaphe de Seikilos (Ier-IIe siècle ap. J.-C., trouvée à Tralles) est le premier morceau au monde parvenu complet avec mélodie notée et texte gravé sur marbre.',
    evolution: 'Rome adopte et monumentalise les instruments grecs et étrusques (tubae militaires géantes, cors buccina, orgues d\'amphithéâtre).',
    after: 'Transmission du système modal grec (dorien, phrygien, lydien) aux pères de l\'Église chrétienne et aux érudits byzantins et arabes.',
    majorFigures: ['Pythagore de Samos', 'Aristoxène de Tarente', 'Ctésibios d\'Alexandrie', 'Boèce (De institutione musica)'],
    emblematicInstruments: ['Kithara (cithare)', 'Aulos (hautbois double)', 'Lyre en carapace de tortue', 'Hydraule (orgue à eau)', 'Tuba romaine'],
    representativeWorks: [
      {
        title: 'Épitaphe de Seikilos',
        composer: 'Seikilos',
        date: 'Ier - IIe s. ap. J.-C.',
        description: 'Chanson gravée sur une stèle funéraire : « Tant que tu vis, brille ! Ne t\'afflige d\'aucun souci... ».'
      },
      {
        title: 'Hymnes Delphiques à Apollon',
        composer: 'Athénaios et Liménios',
        date: '128 av. J.-C.',
        description: 'Gravés sur les murs du Trésor des Athéniens à Delphes avec notation musicale métrique.'
      }
    ],
    culturalLinks: 'Philosophie platonicienne, théorie de l\'Ethos, acoustique des théâtres antiques (Épidaure).'
  },
  {
    id: 'moyen-age',
    name: 'Moyen Âge & Éveil de la Polyphonie',
    subtitle: 'Du chant grégorien à l\'Ars Nova et l\'invention de la portée moderne',
    dates: '476 à 1450',
    region: 'Europe occidentale, abbayes carolingiennes, cathédrales gothiques',
    context: 'Sous l\'égide de l\'Église et des abbayes (Saint-Gall, Cluny), la transmission orale des chants liturgiques devient un casse-tête diplomatique résolu par la notation musicale.',
    keyInnovations: [
      'Invention des neumes puis de la portée à 4 lignes et de la solmisation par Guido d\'Arezzo (~1025)',
      'Naissance de la polyphonie mesurée à l\'École de Notre-Dame de Paris (Léonin, Pérotin)',
      'Développement de l\'Ars Nova au XIVe siècle par Philippe de Vitry et Guillaume de Machaut'
    ],
    musicalPractices: 'Chant grégorien monodique méditatif, offices cathédraux, art profane des troubadours en langue d\'oc et trouvères en langue d\'oïl.',
    before: 'Transmission purement mnémotechnique avec déformations régionales inévitables.',
    appearance: 'Guido d\'Arezzo conçoit la notation sur lignes horizontales avec les syllabes ut, re, mi, fa, sol, la tirées de l\'hymne à Saint Jean-Baptiste, révolutionnant l\'enseignement.',
    evolution: 'Complexification rythmique inouïe avec le motet isorythmique et la messe polyphonique intégrale.',
    after: 'Épanouissement de l\'Humanisme renaissant et diffusion massive grâce à l\'imprimerie de Gutenberg et Petrucci.',
    majorFigures: ['Guido d\'Arezzo', 'Hildegard von Bingen', 'Léonin et Pérotin', 'Guillaume de Machaut', 'Bernart de Ventadorn'],
    emblematicInstruments: ['Vielle à roue (organistrum)', 'Luth médiéval', 'Flûte à bec', 'Chalemie', 'Orgue positif portatif'],
    representativeWorks: [
      {
        title: 'Messe de Nostre Dame',
        composer: 'Guillaume de Machaut',
        date: '~1365',
        description: 'Première messe polyphonique complète écrite par un seul compositeur identifiable.'
      },
      {
        title: 'O viridissima virga',
        composer: 'Hildegard von Bingen',
        date: '~1150',
        description: 'Chant sacré aux envolées lyriques lumineuses défiant la retenue grégorienne classique.'
      }
    ],
    culturalLinks: 'Architecture gothique, scriptoria monastiques, théologie scolastique.'
  },
  {
    id: 'renaissance',
    name: 'Renaissance Musicale',
    subtitle: 'L\'Humanisme, l\'harmonie des voix et la première presse musicale',
    dates: '1450 à 1600',
    region: 'Flandres, France, Italie, Angleterre, Saint-Empire',
    context: 'L\'homme se place au centre de la création. La musique recherche la plénitude acoustique, l\'intelligibilité du texte poétique et la pureté consonante de la tierce et de la sixte.',
    keyInnovations: [
      'Ottaviano Petrucci imprime le premier recueil musical en caractères mobiles (Harmonice Musices Odhecaton, Venise 1501)',
      'Contrepoint imitatif rigoureux de l\'école franco-flamande (Josquin des Prés)',
      'Réforme liturgique du Concile de Trente et style palestrinien épuré'
    ],
    musicalPractices: 'Chant choral a cappella, madrigal italien profane très expressif (Gesualdo, Monteverdi), consort instrumental de violes de gambe.',
    before: 'Polyphonie gothique parfois arithmétique et dissonante de l\'Ars Nova.',
    appearance: 'L\'Europe entière admire Josquin des Prés, surnommé « le prince des musiciens », dont la clarté et l\'émotion expressive bouleversent les cours princières.',
    evolution: 'Transition progressive du style modal vers la future tonalité majeure/mineure ; émancipation de la musique purement instrumentale.',
    after: 'Révolution dramatique du Baroque, apparition de la basse continue et de la monodie accompagnée.',
    majorFigures: ['Josquin des Prés', 'Giovanni Pierluigi da Palestrina', 'Roland de Lassus', 'Carlo Gesualdo', 'William Byrd'],
    emblematicInstruments: ['Viole de gambe', 'Luth renaissance', 'Cornet à bouquin', 'Épinette et Clavecin primitif', 'Sacqueboute'],
    representativeWorks: [
      {
        title: 'Missa Papae Marcelli',
        composer: 'Giovanni Pierluigi da Palestrina',
        date: '1562',
        description: 'Modèle absolu de clarté polyphonique ayant sauvé la musique polyphonique au Concile de Trente.'
      },
      {
        title: 'Mille Regretz',
        composer: 'Josquin des Prés',
        date: '~1520',
        description: 'Chanson d\'une mélancolie poignante, célèbre dans toute l\'Europe de Charles Quint.'
      }
    ],
    culturalLinks: 'Imprimerie de Gutenberg, peinture de Léonard et Raphaël, philosophie humaniste d\'Érasme.'
  },
  {
    id: 'baroque',
    name: 'Époque Baroque',
    subtitle: 'La rhétorique des passions, l\'opéra et l\'architecture harmonique de Bach',
    dates: '1600 à 1750',
    region: 'Italie, Allemagne, France (Versailles), Angleterre',
    context: 'L\'âge du théâtre, du faste monarchique et de l\'exploration des passions humaines. La musique devient un discours oratoire capable d\'émouvoir, d\'effrayer ou d\'extasier.',
    keyInnovations: [
      'Invention de l\'opéra (*L\'Orfeo* de Monteverdi, Mantoue 1607)',
      'Basse continue (basso continuo) structurant l\'harmonie verticale',
      'Bach explore le tempérament et l\'apogée de la fugue (*Le Clavier bien tempéré*, 1722)',
      'Invention du pianoforte par Bartolomeo Cristofori à Florence vers 1700'
    ],
    musicalPractices: 'Concertos pour soliste et orchestre (Vivaldi), cantates et passions religieuses, tragédies lyriques versaillaises (Lully, Rameau).',
    before: 'Polyphonie linéaire sans hiérarchie harmonique claire entre basse et mélodie.',
    appearance: 'La Camerata fiorentina cherche à ressusciter le drame grec antique et crée le récitatif chanté, donnant naissance à l\'opéra.',
    evolution: 'Développement d\'une virtuosité instrumentale étourdissante avec la dynastie des luthiers de Crémone (Stradivari, Guarneri).',
    after: 'Simplification classique : rejet de la surcharge polyphonique au profit d\'une mélodie galante chantante et accessible.',
    majorFigures: ['Johann Sebastian Bach', 'Claudio Monteverdi', 'Antonio Vivaldi', 'Georg Friedrich Haendel', 'Jean-Philippe Rameau', 'Arcangelo Corelli'],
    emblematicInstruments: ['Violon baroque', 'Clavecin à deux claviers', 'Orgue à tuyaux polyphonique', 'Théorbe', 'Hautbois baroque'],
    representativeWorks: [
      {
        title: 'Le Clavier bien tempéré (Livres I & II)',
        composer: 'Johann Sebastian Bach',
        date: '1722 & 1744',
        description: 'Préludes et fugues dans les 24 tonalités majeures et mineures, consacrant le tempérament moderne.'
      },
      {
        title: 'Les Quatre Saisons',
        composer: 'Antonio Vivaldi',
        date: '1725',
        description: 'Chef-d\'œuvre de musique descriptive peignant orages, chants d\'oiseaux et vendanges.'
      },
      {
        title: 'L\'Orfeo (Favola in musica)',
        composer: 'Claudio Monteverdi',
        date: '1607',
        description: 'Le premier chef-d\'œuvre impérissable de l\'histoire de l\'opéra.'
      }
    ],
    culturalLinks: 'Architecture baroque (Bernin), traités d\'harmonie de Rameau, cartésianisme.'
  },
  {
    id: 'classicisme',
    name: 'Période Classique',
    subtitle: 'L\'idéal des Lumières : clarté, équilibre et triomphe de la symphonie',
    dates: '1750 à 1820',
    region: 'Vienne (Autriche), Paris, Londres, Mannheim',
    context: 'Le Siècle des Lumières rejette les complications artificielles du contrepoint baroque. La musique doit être naturelle, élégante, universelle et émouvante sans pédanterie.',
    keyInnovations: [
      'Consécration de la Forme Sonate (Exposition, Développement, Réexposition)',
      'Fixation de l\'Orchestre Symphonique moderne et de l\'école de Mannheim (crescendo d\'orchestre)',
      'Naissance du Quatuor à cordes comme sommet de conversation musicale civilisée',
      'Le Piano remplace définitivement le clavecin grâce à sa capacité de nuances dynamiques'
    ],
    musicalPractices: 'Concerts publics payants, opéras bouffes spirituels (Mozart), symphonies et musique de chambre bourgeoise.',
    before: 'Complexité contrapuntique dense et basse continue continue omniprésente.',
    appearance: 'Haydn et Mozart forgent le style viennois où la mélodie périodique symétrique s\'appuie sur une harmonie limpide.',
    evolution: 'Beethoven pulvérise les cadres classiques par sa véhémence dramatique, inaugurant l\'ère romantique.',
    after: 'Le romantisme exalte le moi, le sublime, la tragédie et brise les proportions mesurées.',
    majorFigures: ['Wolfgang Amadeus Mozart', 'Joseph Haydn', 'Ludwig van Beethoven (première & deuxième manières)', 'Christoph Willibald Gluck'],
    emblematicInstruments: ['Pianoforte viennois', 'Clarinette classique (adoptée par Mozart)', 'Quatuor à cordes moderne', 'Cor naturel'],
    representativeWorks: [
      {
        title: 'Symphonie n° 40 en sol mineur (KV 550)',
        composer: 'Wolfgang Amadeus Mozart',
        date: '1788',
        description: 'Sommet d\'équilibre dramatique, d\'urgence expressive et de rigueur formelle.'
      },
      {
        title: 'Symphonie n° 5 en ut mineur, op. 67',
        composer: 'Ludwig van Beethoven',
        date: '1808',
        description: 'Le motif légendaire du « Destin qui frappe à la porte », révolution de la dramaturgie symphonique.'
      },
      {
        title: 'Les Noces de Figaro',
        composer: 'Wolfgang Amadeus Mozart',
        date: '1786',
        description: 'Opéra révolutionnaire incarnant l\'esprit des Lumières contre les privilèges aristocratiques.'
      }
    ],
    culturalLinks: 'Philosophie des Lumières (Voltaire, Kant), Révolution française, Encyclopédie de Diderot.'
  },
  {
    id: 'romantisme',
    name: 'Le Romantisme Musical',
    subtitle: 'Le culte du sentiment, le poème symphonique et le piano virtuose',
    dates: '1820 à 1910',
    region: 'Europe centrale, Allemagne, France, Russie, Pologne, Bohême',
    context: 'L\'artiste romantique est un héros révolté en quête d\'absolu, fasciné par la nature grandiose, le mystère nocturne, les légendes folkloriques et le destin individuel.',
    keyInnovations: [
      'Invention du Poème symphonique par Franz Liszt (musique à programme)',
      'Développement du piano romantique à cadre en fonte (Pleyel, Érard, Steinway)',
      'Invention du Leitmotiv et du « drame musical total » (Gesamtkunstwerk) par Richard Wagner',
      'Essor des écoles nationales intégrant les mélodies et rythmes populaires (Dvořák, Tchaïkovski, Grieg)'
    ],
    musicalPractices: 'Salons parisiens intimes, récitals publics de virtuoses idolâtrés (Paganini, Liszt), gigantisme des opéras et symphonies (Mahler, Bruckner).',
    before: 'Cadres formels équilibrés et codifiés du Classicisme viennois.',
    appearance: 'Schubert avec ses Lieder et Beethoven tardif ouvrent les portes de l\'introspection poétique la plus déchirante.',
    evolution: 'Chromatisme exacerbé menant aux limites de la tonalité (l\'accord de Tristan de Wagner).',
    after: 'Éclatement de la tonalité au XXe siècle : impressionnisme debussyste, dodécaphonisme et avant-gardes.',
    majorFigures: ['Frédéric Chopin', 'Franz Schubert', 'Franz Liszt', 'Robert Schumann', 'Clara Schumann', 'Johannes Brahms', 'Richard Wagner', 'Piotr Ilitch Tchaïkovski', 'Gustav Mahler'],
    emblematicInstruments: ['Grand piano de concert à cadre en fonte', 'Trompette à pistons', 'Tuba', 'Harpe à double mouvement Érard', 'Saxophone (inventé par Adolphe Sax en 1846)'],
    representativeWorks: [
      {
        title: 'Nocturnes et Ballades pour piano',
        composer: 'Frédéric Chopin',
        date: '1830–1846',
        description: 'Poésie sonore pure explorant le legato vocal et les résonances intimes du piano moderne.'
      },
      {
        title: 'Symphonie n° 9 « Du Nouveau Monde »',
        composer: 'Antonín Dvořák',
        date: '1893',
        description: 'Synthèse magistrale entre mélodies spirituelles afro-américaines et nostalgie de la Bohême.'
      },
      {
        title: 'Tristan et Isolde',
        composer: 'Richard Wagner',
        date: '1865',
        description: 'L\'accord initial de Tristan suspend la résolution tonale et ouvre la musique moderne.'
      }
    ],
    culturalLinks: 'Peinture de Friedrich et Delacroix, poésie de Baudelaire et Goethe, industrialisation.'
  },
  {
    id: 'siecle-moderne',
    name: 'XXe & XXIe Siècles : Explosions & Révolution Numérique',
    subtitle: 'Du dodécaphonisme à la musique assistée par ordinateur et au streaming planétaire',
    dates: '1910 à aujourd\'hui',
    region: 'Monde entier, États-Unis, Europe, Asie, Afrique, Amérique latine',
    context: 'Les deux guerres mondiales, l\'électrification, l\'enregistrement sonore et l\'informatique pulvérisent les frontières esthétiques. Tous les sons du monde deviennent matière musicale.',
    keyInnovations: [
      'Dodécaphonisme et sérialisme de Schönberg : émancipation totale de la dissonance',
      'Invention de la Musique concrète par Pierre Schaeffer (1948) enregistrant les bruits du réel',
      'Synthétiseurs analogiques et numériques (Moog, Buchla, Yamaha DX7) et protocole MIDI (1983)',
      'Stations audio-numériques (DAW) et diffusion par streaming global'
    ],
    musicalPractices: 'Coexistence infinie : musique contemporaine savante, jazz, rock, musiques urbaines, électronique, minimalisme (Steve Reich, Philip Glass), musiques de film monumentales.',
    before: 'Musique acoustique soumise à la présence physique des interprètes et à la partition papier.',
    appearance: 'Le Sacre du Printemps de Stravinsky (Paris 1913) déclenche une émeute historique par sa sauvagerie rythmique polytonale.',
    evolution: 'Démocratisation totale de la création sonore dans les home-studios et algorithmes de synthèse sonore.',
    after: 'Création hybride homme-machine, paysages sonores immersifs et synthèse en temps réel.',
    majorFigures: ['Claude Debussy', 'Igor Stravinsky', 'Arnold Schönberg', 'Pierre Boulez', 'Miles Davis', 'Robert Moog', 'Ennio Morricone'],
    emblematicInstruments: ['Synthétiseur modulaire', 'Guitare électrique', 'Échantillonneur (Sampler)', 'Boîte à rythmes', 'Ordinateur & MAO'],
    representativeWorks: [
      {
        title: 'Le Sacre du Printemps',
        composer: 'Igor Stravinsky',
        date: '1913',
        description: 'Séisme rythmique et orchestral qui a fait basculer la musique occidentale dans la modernité.'
      },
      {
        title: 'Prélude à l\'après-midi d\'un faune',
        composer: 'Claude Debussy',
        date: '1894',
        description: 'Considéré par Pierre Boulez comme « le coup de flûte qui a éveillé la musique moderne ».'
      },
      {
        title: 'Music for 18 Musicians',
        composer: 'Steve Reich',
        date: '1976',
        description: 'Chef-d\'œuvre du minimalisme américain fondé sur les pulsations hypnotiques et les déphasages.'
      }
    ],
    culturalLinks: 'Révolution numérique, cinéma, relativité d\'Einstein, mondialisation culturelle.'
  }
];

export interface WorldTradition {
  id: string;
  name: string;
  region: string;
  culturalHeritage: string;
  musicalSystem: string;
  emblematicInstruments: string[];
  historicalEvolution: string;
  culturalSignificance: string;
  notableMasters: string[];
}

export const WORLD_TRADITIONS: WorldTradition[] = [
  {
    id: 'maroc-amazigh',
    name: 'Maroc & Monde Amazigh (Berbère)',
    region: 'Maroc, Atlas, Souss, Sahara, Rif',
    culturalHeritage: 'Un patrimoine millénaire vivant où la musique est le ciment social de la fête, de la transe mystique et de la poésie chantée.',
    musicalSystem: 'Système modal riche en échelles pentatoniques et microtonales ; rythmes asymétriques et polyrythmies hypnotiques exécutées aux pieds et aux mains.',
    emblematicInstruments: ['Guembri / Sintir', 'Bendir (avec timbre de corde)', 'Ribab amazigh monocorde', 'Tbilat', 'Qraqeb (crotales en fer)'],
    historicalEvolution: 'Des chants ancestraux Ahwash et Ahidous jusqu\'aux cérémonies de la Lila Gnawa (inscrite au patrimoine immatériel de l\'UNESCO), en passant par la musique arabo-andalouse (Al-Âla) introduite après la chute de Grenade.',
    culturalSignificance: 'Les Gnawas fusionnent l\'héritage subsaharien des esclaves avec le soufisme marocain ; le guembri, fait de bois de peuplier et de peau de dromadaire, est l\'instrument sacré des esprits.',
    notableMasters: ['Mahmoud Guinia (maâlem Gnawa)', 'Hajja Hamdaouia (Aïta)', 'Mohamed Rouicha (Loutar amazigh)', 'Abdelkrim Raïs (musique andalouse)']
  },
  {
    id: 'arabe-orient',
    name: 'Monde Arabe & Proche-Orient (Le Maqâm)',
    region: 'Égypte, Levant, Irak, Péninsule Arabique, Maghreb',
    culturalHeritage: 'Une des théories musicales les plus savantes et subtiles au monde, théorisée dès le IXe siècle par Al-Kindi, Al-Farabi et Safi al-Din al-Urmawi.',
    musicalSystem: 'Le Maqâm : système d\'échelles modales divisées en demi-tons et quarts de ton (comme le mode Rast, Bayati, Hijaz, Sikah) induisant des états émotionnels (tarab).',
    emblematicInstruments: ['Oud (luth oriental)', 'Nay (flûte en roseau)', 'Qanûn (cithare sur table)', 'Riq (tambourin à cymbalettes)', 'Darbouka'],
    historicalEvolution: 'Âge d\'or abbasside à Bagdad, enrichissement par les lettrés andalous à Cordoue grâce à Ziryab, puis Congrès de musique arabe du Caire en 1932 qui a codifié les quarts de ton.',
    culturalSignificance: 'La recherche de l\'extase esthétique (Tarab), où l\'improvisation libre mesurée (Taqsim) et l\'ornementation vocale créent une communion spirituelle avec l\'auditoire.',
    notableMasters: ['Ziryab (IXe s.)', 'Oum Kalthoum', 'Mohammed Abdel Wahab', 'Munir Bashir (maître irakien du oud)']
  },
  {
    id: 'inde-classique',
    name: 'Inde Classique (Rāga & Tāla)',
    region: 'Sous-continent indien (traditions Hindoustanie au Nord, Carnatique au Sud)',
    culturalHeritage: 'Tradition spirituelle millénaire trouvant ses racines dans le Sāma-Veda (~1500 av. J.-C.) et le traité fondamental Nātya-shāstra de Bharata Muni.',
    musicalSystem: 'Le Rāga (cadre mélodique associé à une heure du jour, une saison ou une émotion rasa) et le Tāla (cycle rythmique circulaire allant de 3 à 108 pulsations). Divisé en 22 micro-intervalles (shrutis).',
    emblematicInstruments: ['Sitar', 'Sarod', 'Vînâ carnatique', 'Bānsurī (flûte traversière en bambou)', 'Tablā', 'Tanpura (bourdon)'],
    historicalEvolution: 'Séparation au XIIIe siècle entre le Nord imprégné de cultures persane et moghole (Tansen à la cour d\'Akbar) et le Sud carnatique demeuré strictement fidèle aux temples hindous.',
    culturalSignificance: 'La musique est Nada Brahma (le son divin). Une performance commence par l\'Alap, lente exploration contemplative sans rythme, avant l\'accélération jubilatoire avec les percussions.',
    notableMasters: ['Ravi Shankar (sitar)', 'Ali Akbar Khan (sarod)', 'Hariprasad Chaurasia (bansuri)', 'Zakir Hussain (tabla)', 'M.S. Subbulakshmi (chant carnatique)']
  },
  {
    id: 'chine-japon',
    name: 'Chine & Japon d\'Orient',
    region: 'Chine impériale, Japon, Corée',
    culturalHeritage: 'Conception philosophique confucéenne et taoïste où la musique harmonise le Ciel, la Terre et l\'Ordre politique cosmique.',
    musicalSystem: 'Système des 12 Lü (hauteurs absolues calculées par le cycle des quintes dès le VIe s. av. J.-C.), échelles pentatoniques gong, shang, jue, zhi, yu associées aux 5 éléments.',
    emblematicInstruments: ['Guqin (cithare à 7 cordes des lettrés)', 'Pipa (luth piriforme)', 'Dizi (flûte en bambou avec membrane)', 'Koto japonais', 'Shakuhachi (flûte de méditation zen)'],
    historicalEvolution: 'Règne de l\'empereur mythique Huangdi, splendeur des orchestres de cour des dynasties Tang et Song, transmission au Japon sous la forme du Gagaku impérial.',
    culturalSignificance: 'Pour Confucius, « la musique affine l\'âme et ordonne l\'État ». Le Guqin n\'était pas joué pour divertir une foule, mais en solitaire dans la nature pour élever son esprit.',
    notableMasters: ['Bo Ya (joueur légendaire de Guqin)', 'Kengyo Yatsuhashi (père du koto moderne)', 'Mei Lanfang (maître de l\'Opéra de Pékin)']
  },
  {
    id: 'afrique-ouest',
    name: 'Afrique Subsaharienne & Tradition Mandingue',
    region: 'Afrique de l\'Ouest, Mali, Guinée, Sénégal, Gambie, bassin du Congo',
    culturalHeritage: 'La musique est mémoire vivante, généalogie, chronique historique et médiation sacrée confiée à la caste prestigieuse des Griots (Jalis).',
    musicalSystem: 'Polyrythmie complexe par superposition de métriques binaires et ternaires (cross-rhythms), chant responsorial (appel et réponse), timbres riches en bourdonnements métalliques.',
    emblematicInstruments: ['Kora (harpe-luth à 21 cordes sur calebasse)', 'Balafon (xylophone à calebasses résonatrices)', 'Djembé', 'Dundun', 'Tama (talking drum)'],
    historicalEvolution: 'Depuis l\'Empire du Mali de Soundiata Keïta au XIIIe siècle, les familles de griots (Kouyaté, Diabaté, Sissoko) transmettent de père en fils les épopées dynastiques.',
    culturalSignificance: 'Le griot est la bibliothèque humaine du peuple. Sans son chant et sa kora, l\'histoire des ancêtres sombrerait dans l\'oubli.',
    notableMasters: ['Toumani Diabaté (virtuose universel de la kora)', 'Ballaké Sissoko', 'Ali Farka Touré', 'Salif Keïta']
  }
];

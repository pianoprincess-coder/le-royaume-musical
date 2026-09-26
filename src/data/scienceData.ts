export interface ScienceTopic {
  id: string;
  category: 'physique' | 'mathematiques' | 'cerveau' | 'voix';
  title: string;
  hook: string;
  simpleExplanation: string; // Niveau 1
  deepExplanation: string; // Niveau 2
  technicalDetails: string; // Niveau 3
  equationsOrKeyData?: { formula: string; explanation: string }[];
  didYouKnow: string;
  relatedTopics: string[];
}

export const SCIENCE_TOPICS: ScienceTopic[] = [
  {
    id: 'nature-du-son',
    category: 'physique',
    title: 'La Nature Physique du Son : Ondes et Pression',
    hook: 'Le son n\'est rien d\'autre qu\'un invisible tremblement de l\'air qui voyage jusqu\'à faire vibrer la fine peau de ton tympan.',
    simpleExplanation: 'Quand tu tapes dans tes mains ou frappes un tambour, tu pousses les molécules d\'air les unes contre les autres. Cette poussée se transmet de proche en proche comme une vague dans l\'eau : c\'est une onde acoustique de pression.',
    deepExplanation: 'Contrairement à la lumière qui est une onde électromagnétique capable de se propager dans le vide absolu de l\'espace, le son est une onde mécanique de compression-décompression longitudinale. Il a impérativement besoin de matière (air, liquide ou solide) pour exister. Dans le vide interstellaire, aucun son ne peut jamais se propager.',
    technicalDetails: 'La vitesse du son dépend de l\'élasticité et de la densité du milieu. Dans l\'air sec à 20°C, elle est d\'environ 343 m/s (1 235 km/h). Dans l\'eau de mer, elle bondit à 1 500 m/s, et traverse l\'acier à plus de 5 100 m/s ! La relation fondamentale reliant vitesse c, fréquence f et longueur d\'onde λ s\'écrit : c = λ · f.',
    equationsOrKeyData: [
      {
        formula: 'c = λ · f',
        explanation: 'La vitesse de l\'onde (c en m/s) est égale au produit de sa longueur d\'onde (λ en mètres) par sa fréquence (f en Hertz).'
      },
      {
        formula: 'P_dB = 20 · log10(P / P_0)',
        explanation: 'Niveau d\'intensité acoustique en décibels, où P0 = 20 µPa représente le seuil d\'audibilité humaine absolue.'
      }
    ],
    didYouKnow: 'Un coup de foudre produit un éclair et un tonnerre au même instant. Mais comme la lumière voyage à 300 000 km/s et le son à seulement 340 m/s, compter 3 secondes entre l\'éclair et le grondement signifie que l\'orage se trouve à exactement 1 kilomètre de toi !',
    relatedTopics: ['Lois de Mersenne', 'Timbre et Fourier', 'Oreille interne']
  },
  {
    id: 'timbre-et-harmoniques',
    category: 'physique',
    title: 'Pourquoi deux instruments ne sonnent-ils pas pareil ? Le Timbre et Fourier',
    hook: 'Si une flûte et un violon jouent exactement le même La à 440 Hz au même volume sonore, pourquoi ton oreille reconnaît-elle instantanément chaque instrument ?',
    simpleExplanation: 'Un instrument ne produit jamais une seule note pure isolée ! Il émet une note principale (la note fondamentale) accompagnée d\'une famille de petites notes plus aiguës et plus discrètes : les harmoniques. Le mélange de ces harmoniques est la « couleur » ou l\'empreinte digitale du son : son timbre.',
    deepExplanation: 'Le mathématicien français Joseph Fourier a démontré au XIXe siècle que n\'importe quel son périodique complexe peut être décomposé en une somme d\'ondes sinusoïdales pures dont les fréquences sont des multiples entiers de la fondamentale (f0, 2f0, 3f0, 4f0, 5f0...). La flûte produit presque uniquement la fondamentale (spectre très pauvre et pur), tandis que le violon produit une multitude d\'harmoniques denses et brillantes.',
    technicalDetails: 'Le timbre ne se résume pas qu\'au spectre statique : il dépend crucialement des transitoires d\'attaque (l\'enveloppe ADSR : Attack, Decay, Sustain, Release). Si l\'on coupe les 50 premières millisecondes de l\'attaque d\'un piano et d\'une clarinette, il devient presque impossible à l\'oreille humaine de les distinguer ! Le frottement initial de l\'archet ou l\'impact du marteau donne l\'identité auditive.',
    equationsOrKeyData: [
      {
        formula: 'f_n = n · f_0   (pour n = 1, 2, 3, 4, 5...)',
        explanation: 'Série harmonique naturelle : la 2e harmonique est l\'octave (2f0), la 3e est la quinte de l\'octave (3f0), la 4e est la double octave (4f0), la 5e est la tierce majeure (5f0).'
      }
    ],
    didYouKnow: 'C\'est cette série harmonique naturelle inscrite dans la physique de l\'Univers qui a façonné l\'harmonie humaine : les premiers accords parfaits (octave, quinte, tierce) correspondent exactement aux premiers étages de la vibration des cordes et des tuyaux !',
    relatedTopics: ['Violon', 'Flûte traversière', 'Synthèse additive sonore']
  },
  {
    id: 'lois-de-mersenne',
    category: 'physique',
    title: 'Pourquoi une corde vibre-t-elle à telle fréquence ? Les Lois de Mersenne',
    hook: 'Le père jésuite Marin Mersenne a formulé en 1636 la loi mathématique qui régit aujourd\'hui chaque guitare, harpe, piano et violon.',
    simpleExplanation: 'Pour rendre une note plus aiguë sur une corde, tu as trois moyens physiques évidents : la raccourcir (comme quand tu poses un doigt sur le manche d\'une guitare), la tendre plus fort (en tournant la cheville), ou utiliser une corde plus fine et légère.',
    deepExplanation: 'Mersenne a quantifié exactement ces trois paramètres dans son traité monumental Harmonie Universelle. La fréquence est inversement proportionnelle à la longueur de la corde, proportionnelle à la racine carrée de la tension mécanique, et inversement proportionnelle à la racine carrée de sa masse linéique.',
    technicalDetails: 'Formule universelle de Mersenne : f = (1 / 2L) · √(T / μ). Si l\'on veut doubler la fréquence d\'une corde sans changer sa longueur ni son épaisseur (monter d\'une octave), il ne faut pas doubler sa tension, mais la quadrupler (2² = 4) ! C\'est pourquoi les cordes graves de piano sont filées de cuivre lourd : cela évite d\'avoir des cordes de 10 mètres de long dans son salon.',
    equationsOrKeyData: [
      {
        formula: 'f = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}',
        explanation: 'f en Hz, L en mètres (longueur vibrante), T en Newtons (tension), μ en kg/m (masse par unité de longueur).'
      }
    ],
    didYouKnow: 'La tension totale exercée par les cordes sur le cadre en fonte d\'un piano à queue de concert équivaut au poids cumulé de 12 voitures citadines (environ 20 tonnes de traction permanente) !',
    relatedTopics: ['Piano à queue', 'Violon', 'Pythagore et le Monocorde']
  },
  {
    id: 'pythagore-et-mathematiques',
    category: 'mathematiques',
    title: 'Pythagore, le Monocorde et les Ratios Sacrés',
    hook: 'Au VIe siècle avant J.-C., Pythagore écoute le bruit des marteaux chez un forgeron et découvre que la beauté musicale obéit aux nombres entiers.',
    simpleExplanation: 'Prends une corde tendue sur une planche de bois (un monocorde). Si tu la pinces, elle fait un son. Si tu poses un chevalet exactement au milieu (rapport 2:1), la demi-corde produit exactement la même note, mais deux fois plus aiguë : c\'est l\'Octave ! Si tu prends les 2/3 de la corde (rapport 3:2), tu obtiens la Quinte.',
    deepExplanation: 'Pour les Pythagoriciens, la musique était la preuve éclatante que le cosmos entier est gouverné par l\'harmonie des nombres (l\'Harmonie des Sphères). Les consonances parfaites de l\'Antiquité reposaient sur la Tetraktys sacrée des quatre premiers nombres : 1, 2, 3 et 4. L\'octave vaut 2/1, la quinte 3/2, et la quarte 4/3.',
    technicalDetails: 'En empilant des quintes de rapport 3/2, Pythagore construit la première gamme heptatonique (7 notes). Mais un dilemme arithmétique insurmontable apparaît : si l\'on empile 12 quintes pures consécutives, on devrait théoriquement retomber sur la même note que si l\'on empile 7 octaves pures. Or mathématiquement, (3/2)¹² = 129.746, alors que 2⁷ = 128 ! Ce décalage minuscule mais assassin s\'appelle le Comma Pythagoricien (23.46 cents).',
    equationsOrKeyData: [
      {
        formula: '(3/2)^{12} \\neq 2^7',
        explanation: '129.746... ≠ 128. Le cycle des quintes ne se boucle jamais parfaitement dans les nombres entiers purs !'
      },
      {
        formula: 'Comma = \\frac{(3/2)^{12}}{2^7} = \\frac{531441}{524288} \\approx 1.01364',
        explanation: 'L\'écart qui a torturé les mathématiciens et musiciens pendant plus de deux millénaires.'
      }
    ],
    didYouKnow: 'C\'est ce minuscule décalage de 1.36% qui a obligé l\'humanité à inventer les tempéraments musicaux et à « tricher » légèrement sur la justesse des notes au piano.',
    relatedTopics: ['Tempérament égal', 'Johann Sebastian Bach', 'Physique du son']
  },
  {
    id: 'temperament-egal-formule',
    category: 'mathematiques',
    title: 'Le Tempérament Égal et la Formule : f_n = f_0 × 2^(n/12)',
    hook: 'Comment répartir le comma pythagoricien pour que toutes les tonalités sonnent bien ? En utilisant la racine douzième de 2 !',
    simpleExplanation: 'Pendant des siècles, si un clavecin était accordé pour jouer en Do majeur, jouer en Fa dièse majeur sonnait horriblement faux (on appelait cela la « quinte du loup », car elle hurlait aux oreilles). Le tempérament égal a décidé de répartir l\'erreur de façon absolument équitable entre les 12 demi-tons de l\'octave.',
    deepExplanation: 'Pour que chaque demi-ton d\'une octave ait exactement le même intervalle multiplicatif r, il faut que multiplier 12 fois de suite par r fasse exactement doubler la fréquence (l\'octave = ×2). Cela donne l\'équation mathématique : r¹² = 2, d\'où r = 2^(1/12) ≈ 1.059463094. Chaque demi-ton est environ 5.95 % plus haut en fréquence que le précédent.',
    technicalDetails: 'Grâce à cette formule logarithmique, n\'importe quelle note située à n demi-tons de la note de référence f0 (par exemple le La 440 Hz) a pour fréquence exacte : f_n = f_0 · 2^(n/12). Si n = 12 (une octave au-dessus), f_12 = 440 · 2^(12/12) = 440 · 2 = 880 Hz. Si n = -9 (le Do médian sous le La), f = 440 · 2^(-9/12) = 261.63 Hz.',
    equationsOrKeyData: [
      {
        formula: 'f_n = f_0 \\times 2^{n/12}',
        explanation: 'Formule universelle du tempérament égal moderne reliant demi-tons discrets et fréquences continues.'
      },
      {
        formula: 'r = \\sqrt[12]{2} = 2^{1/12} \\approx 1.059463094359',
        explanation: 'Rapport constant de fréquence entre deux touches de piano immédiatement voisines.'
      }
    ],
    didYouKnow: 'Le tempérament égal est un compromis imparfait génial : toutes les tierces majeures du piano moderne sont légèrement trop hautes de 14 cents par rapport à la pureté acoustique naturelle, mais notre cerveau s\'y est tellement habitué qu\'il les trouve splendides !',
    relatedTopics: ['Pythagore et les Mathématiques', 'Le Clavier bien tempéré de Bach', 'Piano à queue']
  },
  {
    id: 'oreille-et-cerveau',
    category: 'cerveau',
    title: 'De la Cochlée au Cortex : L\'Odyssée Acoustique du Cerveau',
    hook: 'La musique n\'existe pas dans l\'air. Dans l\'air, il n\'y a que des variations de pression moléculaire. C\'est ton cerveau qui transforme cette mécanique en émotion pure.',
    simpleExplanation: 'L\'onde entre dans ton oreille, fait vibrer ton tympan, puis trois minuscules os (les plus petits de ton corps : marteau, enclume, étrier). L\'étrier frappe la cochlée, un petit escargot rempli de liquide où des milliers de cellules ciliées transforment le mouvement en étincelles électriques vers ton cerveau.',
    deepExplanation: 'La membrane basilaire de la cochlée possède une organisation tonotopique spectaculaire : sa base, rigide et étroite, réagit aux fréquences très aiguës (jusqu\'à 20 000 Hz), tandis que son sommet (l\'apex), large et souple, réagit aux fréquences graves (20 Hz). Chaque hauteur de son active un groupe de cellules précis, projeté ensuite fidèlement sur la carte tonotopique du cortex auditif primaire (A1 dans le lobe temporal).',
    technicalDetails: 'L\'oreille moyenne joue le rôle irremplaçable d\'adaptateur d\'impédance acoustique. Les ondes voyagent dans l\'air (très compressible, faible impédance) mais doivent exciter le liquide cochléaire (incompressible, forte impédance). Sans le bras de levier des trois osselets et le rapport de surface de 17:1 entre le tympan et la fenêtre ovale, 99.9 % de l\'énergie sonore rebondirait sans pénétrer dans l\'oreille interne !',
    equationsOrKeyData: [
      {
        formula: 'Gain_{impédance} \\approx 20',
        explanation: 'Facteur de multiplication de pression mécanique opéré par le tympan et les osselets.'
      }
    ],
    didYouKnow: 'Quand tu as un frisson musical (« la chair de poule » devant un passage sublime), ton cerveau libère une décharge massive de dopamine dans le striatum ventral et le noyau accumbens, les mêmes circuits profonds de récompense activés par la nourriture ou l\'amour !',
    relatedTopics: ['Physique du son', 'La Voix Humaine', 'Perception des rythmes']
  },
  {
    id: 'voix-humaine-anatomie',
    category: 'voix',
    title: 'La Voix Humaine : Le Premier et Plus Intime Instrument',
    hook: 'Portée au fond de notre gorge, la voix combine en quelques centimètres un soufflet, une anche double vivante et un jeu infini de cavités de résonance modulables.',
    simpleExplanation: 'Pour chanter ou parler, l\'air expulsé de tes poumons par le diaphragme remonte par la trachée et vient faire vibrer deux petits replis de tissu dans ton larynx : les cordes vocales. Le son produit est ensuite sculpté par ta gorge, ta bouche, ta langue et tes lèvres pour former les voyelles et les consonnes.',
    deepExplanation: 'Le système vocal obéit au modèle acoustique Source-Filtre : la source est le larynx (plis vocaux fermés mis en vibration périodique par l\'air sous-glottique selon l\'effet Bernoulli), et le filtre est le conduit vocal supraglottique (pharynx, cavité buccale, cavités nasales). En changeant la position de ta langue et la forme de tes lèvres, tu déplaces les résonances du conduit vocal (les formants F1 et F2), ce qui change la voyelle perçue sans changer la hauteur de la note !',
    technicalDetails: 'Les chanteurs d\'opéra développent un formant acoustique extraordinaire appelé le « formant du chanteur » (autour de 2 800 à 3 200 Hz). L\'orchestre symphonique a son pic d\'énergie vers 500 Hz et s\'atténue fortement au-dessus de 2 000 Hz. En concentrant son énergie dans cette fenêtre spectrale précise, la voix d\'un ténor ou d\'une soprano traverse sans effort le vacarme d\'un orchestre de 90 musiciens sans aucune sonorisation électrique.',
    equationsOrKeyData: [
      {
        formula: 'F_1, F_2, F_3',
        explanation: 'Fréquences de formants : F1 est contrôlé par l\'ouverture de la mâchoire, F2 par l\'avancement ou le recul de la langue.'
      }
    ],
    didYouKnow: 'Chez les moines tibétains et les chanteurs traditionnels de Tuva (chant diphonique Khöömii), le chanteur produit simultanément un bourdon très grave et, en resserrant ses lèvres et sa langue, isole une harmonique aiguë pure au point de donner l\'impression qu\'une flûte joue en même temps que sa voix !',
    relatedTopics: ['Oreille et Cerveau', 'Timbre et Harmoniques', 'Histoire de la Musique']
  }
];

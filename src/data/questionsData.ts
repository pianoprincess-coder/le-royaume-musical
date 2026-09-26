import { BigQuestion } from '../types/music';

export const BIG_QUESTIONS_DATA: BigQuestion[] = [
  {
    id: 'premiere-musique',
    question: 'Quelle est la première musique de l\'humanité ?',
    subtitle: 'Des premiers hululements chamaniques au plus ancien chant gravé sur pierre',
    shortSummary: 'La toute première musique était vocale et corporelle : le chant, le souffle, le claquement des mains et la pulsation des pas lors de rituels partagés par les premiers Homo sapiens il y a plus de 100 000 ans.',
    detailedExplanation: 'Comme le son ne laisse pas de fossiles, les archéologues s\'appuient sur deux repères : la musique matérielle et la musique notée. La plus ancienne partition complète jouable conservée avec paroles et musique est l\'Épitaphe de Seikilos (Grèce antique, Ier-IIe siècle ap. J.-C.), gravée sur une colonne de marbre funéraire. Plus tôt encore, vers 1400 av. J.-C., des scribes d\'Ougarit en Syrie ont noté sur une tablette d\'argile en cunéiforme l\'Hymne hourrite n°6, dédié à la déesse des vergers Nikkal.',
    scientificHistoricalNuance: 'En archéoacoustique, les chercheurs (comme Iégor Reznikoff) ont mesuré la résonance des grottes ornées paléolithiques (Niaux, Chauvet). Ils ont découvert une corrélation statistique frappante : les peintures rupestres d\'animaux sont situées aux endroits précis des parois qui résonnent le plus fortement aux fréquences de la voix masculine (les « nœuds de résonance »), suggérant des rituels chantés où l\'écho guidait les artistes chamanes.',
    sourcesAndEvidence: [
      'Stèle de Tralles (Musée national de Copenhague, inv. 14897)',
      'Tablette d\'argile h.6 du Musée national de Damas',
      'Études archéoacoustiques d\'Iégor Reznikoff dans les grottes de l\'Ariège'
    ],
    relatedTopics: ['Préhistoire & Premiers Souffles', 'Antiquité & Orient', 'La Voix Humaine']
  },
  {
    id: 'premier-instrument',
    question: 'Quel est le plus ancien instrument de musique découvert par les archéologues ?',
    subtitle: 'La flûte en os de vautour de la grotte d\'Hohle Fels (35 000 à 40 000 ans)',
    shortSummary: 'Le plus vieil instrument physique irréfutable au monde est une flûte percée de trous taillée dans un os d\'aile de vautour fauve, découverte en 2008 dans la grotte de Hohle Fels en Allemagne, datée de 35 000 à 40 000 ans.',
    detailedExplanation: 'L\'équipe de l\'archéologue Nicholas Conard a mis au jour 12 fragments d\'un radius de vautour mesurant 22 cm de long. L\'os présente 5 trous digitaux chanfreinés avec une incroyable précision micrométrique et une encoche en V à son embouchure. Les répliques exactes en os testées par des flûtistes produisent des échelles sonores pentatoniques claires, comparables aux gammes modernes.',
    scientificHistoricalNuance: 'Une autre découverte a suscité un vif débat scientifique international : « la flûte néandertalienne de Divje Babe » en Slovénie (~43 000 à 60 000 ans), percée de deux trous sur un fémur de jeune ours des cavernes. Alors que certains y voient l\'œuvre de Néandertal, les taphonomistes ont montré que les trous pourraient avoir été perforés par les crocs puissants d\'une hyène des cavernes mâchant l\'os. La flûte d\'Hohle Fels reste donc le premier chef-d\'œuvre luthier incontestable d\'Homo sapiens.',
    sourcesAndEvidence: [
      'Publication de Nicholas J. Conard dans Nature (2009) : « A female figurine and musical instruments from the earliest Aurignacian at Hohle Fels »',
      'Musée d\'Histoire Préhistorique de Blaubeuren (Bade-Wurtemberg)'
    ],
    relatedTopics: ['Préhistoire', 'Flûte traversière', 'Physique du son']
  },
  {
    id: 'pourquoi-faire-musique',
    question: 'Pourquoi les êtres humains font-ils de la musique ?',
    subtitle: 'Évolution, cohésion tribale, berceuse maternelle et neurobiologie',
    shortSummary: 'La musique n\'est pas un simple divertissement superflu : pour les anthropologues et neurobiologistes, elle a constitué un outil de survie sociale indispensable, servant de ciment émotionnel de groupe bien avant le langage articulé complexe.',
    detailedExplanation: 'Charles Darwin suggérait déjà en 1871 dans *La Filiation de l\'homme* que les ancêtres humains utilisaient des rythmes et modulations vocales pour séduire leurs partenaires (sélection sexuelle). Aujourd\'hui, les chercheurs privilégient deux grandes thèses : l\'hypothèse du lien mère-nourrisson (« le mamanais » chanté apaisant le bébé et régulant son rythme cardiaque) et l\'hypothèse de la synchronisation sociale (« l\'effet feu de camp » : chanter et danser au même rythme sécrète de l\'ocytocine et de l\'endorphine, renforçant la solidarité tribale face aux prédateurs).',
    scientificHistoricalNuance: 'Le neuroscientifique Steven Pinker a qualifié avec provocation la musique de « cheesecake auditif » (un sous-produit accidentel du langage). Pourtant, l\'imagerie cérébrale moderne démontre que la musique mobilise presque toutes les aires cérébrales à la fois : cortex auditif, cortex moteur, lobe frontal de la mémoire, cervelet du rythme et système limbique des émotions. Aucune société humaine sur Terre n\'a jamais existé sans musique.',
    sourcesAndEvidence: [
      'Charles Darwin, The Descent of Man (1871)',
      'Robin Dunbar, Social grooming, language, and the origin of music',
      'Oliver Sacks, Musicophilia: Tales of Music and the Brain'
    ],
    relatedTopics: ['Oreille et Cerveau', 'La Voix Humaine', 'Préhistoire']
  },
  {
    id: 'connaitre-musique-ancienne',
    question: 'Comment peut-on connaître la musique d\'avant l\'invention des enregistrements ?',
    subtitle: 'L\'enquête policière de la musicologie, de l\'archéologie et de l\'iconographie',
    shortSummary: 'Pour reconstituer des mélodies vieilles de plusieurs siècles ou millénaires, les historiens croisent quatre sources indépendantes : les notations musicales déchiffrées, les traités théoriques anciens, les instruments d\'époque rescapés et l\'iconographie des peintures et sculptures.',
    detailedExplanation: 'Avant l\'enregistrement d\'Edison en 1877, aucune onde sonore n\'était capturée. Mais des centaines de milliers de partitions manuscrites et imprimées subsistent dans les bibliothèques d\'Europe, du monde arabe et d\'Asie. Pour savoir comment ces partitions devaient être jouées (tempos, ornements, dynamique), les musicologues étudient les traités de facture et de jeu rédigés par les maîtres d\'époque (comme François Couperin, Carl Philipp Emanuel Bach ou Quantz).',
    scientificHistoricalNuance: 'Le mouvement d\'interprétation historiquement informée (HIP) né dans les années 1960 avec Nikolaus Harnoncourt et Gustav Leonhardt a bouleversé la musique classique : en utilisant de véritables violons baroques montés en boyaux de mouton, des archets légers et des diapasons d\'époque (ex. La = 415 Hz), les musiciens ont redécouvert la respiration originelle des chefs-d\'œuvre de Bach et Vivaldi.',
    sourcesAndEvidence: [
      'Traités historiques : C.P.E. Bach (Versuch über die wahre Art das Clavier zu spielen, 1753)',
      'Instruments conservés au Musée de la Musique (Philharmonie de Paris)',
      'Départements des manuscrits de la Bibliothèque nationale de France (BnF)'
    ],
    relatedTopics: ['Époque Baroque', 'Bibliothèque du Solfège', 'Antonio Stradivari']
  },
  {
    id: 'sept-noms-de-notes',
    question: 'Pourquoi y a-t-il sept noms de notes (Do, Ré, Mi, Fa, Sol, La, Si) ?',
    subtitle: 'De l\'Hymne à Saint Jean-Baptiste de Guido d\'Arezzo aux sept jours de la Création',
    shortSummary: 'Ces syllabes ont été inventées vers 1025 par le moine Guido d\'Arezzo à partir de la première syllabe de chaque hémistiche d\'un hymne latin à Saint Jean-Baptiste chanté par les moines.',
    detailedExplanation: 'Chaque vers de l\'hymne *Ut queant laxis* commençait un degré plus haut que le précédent dans la mélodie. Guido eut l\'idée de génie de donner ces syllabes aux notes : Ut, Ré, Mi, Fa, Sol, La. Vers la fin du XVIe siècle, Anselme de Flandres fusionna les initiales de Sancte Iohannes pour créer la 7e note : SI. Au XVIIe siècle en Italie, Giovanni Battista Doni remplaça UT par DO (plus sonore et aisé à vocaliser car commençant par une consonne dentale).',
    scientificHistoricalNuance: 'Pourquoi 7 notes dans la gamme diatonique plutôt que 6 ou 8 ? La division en 7 degrés est le résultat mathématique de l\'enchaînement de quintes pythagoriciennes qui ne créent que deux demi-tons naturels (Mi-Fa et Si-Do), offrant un équilibre asymétrique parfait indispensable pour que l\'oreille humaine perçoive une note centrale d\'attraction : la Tonique !',
    sourcesAndEvidence: [
      'Guido d\'Arezzo, Epistola ad Michaelem de ignoto cantu (~1028)',
      'Giovanni Battista Doni, Traité de la musique scénique (1635)'
    ],
    relatedTopics: ['Guido d\'Arezzo', 'Bibliothèque du Solfège', 'Galerie des Mathématiques']
  },
  {
    id: 'pourquoi-octave',
    question: 'Pourquoi appelle-t-on l\'intervalle fondamental « Octave » ?',
    subtitle: 'Du latin octava (huitième) : 8 degrés pour retrouver la même couleur de note',
    shortSummary: 'On l\'appelle « octave » parce qu\'il faut gravir 8 degrés successifs dans la gamme diatonique occidentale (Do 1, Ré 2, Mi 3, Fa 4, Sol 5, La 6, Si 7, Do 8) pour retrouver la note de départ deux fois plus aiguë.',
    detailedExplanation: 'Physiquement, l\'octave correspond à un doublement exact de la fréquence de vibration (ratio 2:1). Si le La 3 vibre à 220 Hz, le La 4 supérieur vibre à 440 Hz et le La 5 à 880 Hz. Même si la fréquence est différente, le cerveau humain perçoit ces deux sons comme possédant la même identité harmonique : c\'est le phénomène de circularité de la hauteur ou équivalence d\'octave.',
    scientificHistoricalNuance: 'Cette perception d\'identité est neurologique : la membrane basilaire de la cochlée et le cortex auditif possèdent des cellules stimulées simultanément par les harmoniques paires d\'un son fondamental. Dès qu\'une note vibre à 2f0, elle active les mêmes fibres déjà entraînées par l\'harmonique 2 de la note de base.',
    sourcesAndEvidence: [
      'Hermann von Helmholtz, Théorie physiologique de la musique (1863)',
      'Diana Deutsch, Psychology of Music: Octave Equivalence and Pitch Chroma'
    ],
    relatedTopics: ['Galerie des Mathématiques', 'Oreille et Cerveau', 'Physique du son']
  },
  {
    id: 'pourquoi-douze-demi-tons',
    question: 'Pourquoi l\'échelle occidentale divise-t-elle l\'octave en 12 demi-tons ?',
    subtitle: 'La rencontre magique de l\'arithmétique, de l\'acoustique et du cercle des quintes',
    shortSummary: 'La division en 12 demi-tons est la solution mathématique optimale pour concilier la pureté acoustique des quintes (ratio 3/2) et des octaves (ratio 2/1) avec le plus petit nombre de touches possible.',
    detailedExplanation: 'Si l\'on part d\'un son et que l\'on monte de quinte en quinte (Do → Sol → Ré → La → Mi → Si → Fa# → Do# → Sol# → Ré# → La# → Mi# / Fa), il faut exactement 12 quintes successives pour faire le tour de toutes les hauteurs et revenir quasiment à la note de départ après avoir parcouru 7 octaves. 12 est le plus petit entier qui permet d\'avoir à la fois des quintes quasi pures, des quartes justes et des tierces jouables dans un système transposant.',
    scientificHistoricalNuance: 'D\'autres civilisations ont choisi d\'autres découpages : la musique arabe divise l\'octave en 24 quarts de ton pour intégrer les subtilités du maqâm, et la musique savante indienne identifie 22 micro-intervalles nommés shrutis. Les 12 demi-tons occidentaux sont un choix culturel et harmonique dicté par l\'essor de la polyphonie et de la modulation tonale.',
    sourcesAndEvidence: [
      'Al-Farabi, Kitab al-Musiqa al-Kabir (Le Grand Livre de la Musique, Xe siècle)',
      'Marin Mersenne, Harmonie Universelle (1636)'
    ],
    relatedTopics: ['Tempérament égal', 'Pythagore', 'Monde Arabe & Maqâm']
  },
  {
    id: 'pourquoi-440-hz',
    question: 'Pourquoi le diapason de référence est-il fixé à 440 Hz ?',
    subtitle: 'La guerre historique des diapasons : du La baroque à 415 Hz au standard international ISO 16',
    shortSummary: 'Le La 4 à 440 Hz a été officialisé internationalement en 1939 à Londres puis adopté par l\'ISO en 1955 afin de mettre fin à des siècles de pagaille où chaque ville et facteur accordait ses instruments à sa propre hauteur.',
    detailedExplanation: 'À l\'époque baroque, il n\'existait aucun diapason universel : le « ton de chambre » oscillait souvent entre 415 Hz (en France et Allemagne) et 460 Hz (dans certaines églises vénitiennes). Au XIXe siècle, les fabricants d\'instruments de cuivre et les directeurs d\'opéra augmentaient continuellement la tension des instruments (parfois jusqu\'à 455 Hz à Londres) pour que l\'orchestre sonne plus brillant et spectaculaire... au point de détruire les cordes vocales des ténors et cantatrices !',
    scientificHistoricalNuance: 'En 1859, la France intervint par décret impérial sous Napoléon III et fixa le « diapason normal » à 435 Hz (à 15°C). Puis en mai 1939, une conférence internationale d\'acousticiens réunie à Londres recommanda le standard de 440 Hz (car à une température de salle de 20°C, le 435 Hz français montait naturellement vers 440 Hz). Contrairement à des rumeurs conspirationnistes sur Internet prétendant que le 432 Hz serait une « fréquence cosmique sacrée », 440 Hz est simplement une convention industrielle pratique.',
    sourcesAndEvidence: [
      'Décret impérial du 16 février 1859 instituant en France le diapason normal',
      'Norme internationale ISO 16:1975 (Acoustique — Fréquence d\'accord normale)'
    ],
    relatedTopics: ['Physique du son', 'La Voix Humaine', 'Facture instrumentale']
  },
  {
    id: 'pourquoi-piano-88-touches',
    question: 'Pourquoi le piano moderne possède-t-il exactement 88 touches ?',
    subtitle: '7 octaves et un quart : les frontières biologiques de l\'oreille humaine',
    shortSummary: 'Le piano compte 88 touches (52 blanches et 36 noires, allant du La 0 à 27.5 Hz jusqu\'au Do 7 à 4 186 Hz) parce qu\'au-delà de ces deux bornes, l\'oreille humaine ne distingue plus la hauteur musicale d\'une note.',
    detailedExplanation: 'Les premiers pianofortes de Cristofori en 1700 n\'avaient que 49 à 54 touches (4 octaves). Mozart composait pour un piano à 5 octaves (61 touches), et Beethoven réclamait sans cesse des instruments plus étendus à son facteur viennois Streicher. C\'est la prestigieuse manufacture Steinway & Sons qui a standardisé le clavier à 88 touches à la fin des années 1880.',
    scientificHistoricalNuance: 'L\'oreille humaine entend théoriquement entre 20 Hz et 20 000 Hz. Mais pour la perception de la hauteur mélodique (pitch chroma), au-dessous de 27.5 Hz, le son n\'est plus perçu comme une note mais comme un vrombissement mécanique de battement d\'air. Au-dessus de 4 200 Hz, la membrane basilaire de la cochlée ne parvient plus à synchroniser les impulsions nerveuses (perte du verrouillage de phase neuronale) : la note n\'est plus perçue que comme un clic perçant sans couleur musicale !',
    sourcesAndEvidence: [
      'Manufacture Steinway & Sons Archives (1888 standard)',
      'Brian C.J. Moore, An Introduction to the Psychology of Hearing'
    ],
    relatedTopics: ['Piano à queue de concert', 'Oreille et Cerveau', 'Lois de Mersenne']
  }
];

import { TechMilestone } from '../types/music';

export const TECHNOLOGY_MILESTONES: TechMilestone[] = [
  {
    id: 'imprimerie-musicale',
    year: '1501',
    invention: 'Imprimerie musicale à caractères mobiles (Harmonice Musices Odhecaton)',
    inventors: ['Ottaviano Petrucci (Venise)'],
    mechanism: 'Système de triple impression successive : d\'abord les lignes de la portée en rouge/noir, puis les notes et ligatures, puis le texte poétique.',
    problemSolved: 'La copie manuelle des manuscrits sur vélin était lente, hors de prix, sujette à d\'innombrables erreurs de scribes et réservée aux princes richissimes.',
    impactOnCreation: 'Les compositeurs peuvent désormais signer leurs œuvres et acquérir une réputation européenne fulgurante (comme Josquin des Prés).',
    impactOnDiffusion: 'Diffusion continentale des partitions dans les églises de village et les demeures bourgeoises.',
    beforeState: 'Quelques dizaines de copies manuscrites uniques au monde par cathédrale.',
    afterState: 'Des centaines d\'exemplaires identiques circulant simultanément dans toute l\'Europe en quelques semaines.',
    relatedTopics: ['Josquin des Prés', 'Renaissance Musicale', 'Bibliothèque du Solfège']
  },
  {
    id: 'phonautographe',
    year: '1857',
    invention: 'Le Phonautographe (Premier enregistrement visuel du son)',
    inventors: ['Édouard-Léon Scott de Martinville (Paris)'],
    mechanism: 'Un pavillon acoustique dirige le son vers une membrane souple munie d\'un stylet en soie de sanglier qui trace les ondulations sonores sur une feuille de papier enduite de noir de fumée tournant sur un cylindre.',
    problemSolved: 'Fixer la vibration éphémère de la voix humaine pour l\'étudier scientifiquement sans passer par la transcription d\'un scribe.',
    impactOnCreation: 'Naissance de l\'analyse acoustique graphique moderne.',
    impactOnDiffusion: 'Aucune diffusion publique à l\'époque car l\'inventeur ne cherchait pas à rejouer le son, mais seulement à l\'écrire graphiquement (« autographie de la voix »). En 2008, des chercheurs américains ont réussi à rejouer optiquement son enregistrement d\'*Au clair de la lune* gravé le 9 avril 1860, 17 ans avant Edison !',
    beforeState: 'Le son meurt aussitôt qu\'il est émis dans l\'air sans laisser aucune trace matérielle.',
    afterState: 'La vibration acoustique devient un sillon matériel quantifiable et visible.',
    relatedTopics: ['Physique du son', 'Thomas Edison', 'La Voix Humaine']
  },
  {
    id: 'phonographe-edison',
    year: '1877',
    invention: 'Le Phonographe à cylindre (Premier appareil capable de réécouter le son)',
    inventors: ['Thomas Alva Edison (Menlo Park, New Jersey)'],
    mechanism: 'Un diaphragme récepteur transmet les vibrations de la voix à une pointe en acier qui grave un sillon en profondeur sur une feuille d\'étain (puis sur un cylindre de cire). À la lecture, une aiguille suit le relief et fait vibrer le diaphragme en sens inverse pour restituer la parole.',
    problemSolved: 'Pouvoir RÉÉCOUTER le son à volonté après l\'avoir enregistré.',
    impactOnCreation: 'Choc philosophique mondial : la voix survit à l\'instant de son émission. Première phrase enregistrée : « Mary had a little lamb ».',
    impactOnDiffusion: 'Premières tournées de démonstration foraine où les foules ébahies pensent avoir affaire à un ventriloque caché.',
    beforeState: 'Pour écouter de la musique, la présence physique vivante d\'un musicien était indispensable.',
    afterState: 'La musique se détache du corps physique de son interprète pour la première fois dans l\'Histoire humaine.',
    relatedTopics: ['Gramophone de Berliner', 'Technologies Musicales', 'Grandes Questions']
  },
  {
    id: 'gramophone-berliner',
    year: '1887',
    invention: 'Le Gramophone et le Disque plat',
    inventors: ['Emile Berliner (Washington / Hanovre)'],
    mechanism: 'Gravure latérale (horizontale et non plus en profondeur) sur un disque plat en zinc, permettant de fabriquer une matrice métallique négative (le « master ») capable de presser des milliers de copies en gomme-laque (shellac) à chaud.',
    problemSolved: 'Les cylindres d\'Edison devaient être réenregistrés un par un ou copiés laborieusement ; le disque plat permet enfin la production industrielle de masse.',
    impactOnCreation: 'Création des premiers contrats d\'artistes enregistrés et naissance de l\'industrie mondiale du disque (Victor Talking Machine, Gramophone Company).',
    impactOnDiffusion: 'Explosion des disques 78 tours dans les foyers (durée maximale : 3 à 4 minutes par face, ce qui façonne durablement la longueur des chansons pop !).',
    beforeState: 'Enregistrement artisanal sur cylindre individuel fragile et encombrant.',
    afterState: 'Pressage industriel de millions de disques plats standardisés faciles à stocker.',
    relatedTopics: ['Disque Vinyle', 'Thomas Edison', 'Histoire du XXe siècle']
  },
  {
    id: 'bande-magnetique',
    year: '1935',
    invention: 'Le Magnétophone à bande magnétique',
    inventors: ['Fritz Pfleumer (Dresde) et firme AEG / BASF'],
    mechanism: 'Ruban en matière plastique (acétate puis polyester) recouvert d\'une fine couche d\'oxyde de fer magnétisable défilant devant une tête d\'enregistrement électromagnétique.',
    problemSolved: 'Le disque gravé directement ne tolérait aucune erreur d\'interprétation. La bande magnétique permet d\'effacer, de réenregistrer et surtout de COUPER et COLLER le ruban aux ciseaux pour monter le passage parfait !',
    impactOnCreation: 'Révolution du studio : naissance du montage audio, du réenregistrement multipiste (Les Paul), des échos à bande et de la musique concrète de Pierre Schaeffer.',
    impactOnDiffusion: 'Radiodiffusion de haute fidélité sans craquements de cire ou de gomme-laque.',
    beforeState: 'Prise de son en direct d\'un seul jet gravée irrémédiablement dans la cire.',
    afterState: 'Le studio devient un instrument de composition et de montage chirurgical.',
    relatedTopics: ['Musique concrète', 'Disque Vinyle', 'Cassette audio']
  },
  {
    id: 'disque-vinyle-lp',
    year: '1948',
    invention: 'Le Disque Microsillon Vinyle (Long Play 33 tours)',
    inventors: ['Dr. Peter Goldmark et équipe d\'ingénieurs de Columbia Records'],
    mechanism: 'Disque en polychlorure de vinyle (PVC) gravé de microsillons d\'une finesse extrême (environ 200 à 300 spires par pouce) lu par une pointe diamant légère sous 2 grammes de pression.',
    problemSolved: 'Les anciens 78 tours cassaient comme du verre et ne contenaient que 4 minutes par face, obligeant à changer de disque au milieu d\'un mouvement de symphonie.',
    impactOnCreation: 'Naissance du concept de « l\'Album » musical : 23 minutes par face, permettant d\'écouter un concerto ou un chef-d\'œuvre entier sans interruption.',
    impactOnDiffusion: 'Âge d\'or de la discophilie, de la haute-fidélité (Hi-Fi) et des pochettes artistiques de 30 cm devenues des icônes d\'art moderne.',
    beforeState: 'Albums de 5 ou 6 disques 78 tours cassables et lourds pour une seule symphonie.',
    afterState: 'Un seul disque souple, incassable, restituant une dynamique et une bande passante stéréo éblouissantes.',
    relatedTopics: ['Gramophone', 'Compact Disc', 'Haute-Fidélité acoustique']
  },
  {
    id: 'compact-disc',
    year: '1982',
    invention: 'Le Compact Disc (CD audio numérique)',
    inventors: ['Consortium Philips (Pays-Bas) et Sony (Japon, sous l\'impulsion de Norio Ohga)'],
    mechanism: 'Disque optique en polycarbonate de 12 cm de diamètre gravé d\'alvéoles microscopiques (pits) lues sans contact par un faisceau laser infrarouge. Signal numérisé en PCM linéaire 16 bits à une fréquence d\'échantillonnage de 44.1 kHz.',
    problemSolved: 'Élimination totale des craquements, des bruits de surface, de l\'usure mécanique du diamant et du pleurage de vitesse.',
    impactOnCreation: 'Dynamique spectaculaire de 96 dB et silence absolu entre les morceaux ; fixation de la durée standard à 74 minutes (spécialement calibrée pour contenir la 9e Symphonie de Beethoven dirigée par Karajan sans coupure !).',
    impactOnDiffusion: 'Le plus foudroyant succès technologique de l\'histoire de la musique enregistrée, avec des milliards d\'exemplaires vendus.',
    beforeState: 'Supports analogiques sensibles aux rayures, à la poussière et à la dégradation progressive.',
    afterState: 'La musique devient une suite universelle de 0 et de 1 immuable et indestructible par simple lecture laser.',
    relatedTopics: ['Théorème d\'échantillonnage de Nyquist-Shannon', 'Format MP3', 'Streaming']
  },
  {
    id: 'midi-et-mao',
    year: '1983',
    invention: 'Protocole MIDI (Musical Instrument Digital Interface)',
    inventors: ['Dave Smith (Sequential Circuits) et Ikutaro Kakehashi (Roland)'],
    mechanism: 'Norme de communication sérielle numérique transmettant non pas du son audio, mais des ordres d\'interprétation (Note On, Note Off, Vélocité de frappe, Pitch Bend, Canal) entre synthétiseurs, boîtes à rythmes et ordinateurs.',
    problemSolved: 'Auparavant, chaque constructeur utilisait ses propres tensions analogiques incompatibles, empêchant les instruments de marques rivales de dialoguer.',
    impactOnCreation: 'Révolution totale : un seul musicien dans sa chambre peut piloter un orchestre électronique entier depuis un ordinateur (Atari ST, Mac, PC). Naissance de la MAO (Musique Assistée par Ordinateur).',
    impactOnDiffusion: 'Poids de fichier minuscule (quelques kilo-octets pour une symphonie entière) facilitant l\'essor des premières banques de partitions sur Internet.',
    beforeState: 'Matériel cloisonné, jeux impossibles à synchroniser en direct sans câblages propriétaires complexes.',
    afterState: 'Tous les instruments électroniques de la planète parlent désormais la même langue universelle.',
    relatedTopics: ['Robert Moog', 'Synthétiseur', 'Stations audio-numériques modernes']
  }
];

export interface NoteSyllableHistory {
  syllable: string;
  modernName: string;
  latinVerse: string;
  frenchTranslation: string;
  originNote: string;
}

export const GUIDO_HYMN_VERSES: NoteSyllableHistory[] = [
  {
    syllable: 'UT',
    modernName: 'DO (ou Ut)',
    latinVerse: 'UT queant laxis',
    frenchTranslation: 'Afin que puissent d\'une voix détendue',
    originNote: 'C'
  },
  {
    syllable: 'RE',
    modernName: 'RÉ',
    latinVerse: 'REsonare fibris',
    frenchTranslation: 'Faire résonner les cordes de leurs cœurs',
    originNote: 'D'
  },
  {
    syllable: 'MI',
    modernName: 'MI',
    latinVerse: 'MIra gestorum',
    frenchTranslation: 'Les merveilles de tes exploits',
    originNote: 'E'
  },
  {
    syllable: 'FA',
    modernName: 'FA',
    latinVerse: 'FAmuli tuorum',
    frenchTranslation: 'Tes serviteurs émerveillés',
    originNote: 'F'
  },
  {
    syllable: 'SOL',
    modernName: 'SOL',
    latinVerse: 'SOLve polluti',
    frenchTranslation: 'Efface la souillure',
    originNote: 'G'
  },
  {
    syllable: 'LA',
    modernName: 'LA',
    latinVerse: 'LAbii reatum',
    frenchTranslation: 'De leurs lèvres pécheresses',
    originNote: 'A'
  },
  {
    syllable: 'SI',
    modernName: 'SI (ajout XVIe)',
    latinVerse: 'Sancte Iohannes',
    frenchTranslation: 'Ô Saint Jean-Baptiste !',
    originNote: 'B'
  }
];

export interface NoteValueItem {
  name: string;
  beats: number;
  fraction: string;
  restEquivalent: string;
  description: string;
}

export const NOTE_VALUES: NoteValueItem[] = [
  {
    name: 'Ronde',
    beats: 4,
    fraction: '1 unité entière',
    restEquivalent: 'Pause (rectangle suspendu sous la 4e ligne)',
    description: 'Tête de note ovale et blanche sans hampe. Vaut 2 blanches, 4 noires ou 8 croches.'
  },
  {
    name: 'Blanche',
    beats: 2,
    fraction: '1/2',
    restEquivalent: 'Demi-pause (rectangle posé sur la 3e ligne)',
    description: 'Tête de note ovale blanche munie d\'une hampe verticale. Vaut la moitié d\'une ronde.'
  },
  {
    name: 'Noire',
    beats: 1,
    fraction: '1/4',
    restEquivalent: 'Soupir (éclair stylisé ondulant)',
    description: 'Unité fondamentale de pulsation dans les mesures à temps binaire (4/4, 3/4). Tête pleine noire avec hampe.'
  },
  {
    name: 'Croche',
    beats: 0.5,
    fraction: '1/8',
    restEquivalent: 'Demi-soupir (crochet vers la droite avec point)',
    description: 'Tête pleine munie d\'une hampe et d\'un crochet (ou crochetée par une barre horizontale commune).'
  },
  {
    name: 'Double croche',
    beats: 0.25,
    fraction: '1/16',
    restEquivalent: 'Quart de soupir (deux crochets superposés)',
    description: 'Possède deux crochets (ou deux barres de liaison parallèles). Il en faut 4 pour faire une noire.'
  },
  {
    name: 'Triple croche',
    beats: 0.125,
    fraction: '1/32',
    restEquivalent: 'Huitième de soupir (trois crochets)',
    description: 'Trois crochets superposés. Utilisée pour les passages virtuoses, arpèges et ornements rapides.'
  }
];

export interface ClefDefinition {
  name: string;
  originLetter: string;
  standardLine: string;
  vocalRange: string;
  instrumentsUsed: string[];
  explanation: string;
}

export const CLEF_DEFINITIONS: ClefDefinition[] = [
  {
    name: 'Clé de Sol',
    originLetter: 'G stylisé médiéval',
    standardLine: '2e ligne de la portée',
    vocalRange: 'Voix aiguës féminines et enfantines (soprano, alto)',
    instrumentsUsed: ['Violon', 'Flûte traversière', 'Hautbois', 'Clarinette', 'Main droite du piano'],
    explanation: 'Elle enroule sa boucle centrale autour de la 2e ligne en partant du bas, désignant solennellement que toute note posée sur cette ligne est un Sol 3 (392 Hz).'
  },
  {
    name: 'Clé de Fa',
    originLetter: 'F stylisé médiéval avec deux points',
    standardLine: '4e ligne de la portée',
    vocalRange: 'Voix graves masculines (baryton, basse)',
    instrumentsUsed: ['Violoncelle', 'Contrebasse', 'Basson', 'Trombone', 'Tuba', 'Main gauche du piano'],
    explanation: 'Ses deux points encadrent la 4e ligne, fixant sur celle-ci la note Fa 2 (174.6 Hz).'
  },
  {
    name: 'Clé d\'Ut (Alto & Ténor)',
    originLetter: 'C gothique articulé',
    standardLine: '3e ligne (alto) ou 4e ligne (ténor)',
    vocalRange: 'Voix intermédiaires',
    instrumentsUsed: ['Alto (cordes)', 'Trombone ténor', 'Violoncelle dans l\'aigu'],
    explanation: 'La pointe centrale de la clé désigne l\'emplacement exact du Do central (Do 3 / C4 à 261.6 Hz), évitant la prolifération de lignes supplémentaires.'
  }
];

export interface TheoryCadence {
  name: string;
  chordProgression: string;
  sensoryEffect: string;
  explanation: string;
}

export const THEORY_CADENCES: TheoryCadence[] = [
  {
    name: 'Cadence Parfaite (V → I)',
    chordProgression: 'Dominante vers Tonique',
    sensoryEffect: 'Conclusion définitive, repos absolu, point final.',
    explanation: 'La note sensible (7e degré) monte d\'un demi-ton vers la tonique, relâchant toute la tension harmonique accumulée.'
  },
  {
    name: 'Cadence Plagale (IV → I)',
    chordProgression: 'Sous-dominante vers Tonique',
    sensoryEffect: 'Apaisement solennel, conclusion sacrée (l\'« Amen » liturgique).',
    explanation: 'Le 4e degré rejoint le 1er degré sans passer par la tension acérée de la dominante.'
  },
  {
    name: 'Cadence Rompue / Évitée (V → VI)',
    chordProgression: 'Dominante vers le 6e degré',
    sensoryEffect: 'Surprise dramatique, suspension de l\'attente.',
    explanation: 'L\'oreille attend la délivrance sur le 1er degré, mais le compositeur dévie sur le 6e degré mineur, relançant le discours poétique.'
  },
  {
    name: 'Demi-Cadence (? → V)',
    chordProgression: 'N\'importe quel degré s\'arrêtant sur V',
    sensoryEffect: 'Point d\'interrogation, virgule dans la phrase musicale.',
    explanation: 'La mélodie s\'arrête sur la dominante en suspens, obligeant la musique à poursuivre pour trouver sa résolution.'
  }
];

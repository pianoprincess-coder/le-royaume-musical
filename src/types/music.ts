export type SectionId = 
  | 'accueil'
  | 'histoire'
  | 'instruments'
  | 'solfege'
  | 'theorie'
  | 'science'
  | 'voix'
  | 'mathematiques'
  | 'cerveau'
  | 'technologie'
  | 'personnalites'
  | 'questions'
  | 'apprendre';

export interface MusicalPeriod {
  id: string;
  name: string;
  subtitle: string;
  dates: string;
  region: string;
  context: string;
  keyInnovations: string[];
  musicalPractices: string;
  before: string;
  appearance: string;
  evolution: string;
  after: string;
  majorFigures: string[];
  emblematicInstruments: string[];
  representativeWorks: { title: string; composer: string; date: string; description: string }[];
  culturalLinks: string;
}

export interface InstrumentPart {
  name: string;
  location: string;
  material: string;
  acousticRole: string;
}

export interface MusicalInstrument {
  id: string;
  name: string;
  category: 'cordophone' | 'aerophone' | 'membranophone' | 'idiophone' | 'electrophone';
  subcategory: string;
  originRegion: string;
  approximateDate: string;
  ancestors: string[];
  inventorOrLuthier?: string;
  materials: string[];
  soundMechanism: string;
  soundChain: string[]; // e.g. ["Touche", "Marteau", "Corde", "Chevalet", "Table d'harmonie", "Air"]
  anatomy: InstrumentPart[];
  culturalRole: string;
  historicalEvolution: string;
  descendantsOrVariants: string[];
  relatedTopics: string[];
}

export interface MusicalFigure {
  id: string;
  name: string;
  lifespan: string;
  birthPlace: string;
  roles: string[];
  era: string;
  historicalContext: string;
  mainContributions: string[];
  keyWorksOrInventions: { title: string; year?: string; details: string }[];
  influencesReceived: string[];
  influencesExerted: string[];
  quotesOrTestimonies?: string;
  relatedTopics: string[];
}

export interface TechMilestone {
  id: string;
  year: string;
  invention: string;
  inventors: string[];
  mechanism: string;
  problemSolved: string;
  impactOnCreation: string;
  impactOnDiffusion: string;
  beforeState: string;
  afterState: string;
  relatedTopics: string[];
}

export interface BigQuestion {
  id: string;
  question: string;
  subtitle: string;
  shortSummary: string; // Niveau 1
  detailedExplanation: string; // Niveau 2
  scientificHistoricalNuance: string; // Niveau 3
  sourcesAndEvidence: string[];
  relatedTopics: string[];
}

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  section: SectionId;
  preview: string;
  tags: string[];
}

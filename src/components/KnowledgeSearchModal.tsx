import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, Music, Sparkles } from 'lucide-react';
import { SectionId, SearchItem } from '../types/music';

interface KnowledgeSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (section: SectionId, topicId?: string) => void;
}

export const KnowledgeSearchModal: React.FC<KnowledgeSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  // Comprehensive index of knowledge entries
  const searchIndex: SearchItem[] = useMemo(() => [
    // Histoire
    { id: 'prehistoire', title: 'Préhistoire & Premiers Souffles (Flûte de Hohle Fels)', category: 'Histoire', section: 'histoire', preview: 'La naissance du geste musical il y a plus de 35 000 ans.', tags: ['aurignacien', 'os de vautour', 'chamanisme'] },
    { id: 'antiquite-orient', title: 'Mésopotamie, Sumer & Égypte (Chant hourrite n°6)', category: 'Histoire', section: 'histoire', preview: 'La plus ancienne partition notée connue de l\'humanité (~1400 av. J.-C.).', tags: ['ougarit', 'cunéiforme', 'harpe', 'ur'] },
    { id: 'grece-rome', title: 'Grèce Antique, Rome & Épitaphe de Seikilos', category: 'Histoire', section: 'histoire', preview: 'Pythagore, l\'hymne de Seikilos et la première théorie des modes.', tags: ['seikilos', 'pythagore', 'kithara', 'aulos', 'hydraule'] },
    { id: 'moyen-age', title: 'Moyen Âge & Éveil de la Polyphonie', category: 'Histoire', section: 'histoire', preview: 'Chant grégorien, neumes, Guido d\'Arezzo et l\'Ars Nova de Machaut.', tags: ['grégorien', 'notre-dame', 'machaut', 'hildegard'] },
    { id: 'renaissance', title: 'Renaissance Musicale & Imprimerie', category: 'Histoire', section: 'histoire', preview: 'Josquin des Prés, Palestrina et l\'Harmonice Musices Odhecaton de Petrucci.', tags: ['josquin', 'palestrina', 'madrigal', 'petrucci'] },
    { id: 'baroque', title: 'Époque Baroque & Naissance de l\'Opéra', category: 'Histoire', section: 'histoire', preview: 'Monteverdi, la basse continue, Vivaldi, J.S. Bach et Cristofori.', tags: ['bach', 'vivaldi', 'monteverdi', 'clavecin', 'fugue'] },
    { id: 'classicisme', title: 'Période Classique & Triomphe de la Symphonie', category: 'Histoire', section: 'histoire', preview: 'Haydn, Mozart, forme sonate et quatuor à cordes.', tags: ['mozart', 'haydn', 'beethoven', 'sonate'] },
    { id: 'romantisme', title: 'Le Romantisme Musical & Piano Virtuose', category: 'Histoire', section: 'histoire', preview: 'Chopin, Schubert, Liszt, Wagner et le piano à cadre en fonte.', tags: ['chopin', 'liszt', 'wagner', 'tchaïkovski'] },
    { id: 'maroc-amazigh', title: 'Maroc & Monde Amazigh (Gnawa, Ahwash, Guembri)', category: 'Musiques du Monde', section: 'histoire', preview: 'Patrimoine amazigh millénaire, cérémonie de la Lila Gnawa et musique arabo-andalouse.', tags: ['maroc', 'gnawa', 'guembri', 'ahidous', 'ahwash', 'andalou'] },
    { id: 'arabe-orient', title: 'Monde Arabe & Le Système du Maqâm', category: 'Musiques du Monde', section: 'histoire', preview: 'Oud, quarts de ton, Al-Farabi, Ziryab et l\'extase esthétique (Tarab).', tags: ['maqam', 'oud', 'ziryab', 'al-farabi', 'nay'] },
    { id: 'inde-classique', title: 'Inde Classique (Rāga & Tāla)', category: 'Musiques du Monde', section: 'histoire', preview: 'Sāma-Veda, sitar, tambura, 22 shrutis et cycles rythmiques.', tags: ['raga', 'tala', 'sitar', 'tabla', 'shrutis'] },
    
    // Instruments
    { id: 'piano', title: 'Piano à queue de concert & Mécanisme Cristofori', category: 'Instruments', section: 'instruments', preview: 'Anatomie : touche, échappement, marteau, cordes d\'acier, table d\'harmonie.', tags: ['cristofori', 'marteau', 'corde', 'clavier', '88 touches'] },
    { id: 'violon', title: 'Violon Classique & Baroque (Stradivarius)', category: 'Instruments', section: 'instruments', preview: 'Frottement stick-slip d\'Helmholtz, âme, chevalet, barre d\'harmonie, ouïes en f.', tags: ['stradivari', 'archet', 'colophane', 'âme', 'ouïes'] },
    { id: 'oud', title: 'Oud oriental (Luth arabe à 5 ou 6 choeurs)', category: 'Instruments', section: 'instruments', preview: 'Caisse en côtes assemblées, table en épicéa, manche sans frettes pour le maqâm.', tags: ['luth', 'risha', 'ziryab', 'maqam'] },
    { id: 'guembri', title: 'Guembri / Sintir (Basse sacrée Gnawa)', category: 'Instruments', section: 'instruments', preview: 'Bois monoxyle de peuplier, peau de dromadaire, boyaux de chèvre et sarsar.', tags: ['sintir', 'gnawa', 'maroc', 'dromadaire'] },
    { id: 'kora', title: 'Kora mandingue (Harpe-luth d\'Afrique de l\'Ouest)', category: 'Instruments', section: 'instruments', preview: '21 cordes en deux rangées parallèles sur demi-calebasse et peau de vache.', tags: ['griot', 'mali', 'calebasse', 'mandingue'] },
    { id: 'flute-traversiere', title: 'Flûte traversière & Système Boehm', category: 'Instruments', section: 'instruments', preview: 'Biseau tranchant, tourbillon hydrodynamique et clétage Boehm.', tags: ['boehm', 'biseau', 'argent', 'air'] },
    { id: 'theremin', title: 'Thérémine & Synthétiseur Analogique Moog', category: 'Instruments', section: 'instruments', preview: 'Antennes capacitives radiofréquences et filtre en échelle Moog.', tags: ['moog', 'thérémine', 'oscillateur', 'filtre'] },

    // Solfège
    { id: 'guido-hymne', title: 'Guido d\'Arezzo & Origine de Ut, Ré, Mi, Fa, Sol, La, Si', category: 'Solfège', section: 'solfege', preview: 'L\'Hymne à Saint Jean-Baptiste (Ut queant laxis) et la transformation de Ut en Do.', tags: ['guido', 'hymne', 'do', 'ut', 'si', 'solmisation'] },
    { id: 'portee-cles', title: 'La Portée Musicale & Les Clés (Sol, Fa, Ut)', category: 'Solfège', section: 'solfege', preview: 'Repères des hauteurs absolues : Clé de Sol 2e ligne, Clé de Fa 4e ligne, Clé d\'Ut.', tags: ['clef', 'fa', 'sol', 'lignes', 'hauteur'] },
    { id: 'rythme-valeurs', title: 'Figures de Notes & Silences (Ronde, Blanche, Noire...)', category: 'Solfège', section: 'solfege', preview: 'Découpage du temps : 4 temps, 2 temps, 1 temps, fractions et pulsations.', tags: ['ronde', 'noire', 'croche', 'silence', 'mesure'] },
    { id: 'cadences-harmonie', title: 'Les Cadences Musicales (Parfaite, Plagale, Rompue)', category: 'Solfège', section: 'solfege', preview: 'La ponctuation de l\'harmonie occidentale : repos, surprise et suspension.', tags: ['cadence', 'dominante', 'tonique', 'harmonie'] },

    // Sciences
    { id: 'nature-du-son', title: 'Physique du Son : Onde de Pression et Vitesse', category: 'Sciences', section: 'science', preview: 'Propagation mécanique dans l\'air à 343 m/s et équation c = λ · f.', tags: ['onde', 'pression', 'décibels', 'hertz', 'vitesse'] },
    { id: 'timbre-et-harmoniques', title: 'Timbre & Décomposition Spectrale de Fourier', category: 'Sciences', section: 'science', preview: 'Pourquoi une flûte et un violon sonnent différemment sur la même note.', tags: ['fourier', 'harmoniques', 'spectre', 'transitoires'] },
    { id: 'lois-de-mersenne', title: 'Lois de Mersenne : Pourquoi une Corde Vibre à telle Fréquence', category: 'Sciences', section: 'science', preview: 'Formule reliant longueur L, tension T et masse linéique μ.', tags: ['mersenne', 'corde', 'tension', 'fréquence'] },
    { id: 'pythagore-et-mathematiques', title: 'Pythagore & Le Comma Pythagoricien', category: 'Mathématiques', section: 'science', preview: 'Rapports 2:1 et 3:2 : pourquoi 12 quintes ne font pas 7 octaves.', tags: ['pythagore', 'monocorde', 'comma', 'quinte'] },
    { id: 'temperament-egal-formule', title: 'Le Tempérament Égal et la Formule : f_n = f_0 × 2^(n/12)', category: 'Mathématiques', section: 'science', preview: 'La racine douzième de 2 et le partage géométrique des 12 demi-tons.', tags: ['tempérament', 'bach', 'demi-tons', 'formule'] },
    { id: 'oreille-et-cerveau', title: 'Oreille Interne, Cochlée & Cerveau Musical', category: 'Sciences', section: 'science', preview: 'Tympan, osselets, cellules ciliées tonotopiques et sécrétion de dopamine.', tags: ['cochlée', 'tympan', 'cerveau', 'dopamine', 'cortex'] },
    { id: 'voix-humaine-anatomie', title: 'La Voix Humaine : Souffle, Plis Vocaux & Formants', category: 'Sciences', section: 'science', preview: 'Effet Bernoulli dans le larynx et formant du chanteur à 3000 Hz.', tags: ['voix', 'larynx', 'cordes vocales', 'formant', 'chanteur'] },

    // Inventions
    { id: 'imprimerie-musicale', title: '1501 : Imprimerie Musicale (Ottaviano Petrucci)', category: 'Technologies', section: 'technologie', preview: 'Caractères mobiles de musique et diffusion européenne des partitions.', tags: ['petrucci', 'imprimerie', 'partition'] },
    { id: 'phonautographe', title: '1857 : Le Phonautographe (Scott de Martinville)', category: 'Technologies', section: 'technologie', preview: 'Le premier enregistrement visuel du son 17 ans avant Edison.', tags: ['martinville', 'au clair de la lune', 'phonautographe'] },
    { id: 'phonographe-edison', title: '1877 : Le Phonographe d\'Edison', category: 'Technologies', section: 'technologie', preview: 'La première machine capable de réécouter la voix enregistrée.', tags: ['edison', 'cylindre', 'cire'] },
    { id: 'gramophone-berliner', title: '1887 : Le Gramophone et le Disque Plat (Emile Berliner)', category: 'Technologies', section: 'technologie', preview: 'Invention de la matrice master et pressage industriel des 78 tours.', tags: ['berliner', 'disque', 'gramophone'] },
    { id: 'disque-vinyle-lp', title: '1948 : Le Disque Microsillon Vinyle 33 Tours', category: 'Technologies', section: 'technologie', preview: 'Columbia Records et la naissance de l\'album musical complet.', tags: ['vinyle', 'lp', 'hi-fi'] },
    { id: 'compact-disc', title: '1982 : Le Compact Disc (CD Audio Numérique Sony/Philips)', category: 'Technologies', section: 'technologie', preview: 'Codage PCM 16 bits 44.1 kHz et lecture optique par laser.', tags: ['cd', 'numérique', 'laser', 'sony', 'philips'] },

    // Grandes Questions
    { id: 'sept-noms-de-notes', title: 'Pourquoi sept noms de notes (Do, Ré, Mi, Fa, Sol, La, Si) ?', category: 'Grandes Questions', section: 'questions', preview: 'Origine historique et explication acoustique de l\'échelle diatonique.', tags: ['sept notes', 'pourquoi'] },
    { id: 'pourquoi-octave', title: 'Pourquoi appelle-t-on cela une « Octave » ?', category: 'Grandes Questions', section: 'questions', preview: '8 degrés diatoniques et doublement de fréquence perçu identique.', tags: ['octave', 'pourquoi'] },
    { id: 'pourquoi-douze-demi-tons', title: 'Pourquoi 12 demi-tons dans l\'octave occidentale ?', category: 'Grandes Questions', section: 'questions', preview: 'La boucle arithmétique optimale des quintes et des octaves.', tags: ['12 demi-tons', 'tempérament'] },
    { id: 'pourquoi-440-hz', title: 'Pourquoi le diapason de référence est-il fixé à 440 Hz ?', category: 'Grandes Questions', section: 'questions', preview: 'L\'histoire mouvementée de Londres 1939 et de la norme ISO 16.', tags: ['440 hz', 'diapason'] },
    { id: 'pourquoi-piano-88-touches', title: 'Pourquoi le piano moderne a-t-il 88 touches ?', category: 'Grandes Questions', section: 'questions', preview: 'Les limites physiologiques de discrimination fréquentielle de l\'oreille.', tags: ['88 touches', 'piano'] }
  ], []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.preview.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query, searchIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl border border-[#EDCED8] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#F4D2DD] flex items-center gap-3 bg-[#FFF9FA]">
          <Search className="w-5 h-5 text-[#9F2D55] shrink-0" />
          <input
            type="text"
            placeholder="Rechercher un instrument, compositeur, équation, période, question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-[#2A1620] placeholder-[#9D7182] focus:outline-hidden"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-[#8A5467] hover:text-[#321723] cursor-pointer"
            >
              Effacer
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-[#8A5467] hover:bg-[#FCEAEF] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 divide-y divide-[#F7E1E8]">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#7F5263]">
              <p className="font-serif italic text-sm mb-2 text-[#462734]">
                « Entrez un mot-clé pour explorer les savoirs du Royaume. »
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 max-w-md mx-auto mt-3">
                {['Piano', 'Pythagore', 'Guido d\'Arezzo', '440 Hz', 'Maqâm', 'Guembri', 'Fourier', 'Bach', 'Mersenne'].map(sugg => (
                  <button
                    key={sugg}
                    onClick={() => setQuery(sugg)}
                    className="px-2.5 py-1 rounded-md bg-[#FFF0F4] border border-[#F3CAD8] text-[11px] text-[#892F4E] hover:bg-[#FCE3EC] cursor-pointer"
                  >
                    {sugg}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#7F5263]">
              Aucun résultat pour « {query} ». Essayez avec un mot plus général (ex. corde, note, clé, onde).
            </div>
          ) : (
            filteredResults.map(res => (
              <div
                key={res.id}
                onClick={() => {
                  onSelectResult(res.section, res.id);
                  onClose();
                }}
                className="pt-2 first:pt-0 p-2.5 rounded-xl hover:bg-[#FFF6F8] transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#9F2D55] font-semibold">
                    <span>{res.category}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#301622] group-hover:text-[#9F2D55] transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#6A4755] line-clamp-1">
                    {res.preview}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C4869D] group-hover:text-[#9F2D55] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

        {/* Footer info in modal */}
        <div className="p-3 bg-[#FAF5F7] border-t border-[#F2D7DF] text-[11px] text-[#7A5060] flex items-center justify-between">
          <span>{filteredResults.length} résultats indexés</span>
          <span>Touche Échap pour fermer</span>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { audioEngine } from '../utils/audioEngine';
import { SectionId } from '../types/music';
import { Music, Volume2, Sparkles, RefreshCw, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface LearningStudioProps {
  onClose?: () => void;
  onNavigate: (section: SectionId) => void;
}

interface KeyConfig {
  note: string;
  frenchName: string;
  isBlack: boolean;
  semitoneOffset: number; // from A4 (440Hz)
  octave: number;
}

export const LearningStudio: React.FC<LearningStudioProps> = ({ onClose, onNavigate }) => {
  const [selectedTimbre, setSelectedTimbre] = useState<OscillatorType>('triangle');
  const [lastPlayedNote, setLastPlayedNote] = useState<{ name: string; freq: number } | null>(null);

  // Ear training game state
  const [quizSecretNote, setQuizSecretNote] = useState<string>('C');
  const [quizSecretFreq, setQuizSecretFreq] = useState<number>(261.63);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // 17 keys from C3 to E5
  const keys: KeyConfig[] = [
    { note: 'C', frenchName: 'Do 3', isBlack: false, semitoneOffset: -21, octave: 3 },
    { note: 'C#', frenchName: 'Do# 3', isBlack: true, semitoneOffset: -20, octave: 3 },
    { note: 'D', frenchName: 'Ré 3', isBlack: false, semitoneOffset: -19, octave: 3 },
    { note: 'D#', frenchName: 'Ré# 3', isBlack: true, semitoneOffset: -18, octave: 3 },
    { note: 'E', frenchName: 'Mi 3', isBlack: false, semitoneOffset: -17, octave: 3 },
    { note: 'F', frenchName: 'Fa 3', isBlack: false, semitoneOffset: -16, octave: 3 },
    { note: 'F#', frenchName: 'Fa# 3', isBlack: true, semitoneOffset: -15, octave: 3 },
    { note: 'G', frenchName: 'Sol 3', isBlack: false, semitoneOffset: -14, octave: 3 },
    { note: 'G#', frenchName: 'Sol# 3', isBlack: true, semitoneOffset: -13, octave: 3 },
    { note: 'A', frenchName: 'La 3', isBlack: false, semitoneOffset: -12, octave: 3 },
    { note: 'A#', frenchName: 'La# 3', isBlack: true, semitoneOffset: -11, octave: 3 },
    { note: 'B', frenchName: 'Si 3', isBlack: false, semitoneOffset: -10, octave: 3 },

    { note: 'C', frenchName: 'Do 4 (Central)', isBlack: false, semitoneOffset: -9, octave: 4 },
    { note: 'C#', frenchName: 'Do# 4', isBlack: true, semitoneOffset: -8, octave: 4 },
    { note: 'D', frenchName: 'Ré 4', isBlack: false, semitoneOffset: -7, octave: 4 },
    { note: 'D#', frenchName: 'Ré# 4', isBlack: true, semitoneOffset: -6, octave: 4 },
    { note: 'E', frenchName: 'Mi 4', isBlack: false, semitoneOffset: -5, octave: 4 },
    { note: 'F', frenchName: 'Fa 4', isBlack: false, semitoneOffset: -4, octave: 4 },
    { note: 'F#', frenchName: 'Fa# 4', isBlack: true, semitoneOffset: -3, octave: 4 },
    { note: 'G', frenchName: 'Sol 4', isBlack: false, semitoneOffset: -2, octave: 4 },
    { note: 'G#', frenchName: 'Sol# 4', isBlack: true, semitoneOffset: -1, octave: 4 },
    { note: 'A', frenchName: 'La 4 (Diapason)', isBlack: false, semitoneOffset: 0, octave: 4 },
    { note: 'A#', frenchName: 'La# 4', isBlack: true, semitoneOffset: 1, octave: 4 },
    { note: 'B', frenchName: 'Si 4', isBlack: false, semitoneOffset: 2, octave: 4 },

    { note: 'C', frenchName: 'Do 5', isBlack: false, semitoneOffset: 3, octave: 5 }
  ];

  const handlePlayKey = (k: KeyConfig) => {
    const freq = Number((440 * Math.pow(2, k.semitoneOffset / 12)).toFixed(2));
    audioEngine.playTone(freq, 1.2, selectedTimbre, 0.3);
    setLastPlayedNote({ name: k.frenchName, freq });
  };

  const startNewQuizNote = () => {
    const possibleNotes = [
      { name: 'DO', letter: 'C', freq: 261.63 },
      { name: 'RÉ', letter: 'D', freq: 293.66 },
      { name: 'MI', letter: 'E', freq: 329.63 },
      { name: 'FA', letter: 'F', freq: 349.23 },
      { name: 'SOL', letter: 'G', freq: 392.00 },
      { name: 'LA', letter: 'A', freq: 440.00 },
      { name: 'SI', letter: 'B', freq: 493.88 }
    ];
    const picked = possibleNotes[Math.floor(Math.random() * possibleNotes.length)];
    setQuizSecretNote(picked.name);
    setQuizSecretFreq(picked.freq);
    setQuizFeedback(null);
    audioEngine.playTone(picked.freq, 1.4, 'triangle', 0.35);
  };

  const handleReplayQuiz = () => {
    audioEngine.playTone(quizSecretFreq, 1.4, 'triangle', 0.35);
  };

  const handleGuess = (guessedName: string) => {
    if (guessedName === quizSecretNote) {
      setQuizFeedback(`Bravo ! C'était bien le ${quizSecretNote} (${quizSecretFreq} Hz).`);
      setQuizScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setQuizFeedback(`Ce n'était pas le ${guessedName}, mais le ${quizSecretNote} (${quizSecretFreq} Hz). Écoutez la différence.`);
      setQuizScore(prev => ({ correct: prev.correct, total: prev.total + 1 }));
    }
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-8 border-b border-[#F2D1DC] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A24467] font-medium mb-1">
            <span>Studio Sonore & Conservatoire Virtuel</span>
            <span aria-hidden="true">·</span>
            <span>Clavier Interactif & Entraînement de l'Oreille</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1620]">
            Pratique Musicale & Acoustique Active
          </h2>
          <p className="text-sm text-[#6F4E5A] mt-1 max-w-2xl">
            Touchez les cordes virtuelles, comparez les timbres d'harmoniques et entraînez votre cortex auditif à reconnaître les fréquences pures.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#FFF0F4] text-[#8F254B] hover:bg-[#FCE6EE] border border-[#F4CDDB] transition-all cursor-pointer self-start sm:self-auto"
          >
            Fermer le studio
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Playable Acoustic Keyboard */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#EDCED8] p-6 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F4D2DE] pb-4">
            <div>
              <h3 className="text-xl font-serif font-bold text-[#301622]">
                Clavier Acoustique Polyphonique
              </h3>
              <p className="text-xs text-[#7A5060]">
                Chaque touche applique fidèlement l'équation du tempérament égal : f_n = 440 × 2^(n/12)
              </p>
            </div>

            {/* Timbre Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#844D60] font-medium">Timbre :</span>
              <div className="flex p-0.5 bg-[#FFF0F4] rounded-lg border border-[#F4CED9]">
                {[
                  { id: 'triangle', label: 'Piano' },
                  { id: 'sine', label: 'Flûte' },
                  { id: 'sawtooth', label: 'Clavecin' }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTimbre(t.id as OscillatorType)}
                    className={`px-2.5 py-1 rounded text-xs transition-all cursor-pointer ${
                      selectedTimbre === t.id
                        ? 'bg-[#9F2D55] text-white font-medium shadow-2xs'
                        : 'text-[#6C4B57] hover:text-[#2E141F]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Last note telemetry */}
          <div className="p-3 rounded-xl bg-[#FFF9FA] border border-[#F3DBE3] flex items-center justify-between text-xs font-mono">
            <span className="text-[#7E4C5F]">Note jouée :</span>
            {lastPlayedNote ? (
              <span className="font-bold text-[#8F254B]">
                {lastPlayedNote.name} — {lastPlayedNote.freq} Hz
              </span>
            ) : (
              <span className="text-[#9C7182] italic">Touchez une touche du clavier ci-dessous...</span>
            )}
          </div>

          {/* Virtual Piano Keys Container */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="relative h-48 min-w-[560px] flex select-none bg-[#F7F1F3] p-2 rounded-xl border border-[#EACCD7]">
              {keys.map((k, idx) => {
                if (k.isBlack) return null; // rendered in overlay
                return (
                  <button
                    key={idx}
                    onClick={() => handlePlayKey(k)}
                    className="relative flex-1 bg-white hover:bg-[#FFF2F5] active:bg-[#FCD8E3] border border-[#D8BAC6] rounded-b-lg shadow-sm flex flex-col justify-end items-center pb-2 text-[10px] font-mono text-[#5A3845] transition-all cursor-pointer"
                    title={`${k.frenchName} (${Number((440 * Math.pow(2, k.semitoneOffset / 12)).toFixed(1))} Hz)`}
                  >
                    <span className="font-bold">{k.note}</span>
                    <span className="text-[9px] text-[#A06E80]">{k.octave}</span>
                  </button>
                );
              })}

              {/* Black keys overlaid on top */}
              {keys.map((k, idx) => {
                if (!k.isBlack) return null;
                // calculate left percentage offset
                const whiteIndex = keys.filter((key, i) => !key.isBlack && i < idx).length;
                const leftPercent = ((whiteIndex - 0.3) / 15) * 100;

                return (
                  <button
                    key={idx}
                    onClick={() => handlePlayKey(k)}
                    style={{ left: `${leftPercent}%` }}
                    className="absolute top-2 w-[4.5%] h-28 bg-[#2A1621] hover:bg-[#4E2337] active:bg-[#722A4C] rounded-b-md shadow-md z-10 transition-all cursor-pointer flex flex-col justify-end items-center pb-1 text-[8px] font-mono text-white"
                    title={`${k.frenchName} (${Number((440 * Math.pow(2, k.semitoneOffset / 12)).toFixed(1))} Hz)`}
                  >
                    <span>#</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#7B4D5F] pt-2 border-t border-[#F5D5E0]">
            <span>Diapason standard de référence : <strong>La 4 = 440 Hz</strong></span>
            <span>Do central = <strong>Do 4 (261.63 Hz)</strong></span>
          </div>

        </div>

        {/* Right Side: Ear Training Module */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-[#EDCED8] p-6 shadow-sm space-y-5 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-[#F4D2DE] pb-3">
              <h3 className="text-xl font-serif font-bold text-[#301622]">
                Entraînement de l'Oreille
              </h3>
              <span className="text-xs font-mono text-[#8F254B] bg-[#FFF0F4] px-2 py-0.5 rounded border border-[#F4CED9]">
                Score : {quizScore.correct} / {quizScore.total}
              </span>
            </div>

            <p className="text-xs text-[#6F4957] leading-relaxed mb-4">
              Écoutez la note mystère générée par le synthétiseur et tentez de l'identifier parmi les sept degrés diatoniques.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={startNewQuizNote}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#9F2D55] hover:bg-[#852345] text-white rounded-xl text-xs font-semibold cursor-pointer shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nouvelle note</span>
              </button>

              <button
                onClick={handleReplayQuiz}
                className="py-2.5 px-3 bg-[#FCECEF] hover:bg-[#F9DCE4] text-[#8F254B] border border-[#F2CAD7] rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5"
                title="Réécouter la note mystère"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Réécouter</span>
              </button>
            </div>

            {/* Note Choice Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {['DO', 'RÉ', 'MI', 'FA', 'SOL', 'LA', 'SI'].map(n => (
                <button
                  key={n}
                  onClick={() => handleGuess(n)}
                  className="py-2 px-2 bg-[#FFF7F9] hover:bg-[#FCE6EE] border border-[#F2D7DF] rounded-lg text-xs font-serif font-bold text-[#351825] hover:text-[#9F2D55] transition-all cursor-pointer text-center"
                >
                  {n}
                </button>
              ))}
            </div>

            {/* Feedback Message */}
            {quizFeedback && (
              <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                quizFeedback.startsWith('Bravo')
                  ? 'bg-[#EBF7F0] border-[#C3E8D1] text-[#1E6B3D]'
                  : 'bg-[#FFF0F3] border-[#F4CCD8] text-[#8F254B]'
              }`}>
                {quizFeedback}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#F5D5E0] text-xs">
            <button
              onClick={() => onNavigate('solfege')}
              className="flex items-center justify-between w-full font-semibold text-[#8F254B] hover:text-[#5F122E] transition-colors cursor-pointer"
            >
              <span>Réviser la théorie du solfège</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

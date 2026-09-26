/**
 * Web Audio API synthesizer engine for Le Royaume Musical
 * Provides pure physical acoustics, tone synthesis, harmonic series demonstrations,
 * tuning comparisons (Pythagorean vs Equal temperament), and instrument sound modeling.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private metronomeTimer: number | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * Play a clean musical note with realistic envelope
   */
  public playTone(freq: number, duration = 1.0, type: OscillatorType = 'sine', gainLevel = 0.3) {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Envelope: gentle attack, decay, release
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainLevel, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("AudioContext error:", e);
    }
  }

  /**
   * Play a chord (array of frequencies)
   */
  public playChord(frequencies: number[], duration = 1.5) {
    frequencies.forEach((freq) => {
      this.playTone(freq, duration, 'triangle', 0.25 / frequencies.length * 1.5);
    });
  }

  /**
   * Demonstrate Fourier / Harmonic series:
   * Plays the fundamental f0 and consecutive integer harmonics (2f0, 3f0, 4f0, 5f0...)
   */
  public playHarmonicsDemo(f0: number, numHarmonics = 6) {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    for (let n = 1; n <= numHarmonics; n++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const startTime = now + (n - 1) * 0.35;
      const duration = 2.0;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f0 * n, startTime);

      // Higher harmonics naturally decrease in amplitude (1/n)
      const targetGain = (0.25 / n);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(targetGain, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    }
  }

  /**
   * Compare Temperaments:
   * Equal Temperament Major Third vs Just/Pythagorean Third
   * Pure Major Third ratio is 5/4 = 1.25. Equal temp major third is 2^(4/12) ≈ 1.25992 (14 cents sharp!)
   */
  public playTemperamentComparison(baseFreq = 261.63, isPure = false) {
    const thirdFreq = isPure ? baseFreq * 1.25 : baseFreq * Math.pow(2, 4 / 12);
    this.playChord([baseFreq, thirdFreq], 2.0);
  }

  /**
   * Interactive Metronome
   */
  public startMetronome(bpm: number, onBeat?: (beatNumber: number) => void) {
    this.stopMetronome();
    const intervalMs = (60 / bpm) * 1000;
    let count = 0;

    const tick = () => {
      const isDownbeat = count % 4 === 0;
      this.playTone(isDownbeat ? 880 : 440, 0.08, 'sine', isDownbeat ? 0.35 : 0.2);
      if (onBeat) onBeat((count % 4) + 1);
      count++;
    };

    tick();
    this.metronomeTimer = window.setInterval(tick, intervalMs);
  }

  public stopMetronome() {
    if (this.metronomeTimer !== null) {
      clearInterval(this.metronomeTimer);
      this.metronomeTimer = null;
    }
  }

  /**
   * Converts note name to standard frequency (A4 = 440 Hz)
   */
  public noteToFreq(note: string, octave = 4): number {
    const noteMap: Record<string, number> = {
      'C': -9, 'C#': -8, 'Db': -8,
      'D': -7, 'D#': -6, 'Eb': -6,
      'E': -5,
      'F': -4, 'F#': -3, 'Gb': -3,
      'G': -2, 'G#': -1, 'Ab': -1,
      'A': 0, 'A#': 1, 'Bb': 1,
      'B': 2
    };

    const semitonesFromA4 = (noteMap[note] ?? 0) + (octave - 4) * 12;
    return 440 * Math.pow(2, semitonesFromA4 / 12);
  }
}

export const audioEngine = new SoundEngine();

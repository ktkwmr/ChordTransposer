// Note-spelling helpers for the tables in the guide pages (capo chart, key chart).
// Chords are written with # and b, the same as the app's output.

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const LETTER_PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const MAJOR_STEPS = [0, 2, 4, 5, 7, 9, 11];

export const pc = (note) => {
  const m = note.match(/^([A-G])(#|b)?$/);
  if (!m) throw new Error("bad note " + note);
  return (LETTER_PC[m[1]] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0) + 12) % 12;
};

// The 12 major keys, spelled the usual way (5 flat keys, F# for the 6-accidental key)
export const MAJOR_KEYS = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
// Relative minor keys in the same order
export const MINOR_KEYS = ["Am", "Bbm", "Bm", "Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m"];

// Major key whose tonic is the given pitch class
export const majorKeyFor = (p) => MAJOR_KEYS.find((k) => pc(k) === ((p % 12) + 12) % 12);
export const minorKeyFor = (p) => MINOR_KEYS.find((k) => pc(k.slice(0, -1)) === ((p % 12) + 12) % 12);

// Scale of a major key spelled with one letter per degree (e.g. F# → F# G# A# B C# D# E#)
export function majorScale(tonic) {
  const start = LETTERS.indexOf(tonic[0]);
  const tpc = pc(tonic);
  return MAJOR_STEPS.map((step, i) => {
    const letter = LETTERS[(start + i) % 7];
    let diff = ((tpc + step - LETTER_PC[letter]) % 12 + 12) % 12;
    if (diff > 6) diff -= 12;
    const acc = diff === 0 ? "" : diff === 1 ? "#" : diff === -1 ? "b" : diff === 2 ? "##" : "bb";
    return letter + acc;
  });
}

// Diatonic triads: I ii iii IV V vi vii°
export function diatonicChords(tonic) {
  const s = majorScale(tonic);
  return [s[0], s[1] + "m", s[2] + "m", s[3], s[4], s[5] + "m", s[6] + "dim"];
}

// Shortest shift from one key to another, as the app's semitone value (-5 … +6)
export function shortestShift(from, to) {
  let d = ((pc(to) - pc(from)) % 12 + 12) % 12;
  if (d > 6) d -= 12;
  return d;
}

export const signed = (n) => (n > 0 ? "+" + n : n < 0 ? "−" + -n : "0");

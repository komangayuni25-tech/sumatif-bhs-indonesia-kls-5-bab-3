/**
 * Definisi Type & Interface Aplikasi Tes Sumatif
 * Kurikulum Merdeka - Bahasa Indonesia Kelas 5
 */

export type QuestionType = 'pg' | 'pgk_kategori' | 'benar_salah' | 'pgk';
export type Difficulty = 'Mudah' | 'Sedang' | 'Sukar';
export type CognitiveLevel = 'L1' | 'L2' | 'L3'; // L1 (Pemahaman), L2 (Aplikasi), L3 (Penalaran)

export interface StudentBirthDate {
  hari: string;
  bulan: string;
  tahun: string;
}

export interface StudentIdentity {
  nama: string;
  noAbsen: string;
  tglLahir: StudentBirthDate;
}

export interface OptionItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export interface StatementItem {
  id: string; // e.g. 's1', 's2', 's3'
  text: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  image?: string; // Gambar/Diagram visual SVG atau URL ilustrasi edukatif
  options?: OptionItem[]; // Untuk 'pg' (4 opsi)
  statements?: StatementItem[]; // Untuk 'pgk_kategori' (3 pernyataan)
  correctAnswer?: string | string[]; // string untuk 'pg' (e.g. 'A' / 'B' / 'C' / 'D')
  difficulty: Difficulty;
  explanation: string;
  topic: string; // e.g. 'Teks Prosedur', 'Menulis Surat', 'Awalan Me-', dsb.
  elemen?: string; // Elemen Capaian Pembelajaran (Membaca dan Memirsa, Menulis, Menyimak, Berbicara)
  tp?: string; // Tujuan Pembelajaran
  indikator?: string; // Indikator Soal
  levelKognitif?: CognitiveLevel; // L1 / L2 / L3
  skorBobot?: number; // Bobot skor (1 untuk PG, 3 untuk PGK Kategori)
}

export interface ShuffledQuestion extends Question {
  originalQuestionId: number;
  shuffledOptions?: OptionItem[];
}

export type AnswerValue = string | string[] | Record<string, boolean>;

export interface ExamResult {
  id?: string;
  timestamp: string;
  nama: string;
  noAbsen: string;
  kelas: string;
  tglLahir?: string;
  benar: number;
  salah: number;
  nilai: number;
  status: 'Lulus' | 'Belum Lulus';
  durasiPengerjaan?: string; // e.g. "18 menit 45 detik"
  detailJawaban?: Record<number, AnswerValue>; // keyed by original question ID (1..45)
  detailSkor?: Record<number, number>; // score per question ID (e.g. 1, 0, or partial 0.33/0.67)
}

export type AppStage = 1 | 2 | 3 | 4;

export interface ItemAnalysisStats {
  questionId: number;
  totalAnswered: number;
  correctCount: number;
  percentage: number; // 0 - 100
  empiricalDifficulty: 'Mudah' | 'Sedang' | 'Sukar'; // >70% Mudah, 30-70% Sedang, <30% Sukar
}

export interface StudentWeaknessAnalysis {
  weakTopics: {
    topic: string;
    totalQuestions: number;
    wrongCount: number;
    indicators: string[];
  }[];
  recommendations: string[];
}

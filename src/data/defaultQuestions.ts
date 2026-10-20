import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA (25 SOAL)
  // ==========================================

  // --- SOAL 1 ---
  {
    id: 1,
    type: 'pg',
    topic: 'Kosakata Ragam Hobi',
    difficulty: 'Mudah',
    text: 'Perhatikan infografik hobi pada gambar di atas!\nSeseorang yang memiliki kegemaran mengumpulkan dan mempelajari berbagai jenis prangko pos dari berbagai penjuru dunia disebut sebagai seorang...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="140" y="10" width="140" height="26" rx="6" fill="#1E40AF"/>
      <text x="210" y="27" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">RAGAM HOBI POPULER</text>
      <!-- Stamp card -->
      <g transform="translate(35, 45)">
        <rect x="0" y="0" width="105" height="75" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4 2"/>
        <circle cx="52" cy="30" r="16" fill="#BFDBFE"/>
        <text x="52" y="34" font-size="16" text-anchor="middle">📮</text>
        <text x="52" y="58" font-size="10.5" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Koleksi Prangko</text>
        <text x="52" y="69" font-size="8.5" fill="#3B82F6" text-anchor="middle">Filateli</text>
      </g>
      <!-- Origami card -->
      <g transform="translate(157, 45)">
        <rect x="0" y="0" width="105" height="75" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.5"/>
        <circle cx="52" cy="30" r="16" fill="#BBF7D0"/>
        <text x="52" y="34" font-size="16" text-anchor="middle">🦢</text>
        <text x="52" y="58" font-size="10.5" font-weight="bold" fill="#15803D" text-anchor="middle">Melipat Kertas</text>
        <text x="52" y="69" font-size="8.5" fill="#16A34A" text-anchor="middle">Origami</text>
      </g>
      <!-- Kuliner card -->
      <g transform="translate(280, 45)">
        <rect x="0" y="0" width="105" height="75" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.5"/>
        <circle cx="52" cy="30" r="16" fill="#FDE68A"/>
        <text x="52" y="34" font-size="16" text-anchor="middle">🍳</text>
        <text x="52" y="58" font-size="10.5" font-weight="bold" fill="#B45309" text-anchor="middle">Seni Memasak</text>
        <text x="52" y="69" font-size="8.5" fill="#D97706" text-anchor="middle">Tata Boga</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Filateli' },
      { id: 'B', text: 'Fotografi' },
      { id: 'C', text: 'Kolektor lukisan' },
      { id: 'D', text: 'Bibliografi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam Bahasa Indonesia Bab 3 tentang ragam hobi, filateli adalah istilah untuk hobi atau kegemaran mengumpulkan dan meneliti prangko serta benda pos lainnya. Orang yang menekuni hobi ini disebut filatelis.',
  },

  // --- SOAL 2 ---
  {
    id: 2,
    type: 'pg',
    topic: 'Kosakata Ragam Hobi',
    difficulty: 'Mudah',
    text: 'Siti sangat senang melipat selembar kertas warna-warni menjadi bentuk bangau, katak, dan bunga tanpa menggunakan gunting maupun lem.\nSeni keterampilan melipat kertas tradisional yang berasal dari Jepang tersebut dinamakan...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#FDF4FF" stroke="#F0ABFC" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="95" rx="10" fill="#FFFFFF" stroke="#E879F9" stroke-width="1.5"/>
        <text x="80" y="32" font-size="28" text-anchor="middle">🕊️</text>
        <text x="80" y="58" fill="#86198F" font-size="12" font-weight="bold" text-anchor="middle">Melipat Kertas</text>
        <text x="80" y="76" fill="#A21CAF" font-size="9.5" text-anchor="middle">Kertas Warna Bujur Sangkar</text>
      </g>
      <g transform="translate(210, 25)">
        <rect x="0" y="0" width="180" height="26" rx="6" fill="#C026D3"/>
        <text x="90" y="17" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">Ciri Khas Seni Ini:</text>
        <text x="0" y="44" fill="#701A75" font-size="10">✓ Menggunakan kertas khusus</text>
        <text x="0" y="62" fill="#701A75" font-size="10">✓ Mengandalkan teknik lipatan presisi</text>
        <text x="0" y="80" fill="#701A75" font-size="10">✓ Melatih konsentrasi &amp; motorik halus</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Kaligrafi' },
      { id: 'B', text: 'Origami' },
      { id: 'C', text: 'Mozaik' },
      { id: 'D', text: 'Anyaman' },
    ],
    correctAnswer: 'B',
    explanation:
      'Origami adalah seni melipat kertas yang berasal dari Jepang. Kata origami berasal dari bahasa Jepang: "ori" berarti melipat, dan "kami" berarti kertas.',
  },

  // --- SOAL 3 ---
  {
    id: 3,
    type: 'pg',
    topic: 'Kamus Besar Bahasa Indonesia (KBBI)',
    difficulty: 'Sedang',
    text: 'Perhatikan alur pencarian kata dalam KBBI pada bagan di atas!\nJika Putu ingin mencari makna kata "menggunting" di dalam Kamus Besar Bahasa Indonesia (KBBI), langkah pertama yang tepat adalah mencari kata tersebut di bawah huruf abjad...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="110" y="10" width="200" height="24" rx="6" fill="#0F172A"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">CARA MENCARI KATA DI KBBI</text>
      <!-- Step 1 -->
      <g transform="translate(25, 45)">
        <rect x="0" y="0" width="110" height="72" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="55" y="20" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">1. Kata Berimbuhan</text>
        <text x="55" y="40" fill="#78350F" font-size="11" font-weight="extrabold" text-anchor="middle">"menggunting"</text>
        <text x="55" y="58" fill="#92400E" font-size="9" text-anchor="middle">Lepas awalan "meng-"</text>
      </g>
      <text x="148" y="85" fill="#64748B" font-size="18" font-weight="bold">→</text>
      <!-- Step 2 -->
      <g transform="translate(165, 45)">
        <rect x="0" y="0" width="105" height="72" rx="8" fill="#DBEAFE" stroke="#3B82F6"/>
        <text x="52" y="20" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">2. Kata Dasar</text>
        <text x="52" y="42" fill="#1E3A8A" font-size="13" font-weight="extrabold" text-anchor="middle">"gunting"</text>
        <text x="52" y="58" fill="#2563EB" font-size="9" text-anchor="middle">Huruf awal: G</text>
      </g>
      <text x="282" y="85" fill="#64748B" font-size="18" font-weight="bold">→</text>
      <!-- Step 3 -->
      <g transform="translate(298, 45)">
        <rect x="0" y="0" width="100" height="72" rx="8" fill="#DCFCE7" stroke="#16A34A"/>
        <text x="50" y="20" fill="#15803D" font-size="10" font-weight="bold" text-anchor="middle">3. Buka Entri</text>
        <text x="50" y="42" fill="#166534" font-size="12" font-weight="extrabold" text-anchor="middle">Abjad [ G ]</text>
        <text x="50" y="58" fill="#14532D" font-size="9" text-anchor="middle">Temukan turunan kata</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Huruf M, karena kata berawalan "meng-"' },
      { id: 'B', text: 'Huruf G, karena kata dasarnya adalah "gunting"' },
      { id: 'C', text: 'Huruf U, karena huruf vokal pertama adalah u' },
      { id: 'D', text: 'Huruf T, karena suku kata kedua adalah ting' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk mencari makna kata berimbuhan dalam Kamus Besar Bahasa Indonesia (KBBI), kita harus terlebih dahulu mencari KATA DASARNYA. Kata "menggunting" berasal dari kata dasar "gunting". Oleh karena itu, kita mencarinya pada kelompok huruf abjad G.',
  },

  // --- SOAL 4 ---
  {
    id: 4,
    type: 'pg',
    topic: 'Kosakata Istilah Bidang Hobi',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi perlengkapan hobi fotografi di atas!\nIstilah dalam fotografi yang merujuk pada sasaran atau benda/makhluk hidup yang dibidik oleh kamera untuk diambil fotonya disebut...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
      <!-- Camera diagram -->
      <g transform="translate(40, 22)">
        <rect x="0" y="15" width="100" height="65" rx="8" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
        <rect x="30" y="5" width="40" height="12" rx="3" fill="#334155"/>
        <circle cx="50" cy="48" r="22" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
        <circle cx="50" cy="48" r="12" fill="#0C4A6E"/>
        <text x="50" y="93" fill="#94A3B8" font-size="9" font-weight="bold" text-anchor="middle">Kamera &amp; Lensa</text>
      </g>
      <!-- Lens ray -->
      <path d="M 145 70 L 250 45 L 250 95 Z" fill="#0284C7" opacity="0.15"/>
      <line x1="145" y1="70" x2="250" y2="70" stroke="#38BDF8" stroke-dasharray="3 3"/>
      <!-- Target Object -->
      <g transform="translate(265, 20)">
        <rect x="0" y="0" width="120" height="85" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="60" y="38" font-size="26" text-anchor="middle">🌺</text>
        <text x="60" y="60" fill="#F8FAFC" font-size="11" font-weight="bold" text-anchor="middle">Bunga Teratai</text>
        <text x="60" y="74" fill="#38BDF8" font-size="9" font-weight="bold" text-anchor="middle">(Sasaran Bidikan)</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Objek' },
      { id: 'B', text: 'Lensa' },
      { id: 'C', text: 'Sudut pandang' },
      { id: 'D', text: 'Diafragma' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam dunia fotografi, sasaran, benda, atau orang yang dibidik dan difokuskan oleh fotografer dinamakan "objek". Lensa adalah bagian kamera, sedangkan sudut pandang adalah posisi pengambilan foto.',
  },

  // --- SOAL 5 ---
  {
    id: 5,
    type: 'pg',
    topic: 'Kosakata Ragam Hobi',
    difficulty: 'Mudah',
    text: 'Bacalah kalimat rumpang berikut!\n"Ibu membuat syal yang hangat untuk adik dengan merangkai benang ... menggunakan sepasang jarum rajut."\nKata yang tepat untuk melengkapi kalimat rumpang di atas adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="90" height="90" rx="12" fill="#FEE2E2" stroke="#F87171"/>
        <circle cx="45" cy="40" r="22" fill="#EF4444"/>
        <text x="45" y="46" font-size="18" text-anchor="middle">🧶</text>
        <text x="45" y="75" fill="#991B1B" font-size="10" font-weight="bold" text-anchor="middle">Benang Rajut</text>
      </g>
      <g transform="translate(135, 25)">
        <rect x="0" y="0" width="255" height="30" rx="6" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="12" y="20" fill="#1E40AF" font-size="11" font-weight="bold">Hobi: Kesenian Merajut</text>
        <text x="5" y="52" fill="#334155" font-size="11">Alat utama: jarum rajut (hakpen / breien)</text>
        <text x="5" y="70" fill="#334155" font-size="11">Bahan utama: benang serat tebal &amp; hangat</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'kawat' },
      { id: 'B', text: 'wol' },
      { id: 'C', text: 'senar' },
      { id: 'D', text: 'tambang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Benang wol adalah jenis benang lembut dan tebal berbahan bulu domba atau serat sintetis yang umum digunakan dalam hobi merajut syal, topi, atau sweter hangat.',
  },

  // --- SOAL 6 ---
  {
    id: 6,
    type: 'pg',
    topic: 'Ciri-Ciri Teks Prosedur',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram ciri teks prosedur di atas!\nTujuan utama dari penulisan teks prosedur adalah untuk...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="10" width="160" height="26" rx="6" fill="#047857"/>
      <text x="210" y="27" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">TEKS PROSEDUR</text>
      <!-- 3 Characteristics -->
      <g transform="translate(25, 48)">
        <rect x="0" y="0" width="115" height="70" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="57" y="22" font-size="14" text-anchor="middle">📋</text>
        <text x="57" y="42" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Struktur Runtut</text>
        <text x="57" y="58" fill="#047857" font-size="8.5" text-anchor="middle">Langkah sistematis</text>
      </g>
      <g transform="translate(152, 48)">
        <rect x="0" y="0" width="115" height="70" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="57" y="22" font-size="14" text-anchor="middle">🎯</text>
        <text x="57" y="42" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Panduan Tindakan</text>
        <text x="57" y="58" fill="#047857" font-size="8.5" text-anchor="middle">Membuat / melakukan</text>
      </g>
      <g transform="translate(280, 48)">
        <rect x="0" y="0" width="115" height="70" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="57" y="22" font-size="14" text-anchor="middle">📢</text>
        <text x="57" y="42" fill="#065F46" font-size="10" font-weight="bold" text-anchor="middle">Bahasa Imperatif</text>
        <text x="57" y="58" fill="#047857" font-size="8.5" text-anchor="middle">Kalimat perintah jelas</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Menceritakan riwayat hidup seorang tokoh seniman' },
      { id: 'B', text: 'Menjelaskan petunjuk langkah demi langkah untuk membuat atau melakukan sesuatu secara berurutan' },
      { id: 'C', text: 'Menggambarkan keindahan pemandangan alam dengan kata puitis' },
      { id: 'D', text: 'Menyampaikan pendapat pribadi dalam perdebatan hangat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Teks prosedur bertujuan untuk memberikan panduan langkah demi langkah yang runtut, jelas, dan teratur kepada pembaca agar pembaca dapat membuat atau melakukan suatu aktivitas secara tepat.',
  },

  // --- SOAL 7 ---
  {
    id: 7,
    type: 'pg',
    topic: 'Struktur Teks Prosedur',
    difficulty: 'Sedang',
    text: 'Perhatikan bagian-bagian struktur teks prosedur berikut:\n(1) Judul\n(2) Tujuan\n(3) Alat dan Bahan\n(4) Langkah-langkah kerja\n(5) Penutup / Simpulan\nBagian yang memuat daftar benda, zat, atau perkakas yang dibutuhkan sebelum memulai kegiatan adalah bagian nomor...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="130" y="10" width="160" height="24" rx="6" fill="#1E3A8A"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">STRUKTUR TEKS PROSEDUR</text>
      <!-- Structure flow -->
      <g transform="translate(15, 48)">
        <rect x="0" y="0" width="70" height="65" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="35" y="24" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">1. Judul</text>
        <text x="35" y="44" fill="#64748B" font-size="8.5" text-anchor="middle">Nama karya</text>
      </g>
      <g transform="translate(93, 48)">
        <rect x="0" y="0" width="70" height="65" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="35" y="24" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">2. Tujuan</text>
        <text x="35" y="44" fill="#64748B" font-size="8.5" text-anchor="middle">Hasil akhir</text>
      </g>
      <g transform="translate(171, 48)">
        <rect x="0" y="0" width="78" height="65" rx="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
        <text x="39" y="22" fill="#B45309" font-size="10.5" font-weight="bold" text-anchor="middle">3. Alat/Bahan</text>
        <text x="39" y="44" fill="#78350F" font-size="8.5" text-anchor="middle">Daftar benda</text>
      </g>
      <g transform="translate(257, 48)">
        <rect x="0" y="0" width="75" height="65" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="37" y="24" fill="#1D4ED8" font-size="10.5" font-weight="bold" text-anchor="middle">4. Langkah</text>
        <text x="37" y="44" fill="#64748B" font-size="8.5" text-anchor="middle">Instruksi kerja</text>
      </g>
      <g transform="translate(340, 48)">
        <rect x="0" y="0" width="65" height="65" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="32" y="24" fill="#1D4ED8" font-size="10.5" font-weight="bold" text-anchor="middle">5. Penutup</text>
        <text x="32" y="44" fill="#64748B" font-size="8.5" text-anchor="middle">Tips/selesai</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bagian (3) Alat dan Bahan berisi rincian perkakas, perlengkapan, dan material yang harus disiapkan sebelum mempraktikkan langkah-langkah dalam teks prosedur.',
  },

  // --- SOAL 8 ---
  {
    id: 8,
    type: 'pg',
    topic: 'Menganalisis Teks Prosedur',
    difficulty: 'Sedang',
    text: 'Perhatikan teks prosedur singkat di atas!\nBerdasarkan kutipan teks tersebut, alasan mengapa botol bekas harus dicuci dan dikeringkan terlebih dahulu sebelum diwarnai adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="15" y="10" width="390" height="24" rx="5" fill="#3B82F6"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Cara Membuat Celengan Roket dari Botol Plastik</text>
      <g transform="translate(25, 45)">
        <text x="0" y="16" fill="#1E293B" font-size="10" font-weight="bold">Langkah 1:</text>
        <text x="65" y="16" fill="#334155" font-size="10">Siapkan botol air mineral bekas ukuran 600 ml.</text>
        <text x="0" y="34" fill="#1E293B" font-size="10" font-weight="bold">Langkah 2:</text>
        <text x="65" y="34" fill="#334155" font-size="10">Cuci botol hingga bersih lalu keringkan agar cat dapat melekat sempurna.</text>
        <text x="0" y="52" fill="#1E293B" font-size="10" font-weight="bold">Langkah 3:</text>
        <text x="65" y="52" fill="#334155" font-size="10">Buat lubang celengan sebesar uang koin menggunakan cutter dengan hati-hati.</text>
        <text x="0" y="70" fill="#1E293B" font-size="10" font-weight="bold">Langkah 4:</text>
        <text x="65" y="70" fill="#334155" font-size="10">Warnai badan botol dengan cat akrilik menyerupai roket angkasa.</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Supaya botol lebih berat dan tidak mudah tumbang' },
      { id: 'B', text: 'Agar cat akrilik dapat menempel dengan kuat dan sempurna' },
      { id: 'C', text: 'Agar ukuran botol menyusut menjadi kecil' },
      { id: 'D', text: 'Supaya botol tidak tembus pandang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada teks dinyatakan secara tersurat: "Cuci botol hingga bersih lalu keringkan agar cat dapat melekat sempurna." Permukaan botol yang berminyak atau basah akan membuat cat terkelupas.',
  },

  // --- SOAL 9 ---
  {
    id: 9,
    type: 'pg',
    topic: 'Kalimat Imperatif (Perintah)',
    difficulty: 'Mudah',
    text: 'Perhatikan empat contoh kalimat di atas!\nKalimat yang tergolong sebagai kalimat perintah (imperatif) yang lazim dipakai dalam teks prosedur adalah kalimat nomor...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(20, 15)">
        <!-- Box 1 -->
        <rect x="0" y="0" width="180" height="45" rx="6" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="10" y="18" fill="#1E40AF" font-size="10" font-weight="bold">(1) Kalimat Berita</text>
        <text x="10" y="34" fill="#334155" font-size="9">Wayang kulit terbuat dari kulit sapi.</text>
        <!-- Box 2 -->
        <rect x="200" y="0" width="180" height="45" rx="6" fill="#F0FDF4" stroke="#86EFAC"/>
        <text x="210" y="18" fill="#166534" font-size="10" font-weight="bold">(2) Kalimat Imperatif</text>
        <text x="210" y="34" fill="#15803D" font-size="9" font-weight="bold">Oleskan lem secukupnya pada kertas!</text>
        <!-- Box 3 -->
        <rect x="0" y="55" width="180" height="45" rx="6" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="10" y="73" fill="#1E40AF" font-size="10" font-weight="bold">(3) Kalimat Tanya</text>
        <text x="10" y="89" fill="#334155" font-size="9">Di mana kamu membeli kain flanel itu?</text>
        <!-- Box 4 -->
        <rect x="200" y="55" width="180" height="45" rx="6" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="210" y="73" fill="#1E40AF" font-size="10" font-weight="bold">(4) Kalimat Seru</text>
        <text x="210" y="89" fill="#334155" font-size="9">Alangkah indahnya lukisan batik ini!</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat (2) "Oleskan lem secukupnya pada kertas!" merupakan kalimat imperatif (perintah) karena menggunakan kata kerja berakhiran "-kan" (oleskan) yang menginstruksikan pembaca untuk melakukan sesuatu serta diakhiri tanda seru.',
  },

  // --- SOAL 10 ---
  {
    id: 10,
    type: 'pg',
    topic: 'Konjungsi Urutan Waktu',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat rumpang teks prosedur berikut:\n"Pertama, siapkan selembar kertas lipat. ..., lipatlah kertas menjadi dua bagian berbentuk segitiga. ..., rapikan sudut-sudutnya hingga membentuk kepala anjing."\nKata hubung urutan waktu (konjungsi kronologis) yang paling tepat untuk mengisi bagian rumpang secara berurutan adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="120" y="10" width="180" height="24" rx="6" fill="#7C3AED"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KONJUNGSI URUTAN WAKTU</text>
      <g transform="translate(30, 48)">
        <circle cx="20" cy="25" r="18" fill="#EDE9FE"/>
        <text x="20" y="30" fill="#6D28D9" font-size="11" font-weight="bold" text-anchor="middle">1</text>
        <text x="48" y="29" fill="#4B5563" font-size="12" font-weight="bold">Pertama, ...</text>
      </g>
      <g transform="translate(155, 48)">
        <circle cx="20" cy="25" r="18" fill="#DDD6FE"/>
        <text x="20" y="30" fill="#6D28D9" font-size="11" font-weight="bold" text-anchor="middle">2</text>
        <text x="48" y="29" fill="#6D28D9" font-size="12" font-weight="bold">Kemudian, ...</text>
      </g>
      <g transform="translate(285, 48)">
        <circle cx="20" cy="25" r="18" fill="#C4B5FD"/>
        <text x="20" y="30" fill="#6D28D9" font-size="11" font-weight="bold" text-anchor="middle">3</text>
        <text x="48" y="29" fill="#4C1D95" font-size="12" font-weight="bold">Terakhir, ...</text>
      </g>
      <text x="210" y="115" fill="#64748B" font-size="10" text-anchor="middle">Kata konjungsi menghubungkan tahapan langkah secara logis</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Meskipun; Padahal' },
      { id: 'B', text: 'Kemudian; Setelah itu' },
      { id: 'C', text: 'Karena; Supaya' },
      { id: 'D', text: 'Atau; Melainkan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata hubung "Kemudian" dan "Setelah itu" merupakan konjungsi temporal/urutan yang berfungsi merangkaikan tahapan kerja berikutnya setelah kata urutan "Pertama".',
  },

  // --- SOAL 11 ---
  {
    id: 11,
    type: 'pg',
    topic: 'Menyusun Teks Prosedur',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat-kalimat acak tentang cara membuat pembatas buku dari kertas origami di atas!\nUrutan langkah pembuatan pembatas buku yang logis dan padu adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(20, 12)">
        <rect x="0" y="0" width="380" height="22" rx="4" fill="#F1F5F9"/>
        <text x="10" y="15" fill="#0F172A" font-size="9.5">(1) Lipat kedua sudut segitiga ke arah bawah secara simetris.</text>
        <rect x="0" y="27" width="380" height="22" rx="4" fill="#F1F5F9"/>
        <text x="10" y="42" fill="#0F172A" font-size="9.5">(2) Siapkan selembar kertas origami berbentuk persegi.</text>
        <rect x="0" y="54" width="380" height="22" rx="4" fill="#F1F5F9"/>
        <text x="10" y="69" fill="#0F172A" font-size="9.5">(3) Selipkan pembatas buku ke sudut halaman buku bacaan favoritmu.</text>
        <rect x="0" y="81" width="380" height="22" rx="4" fill="#F1F5F9"/>
        <text x="10" y="96" fill="#0F172A" font-size="9.5">(4) Lipatlah kertas tersebut secara diagonal membentuk segitiga.</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: '(2) - (4) - (1) - (3)' },
      { id: 'B', text: '(2) - (1) - (4) - (3)' },
      { id: 'C', text: '(4) - (2) - (1) - (3)' },
      { id: 'D', text: '(1) - (4) - (2) - (3)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan yang tepat diawali dengan menyiapkan bahan dasar yaitu kertas origami persegi (2), dilipat menjadi segitiga (4), dilipat sudutnya (1), dan terakhir diselipkan pada halaman buku (3). Maka urutannya adalah (2) - (4) - (1) - (3).',
  },

  // --- SOAL 12 ---
  {
    id: 12,
    type: 'pg',
    topic: 'Keterangan Cara & Alat',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat instruksi teks prosedur berikut:\n"Guntinglah kain perca tersebut dengan gunting kain secara perlahan mengikuti pola garis lengkung."\nFrasa yang menyatakan keterangan alat pada kalimat di atas adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="370" height="40" rx="8" fill="#EFF6FF" stroke="#93C5FD"/>
        <text x="185" y="25" fill="#1E3A8A" font-size="11" font-weight="bold" text-anchor="middle">"Guntinglah kain perca dengan gunting kain secara perlahan!"</text>
      </g>
      <g transform="translate(45, 75)">
        <rect x="0" y="0" width="150" height="35" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="75" y="16" fill="#92400E" font-size="9.5" text-anchor="middle">Keterangan Alat:</text>
        <text x="75" y="28" fill="#78350F" font-size="10.5" font-weight="bold" text-anchor="middle">"dengan gunting kain"</text>
      </g>
      <g transform="translate(225, 75)">
        <rect x="0" y="0" width="150" height="35" rx="6" fill="#DCFCE7" stroke="#16A34A"/>
        <text x="75" y="16" fill="#166534" font-size="9.5" text-anchor="middle">Keterangan Cara:</text>
        <text x="75" y="28" fill="#14532D" font-size="10.5" font-weight="bold" text-anchor="middle">"secara perlahan"</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'kain perca' },
      { id: 'B', text: 'dengan gunting kain' },
      { id: 'C', text: 'secara perlahan' },
      { id: 'D', text: 'mengikuti pola' },
    ],
    correctAnswer: 'B',
    explanation:
      'Frasa "dengan gunting kain" menyatakan alat yang digunakan untuk memotong. Sedangkan "secara perlahan" adalah keterangan cara, dan "kain perca" adalah objek penderita.',
  },

  // --- SOAL 13 ---
  {
    id: 13,
    type: 'pg',
    topic: 'Kaidah Awalan me- (Huruf K)',
    difficulty: 'Sedang',
    text: 'Perhatikan bagan kaidah peluluhan awalan me- di atas!\nKata dasar "kait" jika diberi imbuhan awalan me- akan berubah bentuk menjadi...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="110" y="10" width="200" height="24" rx="6" fill="#0284C7"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">RUMUS PELULUHAN: K, P, T, S</text>
      <!-- Equation -->
      <g transform="translate(30, 48)">
        <rect x="0" y="0" width="70" height="60" rx="8" fill="#E0F2FE" stroke="#38BDF8"/>
        <text x="35" y="36" fill="#0369A1" font-size="14" font-weight="bold" text-anchor="middle">me-</text>
      </g>
      <text x="118" y="85" fill="#0284C7" font-size="20" font-weight="bold">+</text>
      <g transform="translate(135, 48)">
        <rect x="0" y="0" width="85" height="60" rx="8" fill="#FEE2E2" stroke="#F87171"/>
        <text x="42" y="36" fill="#B91C1C" font-size="14" font-weight="bold" text-anchor="middle">kait</text>
      </g>
      <text x="238" y="85" fill="#0284C7" font-size="20" font-weight="bold">=</text>
      <g transform="translate(255, 48)">
        <rect x="0" y="0" width="135" height="60" rx="8" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="67" y="36" fill="#15803D" font-size="14" font-weight="bold" text-anchor="middle">mengait</text>
      </g>
      <text x="210" y="122" fill="#DC2626" font-size="9.5" font-weight="bold" text-anchor="middle">Huruf K luluh menjadi bunyi sengau /ng/</text>
    </svg>`,
    options: [
      { id: 'A', text: 'menkait' },
      { id: 'B', text: 'memkait' },
      { id: 'C', text: 'mengait' },
      { id: 'D', text: 'mengekayit' },
    ],
    correctAnswer: 'C',
    explanation:
      'Sesuai kaidah Bahasa Indonesia, jika kata dasar berawalan huruf K diikuti huruf vokal mendapat imbuhan awalan me-, maka huruf K akan luluh menjadi bunyi sengau /ng/ (me- + kait -> mengait).',
  },

  // --- SOAL 14 ---
  {
    id: 14,
    type: 'pg',
    topic: 'Kaidah Awalan me- (Huruf P)',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat berikut:\n"Made sedang (potong) pita merah untuk menghias layang-layang buatannya."\nBentuk kata turunan berawalan me- yang benar untuk kata di dalam kurung adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="120" y="10" width="180" height="24" rx="6" fill="#B45309"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">PELULUHAN HURUF P</text>
      <!-- Equation -->
      <g transform="translate(30, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="40" y="34" fill="#B45309" font-size="13" font-weight="bold" text-anchor="middle">me-</text>
      </g>
      <text x="128" y="82" fill="#B45309" font-size="20" font-weight="bold">+</text>
      <g transform="translate(145, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#FEE2E2" stroke="#F87171"/>
        <text x="40" y="34" fill="#B91C1C" font-size="13" font-weight="bold" text-anchor="middle">potong</text>
      </g>
      <text x="242" y="82" fill="#B45309" font-size="20" font-weight="bold">=</text>
      <g transform="translate(260, 48)">
        <rect x="0" y="0" width="130" height="55" rx="8" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="65" y="34" fill="#15803D" font-size="13" font-weight="bold" text-anchor="middle">memotong</text>
      </g>
      <text x="210" y="120" fill="#64748B" font-size="9.5" text-anchor="middle">Huruf P luluh menjadi konsonan sengau /m/</text>
    </svg>`,
    options: [
      { id: 'A', text: 'mempotong' },
      { id: 'B', text: 'memotong' },
      { id: 'C', text: 'menpotong' },
      { id: 'D', text: 'mengpotong' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata dasar yang diawali konsonan P (seperti "potong") jika diberi awalan me- akan mengalami peluluhan huruf P menjadi bunyi m. Oleh sebab itu, bentuk yang benar adalah "memotong", bukan "mempotong".',
  },

  // --- SOAL 15 ---
  {
    id: 15,
    type: 'pg',
    topic: 'Kaidah Awalan me- (Huruf T)',
    difficulty: 'Sedang',
    text: 'Dalam membuat kliping hobi, Ayu bertugas (tempel) gambar-gambar tanaman hias pada buku gambarnya.\nBentuk kata berimbuhan me- yang tepat dari kata dasar "tempel" adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="120" y="10" width="180" height="24" rx="6" fill="#15803D"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">PELULUHAN HURUF T</text>
      <!-- Equation -->
      <g transform="translate(30, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="40" y="34" fill="#166534" font-size="13" font-weight="bold" text-anchor="middle">me-</text>
      </g>
      <text x="128" y="82" fill="#15803D" font-size="20" font-weight="bold">+</text>
      <g transform="translate(145, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#FEE2E2" stroke="#F87171"/>
        <text x="40" y="34" fill="#B91C1C" font-size="13" font-weight="bold" text-anchor="middle">tempel</text>
      </g>
      <text x="242" y="82" fill="#15803D" font-size="20" font-weight="bold">=</text>
      <g transform="translate(260, 48)">
        <rect x="0" y="0" width="130" height="55" rx="8" fill="#DBEAFE" stroke="#3B82F6"/>
        <text x="65" y="34" fill="#1E40AF" font-size="13" font-weight="bold" text-anchor="middle">menempel</text>
      </g>
      <text x="210" y="120" fill="#64748B" font-size="9.5" text-anchor="middle">Huruf T luluh menjadi konsonan sengau /n/</text>
    </svg>`,
    options: [
      { id: 'A', text: 'mentempel' },
      { id: 'B', text: 'menempel' },
      { id: 'C', text: 'mengtempel' },
      { id: 'D', text: 'memtempel' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata dasar yang diawali konsonan T dan diikuti huruf vokal akan luluh menjadi konsonan sengau /n/ ketika diberi awalan me- (me- + tempel -> menempel). Kata "mentempel" adalah bentuk yang salah.',
  },

  // --- SOAL 16 ---
  {
    id: 16,
    type: 'pg',
    topic: 'Kaidah Awalan me- (Huruf S)',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat rumpang berikut!\n"Setelah selesai menyiram tanaman bonsai, Kadek ... kembali selang air di tempat semula."\nKata berimbuhan yang tepat berasal dari kata dasar "simpan" adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="120" y="10" width="180" height="24" rx="6" fill="#9333EA"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">PELULUHAN HURUF S</text>
      <!-- Equation -->
      <g transform="translate(30, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#F3E8FF" stroke="#A855F7"/>
        <text x="40" y="34" fill="#7E22CE" font-size="13" font-weight="bold" text-anchor="middle">me-</text>
      </g>
      <text x="128" y="82" fill="#9333EA" font-size="20" font-weight="bold">+</text>
      <g transform="translate(145, 48)">
        <rect x="0" y="0" width="80" height="55" rx="8" fill="#FEE2E2" stroke="#F87171"/>
        <text x="40" y="34" fill="#B91C1C" font-size="13" font-weight="bold" text-anchor="middle">simpan</text>
      </g>
      <text x="242" y="82" fill="#9333EA" font-size="20" font-weight="bold">=</text>
      <g transform="translate(260, 48)">
        <rect x="0" y="0" width="130" height="55" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="65" y="34" fill="#B45309" font-size="13" font-weight="bold" text-anchor="middle">menyimpan</text>
      </g>
      <text x="210" y="120" fill="#64748B" font-size="9.5" text-anchor="middle">Huruf S luluh menjadi konsonan sengau /ny/</text>
    </svg>`,
    options: [
      { id: 'A', text: 'mensimpan' },
      { id: 'B', text: 'menyimpan' },
      { id: 'C', text: 'mengsimpan' },
      { id: 'D', text: 'memsimpan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Huruf S luluh menjadi bunyi /ny/ ketika kata dasar mendapat awalan me- (me- + simpan -> menyimpan). Huruf S tidak boleh tetap bertahan menjadi "mensimpan".',
  },

  // --- SOAL 17 ---
  {
    id: 17,
    type: 'pg',
    topic: 'Kaidah Awalan me- (Gugus Konsonan Klaster)',
    difficulty: 'Sukar',
    text: 'Perhatikan bagan pengecualian peluluhan awalan me- di atas!\nKata "proses" diawali oleh dua huruf konsonan berturut-turut (pr-). Jika diberi imbuhan awalan me-, maka huruf P...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="95" y="10" width="230" height="24" rx="6" fill="#DC2626"/>
      <text x="210" y="26" fill="#FFFFFF" font-size="10.5" font-weight="bold" text-anchor="middle">PENGEQUALIAN KLASTER KONSONAN</text>
      <g transform="translate(25, 46)">
        <rect x="0" y="0" width="175" height="70" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="87" y="22" fill="#991B1B" font-size="10" font-weight="bold" text-anchor="middle">Kata Berawal Klaster</text>
        <text x="87" y="42" fill="#7F1D1D" font-size="12" font-weight="extrabold" text-anchor="middle">pr- / kr- / tr- / sk-</text>
        <text x="87" y="58" fill="#991B1B" font-size="9" text-anchor="middle">Contoh: proses, kritik</text>
      </g>
      <text x="210" y="86" fill="#DC2626" font-size="20" font-weight="bold">→</text>
      <g transform="translate(225, 46)">
        <rect x="0" y="0" width="170" height="70" rx="8" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="85" y="22" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">Aturan Imbuhan me-</text>
        <text x="85" y="42" fill="#14532D" font-size="12" font-weight="extrabold" text-anchor="middle">TIDAK LULUH</text>
        <text x="85" y="58" fill="#166534" font-size="9" text-anchor="middle">me- + proses = memproses</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Tetap tidak luluh, sehingga menjadi "memproses"' },
      { id: 'B', text: 'Luluh menjadi bunyi m, sehingga menjadi "memroses"' },
      { id: 'C', text: 'Berubah menjadi bunyi ng, sehingga menjadi "mengproses"' },
      { id: 'D', text: 'Hilang seluruhnya, sehingga menjadi "mroses"' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kaidah tata bahasa menyatakan bahwa kata dasar yang diawali gugus konsonan rangkap/klaster (seperti pr, kr, tr, sp, st) TIDAK luluh ketika diberi awalan me-. Contoh: me- + proses -> memproses (bukan memroses); me- + kritik -> mengkritik (bukan mengritik).',
  },

  // --- SOAL 18 ---
  {
    id: 18,
    type: 'pg',
    topic: 'Makna Imbuhan Awalan me-',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat berikut:\n"Dewi gemar melukis panorama sawah terasering di desanya setiap hari Minggu."\nMakna awalan me- pada kata "melukis" adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(35, 20)">
        <rect x="0" y="0" width="85" height="85" rx="10" fill="#FFFFFF" stroke="#22C55E" stroke-width="1.5"/>
        <text x="42" y="42" font-size="30" text-anchor="middle">🎨</text>
        <text x="42" y="70" fill="#15803D" font-size="10" font-weight="bold" text-anchor="middle">Hobi Melukis</text>
      </g>
      <g transform="translate(135, 25)">
        <rect x="0" y="0" width="250" height="30" rx="6" fill="#DCFCE7"/>
        <text x="12" y="20" fill="#166534" font-size="11" font-weight="bold">Analisis Makna Kata "Melukis"</text>
        <text x="5" y="52" fill="#334155" font-size="11">Kata dasar: lukis</text>
        <text x="5" y="72" fill="#334155" font-size="11">Aktivitas aktif membuat gambar dengan cat</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Membuat menjadi' },
      { id: 'B', text: 'Melakukan pekerjaan atau tindakan' },
      { id: 'C', text: 'Mencari atau menuju suatu tempat' },
      { id: 'D', text: 'Menyerupai atau menjadi seperti' },
    ],
    correctAnswer: 'B',
    explanation:
      'Awalan me- pada kata "melukis" menyatakan tindakan atau melakukan perbuatan aktif, yaitu pekerjaan membuat lukisan.',
  },

  // --- SOAL 19 ---
  {
    id: 19,
    type: 'pg',
    topic: 'Kaidah Akhiran -lah',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat instruksi teks prosedur berikut:\n"Lipatlah kain flannel menjadi dua bagian sama besar!"\nFungsi penambahan partikel/akhiran "-lah" pada kata "lipat" adalah untuk...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="120" y="12" width="180" height="24" rx="6" fill="#EA580C"/>
      <text x="210" y="28" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">FUNGSI AKHIRAN -LAH</text>
      <g transform="translate(30, 48)">
        <rect x="0" y="0" width="170" height="60" rx="8" fill="#FFF7ED" stroke="#FDBA74"/>
        <text x="85" y="26" fill="#C2410C" font-size="11" font-weight="bold" text-anchor="middle">Kalimat Instruksi:</text>
        <text x="85" y="46" fill="#9A3412" font-size="11" text-anchor="middle">"Lipatlah kain ..."</text>
      </g>
      <g transform="translate(220, 48)">
        <rect x="0" y="0" width="170" height="60" rx="8" fill="#ECFDF5" stroke="#6EE7B7"/>
        <text x="85" y="26" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Fungsi Bahasa:</text>
        <text x="85" y="46" fill="#065F46" font-size="10.5" font-weight="bold" text-anchor="middle">Memperhalus Perintah</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Mengubah kalimat perintah menjadi kalimat tanya' },
      { id: 'B', text: 'Menegaskan dan memperhalus kalimat perintah atau instruksi' },
      { id: 'C', text: 'Menunjukkan waktu yang telah lampau' },
      { id: 'D', text: 'Membentuk kata sifat keadaaan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Partikel atau akhiran "-lah" dalam teks petunjuk berfungsi untuk memperhalus dan menegaskan suruhan/perintah agar instruksi terkesan santun dan jelas bagi pembaca.',
  },

  // --- SOAL 20 ---
  {
    id: 20,
    type: 'pg',
    topic: 'Kaidah Akhiran -kan',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat rumpang teks prosedur berikut:\n"Setelah ditempelkan lem perekat, ... karya tersebut di bawah sinar matahari selama 15 menit agar kering sempurna."\nKata berakhiran "-kan" yang tepat untuk melengkapi kalimat tersebut adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="360" height="85" rx="10" fill="#FFFBEB" stroke="#FCD34D"/>
        <text x="180" y="30" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">Penggunaan Akhiran -kan (Kausatif / Perintah)</text>
        <text x="180" y="52" fill="#78350F" font-size="10.5" text-anchor="middle">Kata dasar: "jemur" / "diamkan" / "letakkan"</text>
        <text x="180" y="70" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">Tindakan menyebabkan sesuatu menjadi berada di suatu tempat</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'letakkannya' },
      { id: 'B', text: 'letakkan' },
      { id: 'C', text: 'meletakkan' },
      { id: 'D', text: 'terletak' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kata "letakkan" merupakan bentuk kalimat perintah aktif dengan akhiran "-kan" yang tepat untuk mengisi instruksi dalam teks prosedur.',
  },

  // --- SOAL 21 ---
  {
    id: 21,
    type: 'pg',
    topic: 'Unsur Surat Pribadi',
    difficulty: 'Mudah',
    text: 'Perhatikan kutipan bagian surat pribadi pada gambar di atas!\nBagian surat yang berbunyi "Jembrana, 20 Oktober 2026" merupakan bagian...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
      <rect x="230" y="15" width="160" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
      <text x="310" y="33" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">Jembrana, 20 Oktober 2026</text>
      <!-- Letter preview -->
      <g transform="translate(30, 20)">
        <text x="0" y="15" fill="#334155" font-size="10.5" font-weight="bold">Kepada Sahabatku, Kadek</text>
        <text x="0" y="32" fill="#334155" font-size="10.5">di Denpasar</text>
        <text x="0" y="55" fill="#1E40AF" font-size="10.5" font-weight="bold">Salam hangat,</text>
        <text x="0" y="74" fill="#64748B" font-size="9.5">Bagaimana kabarmu? Aku baru saja menambah koleksi...</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Alamat tujuan surat' },
      { id: 'B', text: 'Tempat dan tanggal penulisan surat' },
      { id: 'C', text: 'Salam pembuka surat' },
      { id: 'D', text: 'Penutup surat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keterangan "Jembrana, 20 Oktober 2026" menunjukkan tempat (nama kota/kabupaten) dan tanggal pembuatan surat pribadi yang biasanya diletakkan di pojok kanan atas surat.',
  },

  // --- SOAL 22 ---
  {
    id: 22,
    type: 'pg',
    topic: 'Salam Pembuka Surat Pribadi',
    difficulty: 'Mudah',
    text: 'Bayu ingin menulis surat kepada sahabat penanya untuk bertukar informasi mengenai hobi memelihara ikan hias cupang.\nSalam pembuka yang paling tepat, santun, dan akrab untuk surat pribadi antarteman sebaya adalah...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 18)">
        <rect x="0" y="0" width="170" height="85" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="85" y="24" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">Surat Pribadi Sahabat</text>
        <text x="85" y="45" fill="#047857" font-size="10" text-anchor="middle">✓ Akrab &amp; santun</text>
        <text x="85" y="62" fill="#047857" font-size="10" text-anchor="middle">✓ Hangat dan ramah</text>
      </g>
      <g transform="translate(220, 18)">
        <rect x="0" y="0" width="170" height="85" rx="8" fill="#FEF2F2" stroke="#EF4444"/>
        <text x="85" y="24" fill="#991B1B" font-size="11" font-weight="bold" text-anchor="middle">Surat Resmi Dinas</text>
        <text x="85" y="45" fill="#B91C1C" font-size="10" text-anchor="middle">✗ "Dengan hormat,"</text>
        <text x="85" y="62" fill="#B91C1C" font-size="10" text-anchor="middle">✗ Bahasa baku kaku</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Dengan hormat,' },
      { id: 'B', text: 'Halo sahabatku Bayu yang baik,' },
      { id: 'C', text: 'Sehubungan dengan surat ini,' },
      { id: 'D', text: 'Kepada Yang Terhormat Kepala Sekolah,' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk surat pribadi kepada teman sebaya, salam pembuka yang digunakan bersifat akrab, hangat, dan ramah seperti "Halo sahabatku Bayu yang baik," atau "Salam rindu,". Pilihan "Dengan hormat," digunakan khusus untuk surat resmi/kedinasan.',
  },

  // --- SOAL 23 ---
  {
    id: 23,
    type: 'pg',
    topic: 'Ciri Surat Pribadi vs Surat Resmi',
    difficulty: 'Sedang',
    text: 'Perhatikan perbandingan format surat pada gambar di atas!\nPerbedaan yang paling mendasar antara surat pribadi dengan surat resmi kedinasan adalah...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(20, 15)">
        <rect x="0" y="0" width="180" height="95" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="90" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Surat Pribadi</text>
        <text x="15" y="46" fill="#334155" font-size="9.5">• Tidak ada kepala/kop surat</text>
        <text x="15" y="64" fill="#334155" font-size="9.5">• Tidak memakai nomor surat</text>
        <text x="15" y="82" fill="#334155" font-size="9.5">• Bahasa santai &amp; akrab</text>
      </g>
      <g transform="translate(220, 15)">
        <rect x="0" y="0" width="180" height="95" rx="8" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="90" y="24" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">Surat Resmi / Dinas</text>
        <text x="15" y="46" fill="#334155" font-size="9.5">• Wajib ada kop &amp; logo dinas</text>
        <text x="15" y="64" fill="#334155" font-size="9.5">• Ada nomor surat &amp; perihal</text>
        <text x="15" y="82" fill="#334155" font-size="9.5">• Bahasa baku resmi</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Surat pribadi wajib menggunakan kop surat dan cap stempel' },
      { id: 'B', text: 'Surat pribadi tidak menggunakan kop surat, nomor surat, maupun cap lembaga' },
      { id: 'C', text: 'Surat resmi tidak memerlukan alamat tujuan pengiriman' },
      { id: 'D', text: 'Surat pribadi harus diketik dengan komputer oleh kantor pos' },
    ],
    correctAnswer: 'B',
    explanation:
      'Surat pribadi adalah surat perseorangan antarteman atau keluarga, sehingga tidak memiliki kop surat, nomor surat, perihal, lampiran resmi, maupun stempel lembaga.',
  },

  // --- SOAL 24 ---
  {
    id: 24,
    type: 'pg',
    topic: 'Surel (Surat Elektronik)',
    difficulty: 'Sedang',
    text: 'Perhatikan tampilan antarmuka penulisan surel (email) pada gambar di atas!\nIkon klip kertas (paperclip) pada surel berfungsi untuk...',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
      <!-- Email window mock -->
      <g transform="translate(20, 15)">
        <rect x="0" y="0" width="380" height="105" rx="8" fill="#1E293B" stroke="#475569"/>
        <rect x="0" y="0" width="380" height="24" rx="8" fill="#334155"/>
        <text x="12" y="16" fill="#F8FAFC" font-size="10" font-weight="bold">Pesan Baru - Surel (Email)</text>
        <text x="12" y="42" fill="#94A3B8" font-size="10">Kepada:</text>
        <text x="65" y="42" fill="#38BDF8" font-size="10">komang.sahabat@belajar.id</text>
        <text x="12" y="62" fill="#94A3B8" font-size="10">Subjek:</text>
        <text x="65" y="62" fill="#F8FAFC" font-size="10">Foto Hasil Karya Miniatur Rumah Bali</text>
        <!-- Bottom toolbar -->
        <rect x="10" y="76" width="60" height="22" rx="4" fill="#2563EB"/>
        <text x="40" y="91" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Kirim</text>
        <g transform="translate(85, 76)">
          <rect x="0" y="0" width="105" height="22" rx="4" fill="#334155" stroke="#38BDF8"/>
          <text x="18" y="15" font-size="12">📎</text>
          <text x="62" y="15" fill="#38BDF8" font-size="9" font-weight="bold" text-anchor="middle">Lampiran File</text>
        </g>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Menghapus pesan surel secara permanen' },
      { id: 'B', text: 'Melampirkan dokumen, foto karya, atau berkas tambahan' },
      { id: 'C', text: 'Mengubah warna teks surel menjadi bergaris bawah' },
      { id: 'D', text: 'Menutup aplikasi surel' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ikon klip kertas (attachment) pada surel berfungsi untuk melampirkan berkas (file), seperti foto karya kerajinan, dokumen teks, atau video pendek.',
  },

  // --- SOAL 25 ---
  {
    id: 25,
    type: 'pg',
    topic: 'Kosakata Karakter & Bakat',
    difficulty: 'Mudah',
    text: 'Seseorang yang selalu rajin berlatih, tidak mudah putus asa ketika gagal membuat suatu karya seni, dan terus berusaha sampai berhasil dapat diungkapkan dengan kata sifat...',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="340" height="85" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="170" y="30" fill="#92400E" font-size="12" font-weight="bold" text-anchor="middle">SIKAP DALAM MENGEMBANGKAN HOBI</text>
        <text x="170" y="52" fill="#78350F" font-size="10.5" text-anchor="middle">✓ Bekerja keras tanpa menyerah</text>
        <text x="170" y="70" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">Kata Sifat: Tekun &amp; Gigih</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Pesimistis' },
      { id: 'B', text: 'Tekun dan gigih' },
      { id: 'C', text: 'Acuh tak acuh' },
      { id: 'D', text: 'Egois' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tekun dan gigih merupakan sikap positif yang berarti bersungguh-sungguh, rajin, dan tidak gampang menyerah dalam menekuni hobi atau bakat diri.',
  },

  // ==========================================
  // BAGIAN II: BENAR / SALAH (5 SOAL)
  // ==========================================

  // --- SOAL 26 ---
  {
    id: 26,
    type: 'benar_salah',
    topic: 'Kaidah Peluluhan Huruf K',
    difficulty: 'Sedang',
    text: 'Perhatikan kaidah penulisan kata berimbuhan pada gambar di atas!\n\nPernyataan:\n"Kata dasar \'koleksi\' jika diberi awalan me- penulisan bakunya adalah \'mengkoleksi\' karena huruf K tidak boleh luluh."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="70" rx="8" fill="#FEE2E2" stroke="#EF4444"/>
        <text x="80" y="24" fill="#991B1B" font-size="11" font-weight="bold" text-anchor="middle">Bentuk SALAH</text>
        <text x="80" y="48" fill="#7F1D1D" font-size="14" font-weight="extrabold" text-anchor="middle">mengkoleksi ❌</text>
      </g>
      <g transform="translate(230, 20)">
        <rect x="0" y="0" width="160" height="70" rx="8" fill="#DCFCE7" stroke="#22C55E"/>
        <text x="80" y="24" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Bentuk BAKU</text>
        <text x="80" y="48" fill="#14532D" font-size="14" font-weight="extrabold" text-anchor="middle">mengoleksi ✔️</text>
      </g>
      <text x="210" y="112" fill="#64748B" font-size="10" text-anchor="middle">Huruf K diikuti vokal \'o\' wajib luluh menjadi \'ng\'</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nSesuai Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD), kata dasar "koleksi" diawali konsonan tunggal K yang diikuti vokal O, sehingga huruf K WAJIB LULUH menjadi bunyi /ng/.\nBentuk yang baku dan benar adalah "mengoleksi", bukan "mengkoleksi".',
  },

  // --- SOAL 27 ---
  {
    id: 27,
    type: 'benar_salah',
    topic: 'Struktur Teks Prosedur',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram struktur teks prosedur pada gambar di atas!\n\nPernyataan:\n"Teks prosedur pembuatan suatu karya kerajinan tangan harus disusun secara runtut dan urut, dimulai dari judul, tujuan, alat dan bahan, serta langkah-langkah kerja yang jelas."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="360" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="180" y="25" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Susunan Runtut Teks Prosedur</text>
        <text x="180" y="48" fill="#1E3A8A" font-size="10.5" font-weight="bold" text-anchor="middle">Judul ➔ Tujuan ➔ Alat &amp; Bahan ➔ Langkah Kerja</text>
      </g>
      <text x="210" y="115" fill="#15803D" font-size="10.5" font-weight="bold" text-anchor="middle">✓ Urutan sistematis memudahkan pembaca mempraktikkan isi teks</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nStruktur teks prosedur memang harus runtut dan sistematis agar pembaca dapat mengikuti petunjuk dengan mudah tanpa salah langkah.',
  },

  // --- SOAL 28 ---
  {
    id: 28,
    type: 'benar_salah',
    topic: 'Format Surat Pribadi',
    difficulty: 'Mudah',
    text: 'Perhatikan ciri surat pribadi pada ilustrasi di atas!\n\nPernyataan:\n"Surat pribadi yang dikirimkan kepada teman sekelas untuk menceritakan hobi wajib dilengkapi dengan nomor surat dinas dan cap stempel resmi sekolah."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="340" height="75" rx="10" fill="#FFFBEB" stroke="#F59E0B"/>
        <text x="170" y="26" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">CIRI KHAS SURAT PRIBADI</text>
        <text x="170" y="46" fill="#78350F" font-size="10" text-anchor="middle">Surat pribadi bersifat informal/kekeluargaan</text>
        <text x="170" y="62" fill="#DC2626" font-size="10.5" font-weight="bold" text-anchor="middle">TIDAK MENGGUNAKAN nomor surat dinas maupun cap stempel</text>
      </g>
      <text x="210" y="116" fill="#64748B" font-size="9.5" text-anchor="middle">Nomor surat dan stempel resmi hanya ada pada surat resmi/kedinasan</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nNomor surat dan cap stempel resmi HANYA digunakan pada surat dinas/resmi instansi. Surat pribadi kepada teman atau keluarga tidak memerlukan nomor surat maupun stempel.',
  },

  // --- SOAL 29 ---
  {
    id: 29,
    type: 'benar_salah',
    topic: 'Makna Imbuhan Awalan ber-',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat berikut:\n"Setiap sore hari, Kadek dan teman-temannya gemar bersepeda mengelilingi persawahan desa."\n\nPernyataan:\n"Kata berimbuhan \'bersepeda\' pada kalimat di atas bermakna melakukan aktivitas atau kegiatan menggunakan alat transportasi sepeda."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="100" height="70" rx="8" fill="#FFFFFF" stroke="#22C55E"/>
        <text x="50" y="40" font-size="28" text-anchor="middle">🚲</text>
        <text x="50" y="60" fill="#15803D" font-size="9.5" font-weight="bold" text-anchor="middle">Hobi Bersepeda</text>
      </g>
      <g transform="translate(160, 25)">
        <rect x="0" y="0" width="220" height="60" rx="8" fill="#DCFCE7"/>
        <text x="110" y="24" fill="#166534" font-size="10.5" font-weight="bold" text-anchor="middle">Makna Awalan ber-</text>
        <text x="110" y="44" fill="#14532D" font-size="10" text-anchor="middle">ber- + sepeda ➔ mengendarai sepeda</text>
      </g>
      <text x="210" y="115" fill="#15803D" font-size="10" font-weight="bold" text-anchor="middle">Menyatakan tindakan mengendarai atau menggunakan alat</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nAwalan ber- yang bergabung dengan kata benda "sepeda" membentuk kata kerja "bersepeda" yang bermakna mengendarai atau menggunakan sepeda.',
  },

  // --- SOAL 30 ---
  {
    id: 30,
    type: 'benar_salah',
    topic: 'Fungsi Akhiran -lah',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat petunjuk pada teks prosedur berikut:\n"Aduklah larutan pewarna alami itu hingga merata!"\n\nPernyataan:\n"Penambahan partikel \'-lah\' pada kata \'aduk\' berfungsi untuk mengubah kalimat berita menjadi kalimat pengandaian."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="135" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="360" height="70" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="180" y="26" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Analisis Kalimat: "Aduklah larutan pewarna!"</text>
        <text x="180" y="48" fill="#1E3A8A" font-size="10.5" font-weight="bold" text-anchor="middle">Kata "aduk" + "-lah" ➔ Kalimat Perintah (Imperatif) Halus</text>
      </g>
      <text x="210" y="115" fill="#DC2626" font-size="10" font-weight="bold" text-anchor="middle">Bukan kalimat pengandaian (kalimat pengandaian memakai kata \'jika\' / \'seandainya\')</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nPartikel "-lah" pada kata "aduklah" berfungsi untuk mempertegas dan memperhalus kalimat perintah (imperatif), BUKAN membentuk kalimat pengandaian.\nKalimat pengandaian ditandai oleh kata hubung syarat seperti "jika", "seandainya", atau "apabila".',
  },
];

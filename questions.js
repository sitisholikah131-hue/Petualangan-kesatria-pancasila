/* Data Soal dan Level Pendidikan Pancasila Kelas 6 SD */
const levelData = {
    1: {
        sila: "Sila Ke-1",
        title: "Taman Toleransi",
        icon: "⭐",
        badgeName: "⭐ Lencana Bintang",
        description: "Nilai Ketuhanan Yang Maha Esa, Toleransi, & Kebebasan Beribadah",
        questions: [
            {
                type: "scenario",
                situation: "Saat jam istirahat sekolah, kamu ingin berolah raga bersama kawan-kawan. Namun, Made yang beragama Hindu meminta izin sebentar untuk beribadah di Pure dekat sekolah.",
                options: [
                    { text: "Mengizinkan Made beribadah dan menghentikan main sebentar untuk menunggunya dengan sopan.", correct: true },
                    { text: "Memaksa Made untuk tetap bermain dan menunda ibadahnya.", correct: false },
                    { text: "Mengejek Made karena ibadahnya berbeda dengan kawan lain.", correct: false }
                ],
                explanation: "Sila Ke-1 mengajarkan kita untuk menghormati kebebasan orang lain dalam menjalankan ibadah sesuai agamanya masing-masing tanpa gangguan."
            },
            {
                type: "scenario",
                situation: "Tetanggamu sedang merayakan hari raya keagamaan mereka. Apa tindakanmu sebagai pengamalan Sila ke-1?",
                options: [
                    { text: "Mengencangkan suara musik agar mengganggu perayaan mereka.", correct: false },
                    { text: "Menjaga ketenangan lingkungan dan mengucapkan selamat dengan penuh keramahan.", correct: true },
                    { text: "Pura-pura tidak tahu dan acuh tak acuh.", correct: false }
                ],
                explanation: "Menjaga kerukunan antarumat beragama di lingkungan rumah adalah bukti nyata pengamalan Sila Ketuhanan Yang Maha Esa."
            },
            {
                type: "scenario",
                situation: "Di kelas 6 SD, terdapat teman yang berasal dari latar belakang agama berbeda. Ketika berdoa sebelum belajar, sikap yang benar adalah...",
                options: [
                    { text: "Berdoa sesuai dengan agama dan kepercayaan masing-masing dengan khusyuk.", correct: true },
                    { text: "Memaksa semua teman berdoa dengan cara agama mayoritas.", correct: false },
                    { text: "Bercanda dan mengobrol saat teman lain sedang berdoa.", correct: false }
                ],
                explanation: "Menghormati tata cara berdoa agama lain adalah wujud toleransi beragama yang sesuai dengan Sila Pertama Pancasila."
            }
        ]
    },
    2: {
        sila: "Sila Ke-2",
        title: "Lorong Kepedulian",
        icon: "⛓️",
        badgeName: "⛓️ Lencana Rantai",
        description: "Kemanusiaan yang Adil dan Beradab, Empati, & Sikap Tenggang Rasa",
        questions: [
            {
                type: "scenario",
                situation: "Seorang teman kelasmu jatuh dari sepeda hingga kakinya terluka saat pulang sekolah. Apa tindakan beradab yang sebaiknya kamu lakukan?",
                options: [
                    { text: "Merekam kejadian itu untuk diunggah ke media sosial.", correct: false },
                    { text: "Segera menolongnya, mengobati lukanya ke UKS/Rumah, dan menenanginya.", correct: true },
                    { text: "Mentertawakannya karena dia tidak berhati-hati.", correct: false }
                ],
                explanation: "Sila Ke-2 menekankan rasa kemanusiaan, empati, dan kewajiban menolong sesama tanpa membeda-bedakan."
            },
            {
                type: "scenario",
                situation: "Di sekolah, kamu melihat ada teman yang sering diejek dan dirundung (bully) karena fisiknya. Tindakanmu adalah...",
                options: [
                    { text: "Membela teman yang diejek dan melaporkan tindakan rundungan tersebut kepada guru.", correct: true },
                    { text: "Ikut mengejek bersama teman-teman yang lain.", correct: false },
                    { text: "Diam saja agar tidak dimusuhi pelaku rundungan.", correct: false }
                ],
                explanation: "Menolak segala bentuk perundungan (bullying) dan memperlakukan setiap orang dengan bermartabat merupakan amanat Sila ke-2."
            },
            {
                type: "scenario",
                situation: "Daerah tetangga mengalami musibah bencana alam banjir. Sebagai siswa kelas 6, bentuk pengamalan Sila ke-2 yang tepat adalah...",
                options: [
                    { text: "Menyisihkan sebagian uang saku atau baju layak pakai untuk disumbangkan.", correct: true },
                    { text: "Menonton berita bencana tanpa rasa peduli.", correct: false },
                    { text: "Mengritik korban bencana di media sosial.", correct: false }
                ],
                explanation: "Gemar melakukan kegiatan kemanusiaan dan membantu korban bencana adalah perwujudan Sila Kemanusiaan yang Adil dan Beradab."
            }
        ]
    },
    3: {
        sila: "Sila Ke-3",
        title: "Jembatan Kebhinnekaan",
        icon: "🌳",
        badgeName: "🌳 Lencana Pohon Beringin",
        description: "Persatuan Indonesia, Cinta Produk Lokal, & Menjaga Kerukunan",
        questions: [
            {
                type: "scenario",
                situation: "Dalam tugas kelompok kesenian, anggota kelompokmu berasal dari suku Jawa, Sunda, Batak, dan Papua. Bagaimana sebaiknya kalian bekerja sama?",
                options: [
                    { text: "Hanya mau berkomunikasi dengan teman yang sesuku saja.", correct: false },
                    { text: "Saling bekerja sama dengan rukun, bangga akan keanekaragaman, dan saling melengkapi.", correct: true },
                    { text: "Membagi kelompok ulang berdasarkan asal suku.", correct: false }
                ],
                explanation: "Sila Ke-3 menjunjung tinggi semangat 'Bhinneka Tunggal Ika' (Berbeda-beda tetapi tetap satu jua)."
            },
            {
                type: "scenario",
                situation: "Ibu mengajakmu berbelanja sepatu sekolah. Di toko terdapat sepatu buatan dalam negeri dan sepatu impor luar negeri. Wujud cinta tanah air adalah...",
                options: [
                    { text: "Membeli produk buatan dalam negeri yang berkualitas untuk mendukung UMKM Indonesia.", correct: true },
                    { text: "Selalu membeli barang luar negeri karena menganggap barang lokal jelek.", correct: false },
                    { text: "Mengejek barang-barang buatan perajin lokal.", correct: false }
                ],
                explanation: "Bangga menggunakan produk-produk buatan dalam negeri adalah salah satu cara nyata mengamalkan Sila Ke-3."
            },
            {
                type: "scenario",
                situation: "Ketika beredar berita atau rumor hoaks di grup percakapan yang dapat memecah belah persahabatan di sekolah, tindakan terbaikmu adalah...",
                options: [
                    { text: "Langsung menyebarkan berita itu tanpa menyaring kebenarannya.", correct: false },
                    { text: "Memeriksa kebenaran informasi terlebih dahulu dan tidak menyebarkan kabar yang merusak persatuan.", correct: true },
                    { text: "Protokol provokasi agar teman-teman saling bertengkar.", correct: false }
                ],
                explanation: "Menjaga ketertiban, kedamaian, dan tidak menyebarkan fitnah/hoaks adalah pengamalan Sila Persatuan Indonesia."
            }
        ]
    },
    4: {
        sila: "Sila Ke-4",
        title: "Ruang Musyawarah",
        icon: "🐂",
        badgeName: "🐂 Lencana Kepala Banteng",
        description: "Kerakyatan & Musyawarah Mufakat, Menghargai Pendapat, & Menghormati Keputusan",
        questions: [
            {
                type: "scenario",
                situation: "Kelas 6 sedang mengadakan pemilihan Ketua Kelas. Usulanmu berbeda dengan pendapat mayoritas teman-teman. Sikap yang terpuji adalah...",
                options: [
                    { text: "Marah dan keluar dari ruang kelas karena usulan tidak diterima.", correct: false },
                    { text: "Menghargai hasil musyawarah dan melaksanakan keputusan bersama dengan ikhlas dan bertanggung jawab.", correct: true },
                    { text: "Memaksa teman-teman agar mengubah keputusan sesuai kemauanmu.", correct: false }
                ],
                explanation: "Sila Ke-4 mengajarkan kita untuk mengutamakan musyawarah dan menerima hasil keputusan bersama dengan giat & penuh tanggung jawab."
            },
            {
                type: "scenario",
                situation: "Saat diskusi kelompok menentukan lokasi tujuan piknik sekolah, temanmu sedang menyampaikan pendapatnya. Tindakanmu adalah...",
                options: [
                    { text: "Mendengarkan dengan tenang hingga selesai tanpa menyela pembicaranya.", correct: true },
                    { text: "Memotong pembicaraannya dan menyuruhnya diam.", correct: false },
                    { text: "Pura-pura tidak mendengar dan bermain HP sendiri.", correct: false }
                ],
                explanation: "Menghormati dan menghargai pendapat orang lain saat bermusyawarah merupakan ciri utama pengamalan Sila Ke-4."
            },
            {
                type: "scenario",
                situation: "Musyawarah mufakat di kelas tidak mencapai kesepakatan secara langsung. Cara demokratis yang sesuai Pancasila adalah...",
                options: [
                    { text: "Memutus keputusannya lewat adu kekuatan atau perkelahian.", correct: false },
                    { text: "Melakukan pemungutan suara (voting) secara adil dan terbuka.", correct: true },
                    { text: "Bubar tanpa menyelesaikan masalah kelas.", correct: false }
                ],
                explanation: "Pengambilan keputusan melalui pemungutan suara (voting) yang jujur dan adil dilakukan jika mufakat belum tercapai."
            }
        ]
    },
    5: {
        sila: "Sila Ke-5",
        title: "Pasar Keadilan",
        icon: "🌾",
        badgeName: "🌾 Lencana Padi & Kapas",
        description: "Keadilan Sosial, Gotong Royong, Menghargai Hak Orang Lain, & Gaya Hidup Hemat",
        questions: [
            {
                type: "scenario",
                situation: "Setiap hari Jumat diadakan piket kebersihan kelas. Sikap yang menunjukkan pengamalan Sila Ke-5 adalah...",
                options: [
                    { text: "Melaksanakan tugas piket bersama-sama secara adil dan tidak menyuruh teman lain mengerjakan tugasmu.", correct: true },
                    { text: "Kabur pulang duluan agar tidak perlu menyapu kelas.", correct: false },
                    { text: "Menyuruh satu orang teman saja untuk membersihkan seluruh ruang kelas.", correct: false }
                ],
                explanation: "Gotong royong, bersikap adil dalam pembagian tugas, serta menghargai kerja keras teman sesuai dengan Sila Ke-5."
            },
            {
                type: "scenario",
                situation: "Kamu diberikan sisa uang saku harian oleh orang tuamu. Pengamalan sikap hemat yang sesuai Sila Ke-5 adalah...",
                options: [
                    { text: "Menghabiskan semuanya untuk membeli mainan secara boros.", correct: false },
                    { text: "Menyisihkan sebagian sisa uang saku untuk ditabung di celengan.", correct: true },
                    { text: "Membeli barang mahal hanya untuk pamer kepada teman.", correct: false }
                ],
                explanation: "Sila Ke-5 memerintahkan kita untuk hidup hemat, tidak bergaya hidup mewah/boros, dan suka menabung."
            },
            {
                type: "scenario",
                situation: "Di kantin sekolah, terdapat antrean panjang untuk membeli makanan. Tindakan yang adil sesuai Sila Ke-5 adalah...",
                options: [
                    { text: "Mengantre dengan tertib tanpa menyerobot antrean teman lain.", correct: true },
                    { text: "Menyerobot ke barisan paling depan secara paksa.", correct: false },
                    { text: "Menitip beli dengan menyogok teman di depan antrean.", correct: false }
                ],
                explanation: "Menghormati hak orang lain dan mematuhi aturan umum seperti mengantre secara tertib adalah wujud keadilan sosial."
            }
        ]
    }
};

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  id: {
    common: {
      brand: 'SICOST',
      nav: {
        home: 'Beranda',
        services: 'Layanan',
        portfolio: 'Portfolio',
        about: 'Tentang',
        faq: 'FAQ',
        contact: 'Kontak',
      },
      faq: {
        seo: {
          title: 'FAQ - Pertanyaan yang Sering Diajukan',
          description:
            'Jawaban jelas dan ringkas untuk pertanyaan umum seputar layanan pembuatan website di SICOST.',
          keywords:
            'faq, pertanyaan, layanan website, harga, proses, dukungan, SEO, maintenance',
        },
        title: 'Pertanyaan yang Sering Diajukan',
        subtitle: 'Kami rangkum jawaban yang paling sering dicari agar Anda cepat menemukan informasi yang dibutuhkan.',
        search: {
          placeholder: 'Cari pertanyaan atau kata kunci...',
        },
        noResults: 'Tidak ada hasil untuk pencarian Anda.',
        contactPrompt: 'Tidak menemukan jawaban yang Anda cari?',
        contactLinkText: 'Hubungi Support',
        lastUpdated: 'Terakhir diperbarui: {{date}}',
        categories: {
          all: 'Semua',
          general: 'Umum',
          pricing: 'Harga',
          technical: 'Teknis',
          process: 'Proses',
          support: 'Dukungan',
        },
        items: {
          general: [
            {
              q: 'Apa layanan utama yang ditawarkan SICOST?',
              a: 'Kami mengembangkan website dari konsultasi hingga maintenance: landing page, multi‑halaman, fitur custom, SEO dasar, analitik, dan integrasi WhatsApp.',
            },
            {
              q: 'Apakah website yang dibuat responsif?',
              a: 'Ya. Kami memastikan tampilan optimal di mobile, tablet, dan desktop dengan praktik UI/UX modern.',
            },
            {
              q: 'Paket mana yang cocok untuk bisnis saya?',
              a: 'Basic cocok untuk landing sederhana, Standard untuk website multi‑halaman, Maintenance untuk dukungan berkelanjutan, Premium untuk kebutuhan custom dan enterprise.',
            },
            {
              q: 'Apakah konten disediakan oleh SICOST?',
              a: 'Kami menyediakan panduan dan struktur konten. Jasa copywriting opsional dapat ditambahkan sesuai kebutuhan.',
            },
          ],
          pricing: [
            {
              q: 'Bagaimana struktur harga ditentukan?',
              a: 'Harga berdasarkan paket dan ruang lingkup. Biaya tambahan berlaku untuk fitur custom, lisensi pihak ketiga, atau permintaan di luar paket.',
            },
            {
              q: 'Metode pembayaran yang didukung?',
              a: 'Transfer bank dan QRIS. Invoice akan dikirim dengan jadwal pembayaran yang transparan.',
            },
            {
              q: 'Apakah ada biaya tersembunyi?',
              a: 'Tidak. Kami menyampaikan semua biaya di awal: domain, hosting, lisensi, atau aset premium bila diperlukan.',
            },
            {
              q: 'Bagaimana kebijakan revisi?',
              a: 'Basic: 1x revisi, Standard: 2x revisi. Revisi tambahan disesuaikan dengan kompleksitas dan dapat dikenakan biaya.',
            },
          ],
          technical: [
            {
              q: 'Apakah tersedia CMS?',
              a: 'Paket Standard ke atas menyediakan CMS untuk mengelola konten. Paket Basic berfokus pada landing page tanpa CMS penuh.',
            },
            {
              q: 'Apakah termasuk SEO?',
              a: 'SEO dasar termasuk pada semua paket. Paket Standard dan Premium mencakup optimasi lanjutan serta integrasi Search Console.',
            },
            {
              q: 'Bagaimana performa dan keamanan?',
              a: 'Kami menerapkan praktik performa, caching, SSL, dan pemantauan dasar. Maintenance menyediakan update rutin dan monitoring keamanan.',
            },
            {
              q: 'Apakah integrasi analitik disediakan?',
              a: 'Ya. Integrasi Google Analytics dan pelacakan dasar peristiwa dapat kami aktifkan sesuai kebutuhan.',
            },
          ],
          process: [
            {
              q: 'Berapa lama waktu pengerjaan?',
              a: 'Umumnya 7–12 hari kerja tergantung paket dan kesiapan konten. Premium 14–21 hari kerja.',
            },
            {
              q: 'Bagaimana alur kerja proyek?',
              a: 'Konsultasi → Perencanaan → Desain → Pengembangan → Review → Launch → (Maintenance opsional).',
            },
            {
              q: 'Apa yang perlu disiapkan klien?',
              a: 'Logo/brand assets, konten dasar, referensi desain, akses domain/hosting bila ada, dan feedback tepat waktu.',
            },
            {
              q: 'Apakah migrasi konten didukung?',
              a: 'Ya untuk skala kecil hingga sedang. Migrasi besar atau kompleks dibahas terpisah sesuai kebutuhan.',
            },
          ],
          support: [
            {
              q: 'Apakah ada dukungan setelah peluncuran?',
              a: 'Ya, kami menyediakan bug‑fix awal dan panduan. Paket Maintenance/Premium mencakup dukungan berkelanjutan.',
            },
            {
              q: 'Jam respons CS?',
              a: 'Hari kerja 09.00–18.00 WIB (best effort). Respons cepat melalui WhatsApp.',
            },
            {
              q: 'Bagaimana cara menghubungi support?',
              a: 'Melalui tombol WhatsApp di situs atau halaman Kontak. Kami siap membantu pertanyaan teknis maupun bisnis.',
            },
            {
              q: 'Apakah ada SLA?',
              a: 'Untuk UMKM kami menerapkan pendekatan best effort. SLA khusus tersedia untuk paket enterprise/Premium.',
            },
          ],
        },
      },
      about: {
        seo: {
          title: 'Tentang SICOST',
          description:
            'SICOST adalah layanan pembuatan website yang berfokus pada hasil bisnis untuk UMKM dan perusahaan berkembang.',
          keywords:
            'tentang, sicost, web development, UMKM, desain web, pembuatan website, maintenance, SEO',
        },
        hero: {
          title: 'Tentang SICOST',
          subtitle:
            'Kami membangun website dengan pendekatan yang sederhana, komunikatif, dan berorientasi pada hasil.',
        },
        who: {
          title: 'Siapa Kami',
          description:
            'Kami adalah tim kecil yang menggabungkan desain dan teknologi untuk menghasilkan website yang memberikan dampak nyata bagi bisnis. Kami mengutamakan komunikasi langsung, proses yang jelas, dan dukungan berkelanjutan.',
        },
        values: {
          title: 'Nilai Kami',
          items: [
            {
              title: 'Fokus pada Hasil',
              desc: 'Setiap keputusan desain dan teknis diarahkan pada tujuan bisnis Anda.',
            },
            {
              title: 'Transparansi & Kejelasan',
              desc: 'Proses, timeline, dan biaya disampaikan jelas tanpa kejutan.',
            },
            {
              title: 'Kualitas Konsisten',
              desc: 'Standar teknis dan UI/UX dijaga konsisten pada setiap proyek.',
            },
          ],
        },
        process: {
          title: 'Cara Kerja Kami',
          steps: [
            {
              title: 'Konsultasi',
              desc: 'Memahami kebutuhan, target, dan prioritas bisnis Anda.',
            },
            {
              title: 'Perencanaan',
              desc: 'Menetapkan struktur konten, desain, dan ruang lingkup fitur.',
            },
            {
              title: 'Pengembangan',
              desc: 'Membangun website responsif dengan praktik terbaik modern.',
            },
            {
              title: 'Peluncuran',
              desc: 'Testing, SEO dasar, konfigurasi domain dan hosting.',
            },
            {
              title: 'Maintenance Opsional',
              desc: 'Update konten dan dukungan teknis berkelanjutan.',
            },
          ],
        },
      },
      faqLegacy: {
        seo: {
          title: 'FAQ',
          description: 'Jawaban atas pertanyaan umum tentang layanan pembuatan website SICOST.',
          keywords: 'faq, pertanyaan, harga, proses, teknis, dukungan, sicost',
        },
        title: 'Pertanyaan yang Sering Diajukan',
        subtitle: 'Temukan jawaban cepat tentang layanan, harga, proses, dan dukungan kami.',
        categories: {
          all: 'Semua',
          general: 'Umum',
          pricing: 'Harga',
          technical: 'Teknis',
          process: 'Proses',
          support: 'Dukungan',
        },
        search: {
          placeholder: 'Cari pertanyaan (misal: timeline, SEO, harga)',
        },
        lastUpdated: 'Terakhir diperbarui: {{date}}',
        noResults: 'Tidak ada hasil yang cocok. Coba kata kunci lain.',
        contactPrompt: 'Tidak menemukan jawaban? Tim kami siap membantu.',
        contactLinkText: 'Hubungi via WhatsApp',
        items: {
          general: [
            { q: 'Apa layanan yang SICOST tawarkan?', a: 'Kami menyediakan pembuatan website responsif mulai dari landing page hingga multi-halaman, termasuk optimasi SEO dasar, integrasi WhatsApp, formulir kontak, dan opsi maintenance.' },
            { q: 'Apakah website yang dibuat responsif?', a: 'Ya. Semua website kami dirancang mobile-first dan diuji di berbagai ukuran layar.' },
            { q: 'Paket mana yang cocok untuk saya?', a: 'Untuk kebutuhan sederhana pilih Basic; untuk bisnis berkembang pilih Standard; jika menginginkan dukungan berkelanjutan, pilih Standard + Maintenance; untuk kebutuhan khusus/perusahaan, pilih Premium.' },
            { q: 'Apakah Anda menyediakan konten/copywriting?', a: 'Konten dasar dapat kami bantu strukturkan, namun copywriting komprehensif adalah layanan terpisah. Anda bisa menyediakan konten sendiri atau request layanan tambahan.' },
          ],
          pricing: [
            { q: 'Berapa kisaran harga pembuatan website?', a: 'Kami menawarkan beberapa paket dengan harga transparan sesuai ruang lingkup. Lihat halaman Layanan atau hubungi kami untuk estimasi yang tepat.' },
            { q: 'Metode pembayaran yang tersedia?', a: 'Transfer bank dan pembayaran digital yang umum digunakan di Indonesia. Pembayaran dilakukan bertahap sesuai milestone.' },
            { q: 'Apakah ada biaya tersembunyi?', a: 'Tidak. Semua biaya disampaikan di awal. Fitur tambahan di luar kesepakatan akan dikonfirmasi terlebih dahulu.' },
            { q: 'Berapa kali revisi yang diberikan?', a: 'Kami menyediakan revisi wajar pada setiap tahap. Permintaan perubahan besar di luar ruang lingkup akan didiskusikan dan mungkin dikenakan biaya.' },
          ],
          technical: [
            { q: 'Apakah website menggunakan CMS?', a: 'Untuk paket Standard ke atas, kami menyediakan CMS agar Anda bisa mengelola konten sendiri. Paket Basic biasanya tanpa CMS.' },
            { q: 'Bagaimana dengan SEO?', a: 'Kami menerapkan SEO dasar (struktur semantic, metadata, performa). Untuk kebutuhan SEO lanjutan tersedia opsi tambahan.' },
            { q: 'Keamanan dan performa bagaimana?', a: 'Kami mengutamakan praktik keamanan dasar, SSL, dan optimasi performa. Monitoring dan hardening lanjutan tersedia pada paket Maintenance/Premium.' },
            { q: 'Apakah ada analytics/tracking?', a: 'Ya. Integrasi Google Analytics/Search Console tersedia minimal pada paket Standard. Event penting (pencarian, klik kategori, toggling) dapat dicatat.' },
          ],
          process: [
            { q: 'Berapa lama pengerjaan?', a: 'Umumnya 7–16 hari kerja tergantung paket dan ruang lingkup. Pengerjaan dibagi ke beberapa milestone.' },
            { q: 'Bagaimana alur kerja?', a: 'Konsultasi → Perencanaan → Desain/Implementasi → Review → Peluncuran → (Maintenance opsional). Kami menjaga komunikasi jelas di setiap tahap.' },
            { q: 'Apa yang perlu disiapkan klien?', a: 'Logo, brand guideline (jika ada), konten dasar (teks/gambar), dan referensi website. Kami akan membantu merapikan struktur dan prioritas.' },
            { q: 'Apakah bisa migrasi konten?', a: 'Bisa. Migrasi dari website lama akan dianalisis terlebih dahulu; biaya dan waktu tambahan mungkin diperlukan sesuai kompleksitas.' },
          ],
          support: [
            { q: 'Apa yang terjadi setelah website live?', a: 'Kami memberikan handover dan dokumentasi singkat. Untuk dukungan berkelanjutan, pilih paket Maintenance atau Premium.' },
            { q: 'Seberapa cepat tim merespon?', a: 'Jam kerja normal. Prioritas diberikan kepada klien Maintenance/Premium. Kami berusaha merespon secepat mungkin.' },
            { q: 'Bagaimana cara menghubungi support?', a: 'Anda dapat menghubungi via WhatsApp/Email dari halaman Kontak. Ticketing sederhana tersedia pada paket Maintenance.' },
            { q: 'Apakah ada SLA?', a: 'Untuk paket Maintenance/Premium kami menyediakan target waktu respons yang jelas (SLA) sesuai kesepakatan.' },
          ],
        },
      },
      contact: {
        seo: {
          title: 'Kontak',
          description: 'Hubungi tim SICOST untuk konsultasi pembuatan website, penawaran, atau dukungan.',
          keywords: 'kontak, konsultasi, penawaran, whatsapp, email, layanan website',
        },
        hero: {
          title: 'Hubungi Kami',
          subtitle: 'Kami siap membantu Anda dari konsultasi hingga peluncuran website. Isi form atau hubungi langsung via WhatsApp.',
        },
        methods: {
          whatsapp: 'WhatsApp',
          email: 'Email',
          hours: 'Jam Operasional',
          hoursValue: 'Senin–Jumat, 09:00–17:00 WIB',
        },
        form: {
          title: 'Formulir Kontak',
          name: { label: 'Nama', placeholder: 'Nama lengkap Anda' },
          email: { label: 'Email', placeholder: 'nama@domain.com' },
          whatsapp: { label: 'WhatsApp', placeholder: 'Contoh: 6281234567890' },
          package: { label: 'Pilih Paket (opsional)', placeholder: 'Pilih paket layanan' },
          message: { label: 'Pesan', placeholder: 'Ceritakan kebutuhan website Anda' },
          submit: 'Kirim Pesan',
          sending: 'Mengirim...',
          success: 'Terima kasih! Kami akan menghubungi Anda segera.',
          error: 'Maaf, terjadi kesalahan. Coba lagi atau hubungi via WhatsApp.',
          validation: {
            nameMin: 'Nama minimal 2 karakter',
            emailInvalid: 'Email tidak valid',
            whatsappInvalid: 'Nomor WhatsApp tidak valid',
            messageMin: 'Pesan minimal 20 karakter',
          },
        },
        support: {
          title: 'Butuh bantuan cepat?',
          description: 'Hubungi kami langsung melalui WhatsApp atau email untuk respons lebih cepat.',
          waButton: 'Chat via WhatsApp',
          emailButton: 'Kirim Email',
        },
      },
      // Filters (for package list)
      filters: {
        all: 'Semua',
      },
      cta: {
        getStarted: 'Mulai Konsultasi',
        contactUs: 'Hubungi Kami',
        choosePackage: 'Pilih Paket',
        viewPortfolio: 'Lihat Portfolio',
      },
      footer: {
        rights: 'Hak cipta © {{year}} SICOST. Semua hak dilindungi.',
      },
      hero: {
        h1: 'Website Profesional untuk UMKM',
        sub: 'Dari Konsultasi Hingga Maintenance - Kami Ada untuk Membantu',
      },
      why: {
        title: 'Kenapa Pilih SiCost?',
        subtitle:
          'Kami memahami kebutuhan bisnis kecil dan menawarkan solusi yang tepat',
        features: {
          personal: {
            title: 'Komunikasi Langsung & Intensif',
            desc:
              'Tidak hanya nomor tiket. Anda berbicara langsung dengan founder yang memahami visi bisnis Anda',
          },
          support: {
            title: 'Support Berkelanjutan',
            desc:
              'Website Anda tidak ditinggalkan setelah launch. Kami ada untuk membantu kapan pun Anda butuh',
          },
          price: {
            title: 'Harga Terjangkau untuk UMKM',
            desc:
              'Kualitas profesional tanpa harus menguras budget. Website berkualitas yang sesuai dengan kantong UMKM',
          },
        },
      },
      packages: {
        title: 'Paket Layanan Kami',
        subtitle: 'Pilih paket yang sesuai dengan kebutuhan bisnis Anda',
        basic: {
          title: 'Basic',
          price: 'Mulai dari Rp 120.000',
          tagline: 'Perfect untuk landing page sederhana',
          timeline: '7-12 hari kerja',
        },
        standard: {
          title: 'Standard',
          price: 'Mulai dari Rp 220.000',
          tagline: 'Untuk website bisnis lengkap',
          timeline: '7-12 hari kerja',
          badge: 'Paling Populer',
        },
        maintenance: {
          title: 'Standard + Maintenance',
          price: 'Mulai dari Rp 320.000',
          tagline: 'Website + dukungan penuh',
          timeline: '7-16 hari kerja (+ support)',
        },
        // Premium (alias untuk filter label)
        premium: {
          title: 'Premium',
        },
      },
      portfolio: {
        title: 'Project Terbaru Kami',
        subtitle: 'Lihat hasil kerja kami untuk berbagai jenis bisnis',
      },
      finalCta: {
        title: 'Siap mulai? Konsultasi gratis untuk kebutuhan website Anda',
      },
      services: {
        hero: {
          title: 'Layanan Pembuatan Website',
          subtitle: 'Solusi website profesional untuk semua kebutuhan bisnis Anda',
        },
        intro: {
          title: 'Pendekatan Kami',
          description: 'Di SiCost, kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik. Oleh karena itu, kami menawarkan berbagai paket layanan yang dapat disesuaikan dengan budget dan kebutuhan spesifik Anda.',
        },
        packages: {
          basic: {
            title: 'Paket Basic',
            price: 'Mulai dari Rp 120.000',
            timeline: '7-12 hari kerja',
            description: 'Cocok untuk bisnis yang membutuhkan landing page sederhana namun profesional',
            suitableFor: 'Cocok untuk:',
            suitableList: [
              'UMKM yang baru memulai',
              'Freelancer atau personal branding',
              'Bisnis dengan satu produk/layanan utama',
              'Event atau promosi khusus'
            ],
            included: 'Yang termasuk:',
            includedList: [
              'Landing page responsif (1 halaman)',
              'Desain modern dan profesional',
              'Optimasi SEO dasar',
              'Integrasi WhatsApp',
              'Form kontak',
              'Google Analytics',
              'SSL Certificate',
              'Hosting 1 tahun'
            ],
            notIncluded: 'Yang tidak termasuk:',
            notIncludedList: [
              'Halaman tambahan',
              'Sistem manajemen konten (CMS)',
              'E-commerce functionality',
              'Maintenance berkelanjutan'
            ]
          },
          standard: {
            title: 'Paket Standard',
            price: 'Mulai dari Rp 220.000',
            timeline: '7-12 hari kerja',
            description: 'Solusi lengkap untuk bisnis yang membutuhkan website multi-halaman dengan fitur lengkap',
            badge: 'Paling Populer',
            suitableFor: 'Cocok untuk:',
            suitableList: [
              'UMKM yang sudah berkembang',
              'Bisnis dengan multiple produk/layanan',
              'Perusahaan yang membutuhkan kredibilitas online',
              'Bisnis yang ingin ekspansi digital'
            ],
            included: 'Yang termasuk:',
            includedList: [
              'Website multi-halaman (hingga 5 halaman)',
              'Desain custom dan responsif',
              'Sistem manajemen konten (CMS)',
              'Optimasi SEO lanjutan',
              'Integrasi media sosial',
              'Form kontak dan newsletter',
              'Google Analytics & Search Console',
              'SSL Certificate',
              'Hosting 1 tahun',
              'Training penggunaan CMS'
            ],
            notIncluded: 'Yang tidak termasuk:',
            notIncludedList: [
              'E-commerce functionality',
              'Maintenance berkelanjutan',
              'Konten copywriting',
              'Fotografi produk'
            ]
          },
          maintenance: {
            title: 'Standard + Maintenance',
            price: 'Mulai dari Rp 320.000',
            timeline: '7-16 hari kerja + support berkelanjutan',
            description: 'Paket Standard dengan dukungan maintenance dan update berkelanjutan',
            suitableFor: 'Cocok untuk:',
            suitableList: [
              'Bisnis yang tidak memiliki tim IT internal',
              'Perusahaan yang fokus pada core business',
              'Bisnis yang membutuhkan website selalu up-to-date',
              'UMKM yang ingin peace of mind'
            ],
            included: 'Yang termasuk (semua fitur Standard +):',
            includedList: [
              'Maintenance bulanan',
              'Update konten (hingga 2x per bulan)',
              'Backup otomatis',
              'Monitoring keamanan',
              'Update plugin dan sistem',
              'Support teknis prioritas',
              'Laporan performa bulanan',
              'Minor design adjustments'
            ],
            notIncluded: 'Yang tidak termasuk:',
            notIncludedList: [
              'Major redesign',
              'Penambahan halaman baru (dikenakan biaya terpisah)',
              'E-commerce functionality',
              'Custom development'
            ]
          },
          premium: {
            title: 'Paket Premium',
            price: 'Mulai dari Rp 500.000',
            timeline: '14-21 hari kerja',
            description: 'Solusi enterprise dengan fitur lengkap dan customization penuh',
            suitableFor: 'Cocok untuk:',
            suitableList: [
              'Perusahaan menengah ke atas',
              'Bisnis dengan kebutuhan khusus',
              'E-commerce dan toko online',
              'Bisnis yang membutuhkan integrasi sistem'
            ],
            included: 'Yang termasuk:',
            includedList: [
              'Website unlimited halaman',
              'Custom design dan development',
              'E-commerce functionality',
              'Payment gateway integration',
              'Advanced SEO optimization',
              'Custom features sesuai kebutuhan',
              'API integration',
              'Advanced analytics',
              'SSL Certificate',
              'Hosting 1 tahun',
              'Training lengkap',
              '3 bulan maintenance gratis'
            ],
            notIncluded: 'Yang tidak termasuk:',
            notIncludedList: [
              'Maintenance setelah 3 bulan (tersedia paket terpisah)',
              'Third-party license fees',
              'Custom mobile app'
            ]
          }
        }
      },
    },
  },
  en: {
    common: {
      brand: 'SICOST',
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        faq: 'FAQ',
        contact: 'Contact',
      },
      faq: {
        seo: {
          title: 'FAQ - Frequently Asked Questions',
          description:
            'Clear, concise answers to common questions about SICOST website services.',
          keywords:
            'faq, questions, website services, pricing, process, support, SEO, maintenance',
        },
        title: 'Frequently Asked Questions',
        subtitle: 'We summarize the most searched answers so you can quickly find what you need.',
        search: {
          placeholder: 'Search questions or keywords...',
        },
        noResults: 'No results match your search.',
        contactPrompt: "Didn't find the answer you're looking for?",
        contactLinkText: 'Contact Support',
        lastUpdated: 'Last updated: {{date}}',
        categories: {
          all: 'All',
          general: 'General',
          pricing: 'Pricing',
          technical: 'Technical',
          process: 'Process',
          support: 'Support',
        },
        items: {
          general: [
            {
              q: 'What are SICOST’s core services?',
              a: 'We build websites end‑to‑end: consultation, landing pages, multi‑page sites, custom features, basic SEO, analytics, and WhatsApp integration.',
            },
            {
              q: 'Are the websites responsive?',
              a: 'Yes. We ensure optimal display across mobile, tablet, and desktop using modern UI/UX practices.',
            },
            {
              q: 'Which package fits my business?',
              a: 'Basic for simple landing pages, Standard for multi‑page sites, Maintenance for ongoing support, Premium for custom/enterprise needs.',
            },
            {
              q: 'Do you provide content?',
              a: 'We provide guidance and content structure. Optional copywriting is available when needed.',
            },
          ],
          pricing: [
            {
              q: 'How is pricing determined?',
              a: 'Pricing depends on the package and scope. Extra costs apply for custom features, third‑party licenses, or requests outside the package.',
            },
            {
              q: 'What payment methods are supported?',
              a: 'Bank transfer and QRIS. An invoice is provided with a transparent payment schedule.',
            },
            {
              q: 'Are there hidden fees?',
              a: 'No. We disclose all costs upfront: domain, hosting, licenses, or premium assets when required.',
            },
            {
              q: 'What is the revision policy?',
              a: 'Basic: 1 revision, Standard: 2 revisions. Additional revisions depend on complexity and may be charged.',
            },
          ],
          technical: [
            {
              q: 'Is a CMS provided?',
              a: 'Standard and above include a CMS for content management. Basic focuses on landing pages without a full CMS.',
            },
            {
              q: 'Is SEO included?',
              a: 'Basic SEO is included in all packages. Standard and Premium include advanced optimization and Search Console integration.',
            },
            {
              q: 'What about performance and security?',
              a: 'We apply performance best practices, caching, SSL, and basic monitoring. Maintenance provides regular updates and security monitoring.',
            },
            {
              q: 'Do you support analytics integration?',
              a: 'Yes. We can enable Google Analytics and basic event tracking as needed.',
            },
          ],
          process: [
            {
              q: 'How long does development take?',
              a: 'Typically 7–12 working days depending on package and content readiness. Premium 14–21 working days.',
            },
            {
              q: 'What is the project workflow?',
              a: 'Consultation → Planning → Design → Development → Review → Launch → (Optional Maintenance).',
            },
            {
              q: 'What should clients prepare?',
              a: 'Logo/brand assets, base content, design references, domain/hosting access if any, and timely feedback.',
            },
            {
              q: 'Is content migration supported?',
              a: 'Yes for small to medium scale. Large or complex migrations are discussed separately as needed.',
            },
          ],
          support: [
            {
              q: 'Is post‑launch support provided?',
              a: 'Yes, we include initial bug‑fix and guidance. Maintenance/Premium include ongoing support.',
            },
            {
              q: 'Support response hours?',
              a: 'Working days 09:00–18:00 WIB (best effort). Fast responses via WhatsApp.',
            },
            {
              q: 'How do I contact support?',
              a: 'Use the WhatsApp button on the site or the Contact page. We assist technical and business questions.',
            },
            {
              q: 'Do you offer SLA?',
              a: 'For SMEs we apply a best effort approach. Dedicated SLAs are available for enterprise/Premium.',
            },
          ],
        },
      },
      about: {
        seo: {
          title: 'About SICOST',
          description:
            'SICOST is a website development service focused on business outcomes for SMEs and growing companies.',
          keywords:
            'about, sicost, web development, small business, web design, website building, maintenance, SEO',
        },
        hero: {
          title: 'About SICOST',
          subtitle:
            'We build websites with a simple, communicative, and outcome‑oriented approach.',
        },
        who: {
          title: 'Who We Are',
          description:
            'We are a small team combining design and technology to deliver websites that create real business impact. We prioritize direct communication, a clear process, and ongoing support.',
        },
        values: {
          title: 'Our Values',
          items: [
            {
              title: 'Outcome Focus',
              desc: 'Every design and technical decision aims at your business goals.',
            },
            {
              title: 'Transparency & Clarity',
              desc: 'Process, timeline, and costs are communicated clearly with no surprises.',
            },
            {
              title: 'Consistent Quality',
              desc: 'Technical standards and UI/UX are kept consistent across projects.',
            },
          ],
        },
        process: {
          title: 'How We Work',
          steps: [
            {
              title: 'Consultation',
              desc: 'Understand your needs, targets, and business priorities.',
            },
            {
              title: 'Planning',
              desc: 'Define content structure, design, and feature scope.',
            },
            {
              title: 'Development',
              desc: 'Build a responsive website using modern best practices.',
            },
            {
              title: 'Launch',
              desc: 'Testing, basic SEO, domain and hosting configuration.',
            },
            {
              title: 'Optional Maintenance',
              desc: 'Content updates and ongoing technical support.',
            },
          ],
        },
      },
      faqLegacy: {
        seo: {
          title: 'FAQ',
          description: 'Answers to frequently asked questions about SICOST website services.',
          keywords: 'faq, questions, pricing, process, technical, support, sicost',
        },
        title: 'Frequently Asked Questions',
        subtitle: "Find quick answers about our services, pricing, process, and support.",
        categories: {
          all: 'All',
          general: 'General',
          pricing: 'Pricing',
          technical: 'Technical',
          process: 'Process',
          support: 'Support',
        },
        search: {
          placeholder: 'Search questions (e.g., timeline, SEO, pricing)',
        },
        lastUpdated: 'Last updated: {{date}}',
        noResults: 'No matching results. Try other keywords.',
        contactPrompt: "Didn't find what you need? Our team is ready to help.",
        contactLinkText: 'WhatsApp Support',
        items: {
          general: [
            { q: 'What services does SICOST offer?', a: 'We build responsive websites from landing pages to multi-page sites, including basic SEO, WhatsApp integration, contact forms, and optional maintenance.' },
            { q: 'Are the websites responsive?', a: 'Yes. All our websites are designed mobile-first and tested across screen sizes.' },
            { q: 'Which package is right for me?', a: 'Choose Basic for simple needs; Standard for growing businesses; Standard + Maintenance for ongoing support; Premium for custom/enterprise needs.' },
            { q: 'Do you provide content/copywriting?', a: 'We can help structure basic content, while comprehensive copywriting is a separate service. You may provide your own content or request add-on service.' },
          ],
          pricing: [
            { q: 'What is the price range?', a: 'We offer several packages with transparent pricing based on scope. See Services page or contact us for an accurate estimate.' },
            { q: 'What payment methods are available?', a: 'Bank transfer and common digital payments in Indonesia. Payments are staged according to milestones.' },
            { q: 'Are there hidden fees?', a: 'No. All costs are communicated upfront. Additional features beyond agreement will be confirmed beforehand.' },
            { q: 'How many revisions are included?', a: 'We provide reasonable revisions at each stage. Large changes outside the scope will be discussed and may incur fees.' },
          ],
          technical: [
            { q: 'Do websites use a CMS?', a: 'For Standard and above, we provide a CMS so you can manage content. Basic package typically excludes CMS.' },
            { q: 'How about SEO?', a: 'We apply foundational SEO (semantic structure, metadata, performance). For advanced SEO needs, add-on options are available.' },
            { q: 'What about security and performance?', a: 'We prioritize baseline security practices, SSL, and performance optimization. Advanced monitoring and hardening are available in Maintenance/Premium packages.' },
            { q: 'Do you support analytics/tracking?', a: 'Yes. Google Analytics/Search Console integration is included at least in Standard. Key events (search, category clicks, toggles) can be tracked.' },
          ],
          process: [
            { q: 'How long does it take?', a: 'Usually 7–16 working days depending on package and scope. Work is split into milestones.' },
            { q: 'What does the workflow look like?', a: 'Consultation → Planning → Design/Implementation → Review → Launch → (Optional Maintenance). We keep communication clear at each stage.' },
            { q: 'What should clients prepare?', a: 'Logo, brand guidelines (if any), basic content (text/images), and website references. We help refine structure and priorities.' },
            { q: 'Can you migrate content?', a: 'Yes. Migration from an existing site will be assessed first; extra time and cost may apply depending on complexity.' },
          ],
          support: [
            { q: 'What happens after the site goes live?', a: 'We provide handover and brief documentation. For ongoing support, choose Maintenance or Premium packages.' },
            { q: 'How fast do you respond?', a: 'During normal working hours. Priority is given to Maintenance/Premium clients. We strive to respond as quickly as possible.' },
            { q: 'How to contact support?', a: 'Reach us via WhatsApp/Email from the Contact page. Simple ticketing is available in Maintenance packages.' },
            { q: 'Is there an SLA?', a: 'For Maintenance/Premium packages we provide a clear response time target (SLA) based on agreement.' },
          ],
        },
      },
      contact: {
        seo: {
          title: 'Contact',
          description: 'Reach out to SICOST for website consultation, quotes, or support.',
          keywords: 'contact, consultation, quote, whatsapp, email, website services',
        },
        hero: {
          title: 'Get in Touch',
          subtitle: 'We’re here to help—from consultation to launch. Use the form or contact us via WhatsApp.',
        },
        methods: {
          whatsapp: 'WhatsApp',
          email: 'Email',
          hours: 'Office Hours',
          hoursValue: 'Monday–Friday, 09:00–17:00 WIB',
        },
        form: {
          title: 'Contact Form',
          name: { label: 'Name', placeholder: 'Your full name' },
          email: { label: 'Email', placeholder: 'name@domain.com' },
          whatsapp: { label: 'WhatsApp', placeholder: 'Example: 6281234567890' },
          package: { label: 'Select Package (optional)', placeholder: 'Choose a service package' },
          message: { label: 'Message', placeholder: 'Tell us about your website needs' },
          submit: 'Send Message',
          sending: 'Sending...',
          success: 'Thank you! We will contact you soon.',
          error: 'Sorry, something went wrong. Please try again or use WhatsApp.',
          validation: {
            nameMin: 'Name must be at least 2 characters',
            emailInvalid: 'Invalid email address',
            whatsappInvalid: 'Invalid WhatsApp number',
            messageMin: 'Message must be at least 20 characters',
          },
        },
        support: {
          title: 'Need quick help?',
          description: 'Contact us directly via WhatsApp or email for faster response.',
          waButton: 'Chat on WhatsApp',
          emailButton: 'Send Email',
        },
      },
      // Filters (for package list)
      filters: {
        all: 'All',
      },
      cta: {
        getStarted: 'Start Consultation',
        contactUs: 'Contact Us',
        choosePackage: 'Choose Package',
        viewPortfolio: 'View Portfolio',
      },
      footer: {
        rights: 'Copyright © {{year}} SICOST. All rights reserved.',
      },
      hero: {
        h1: 'Professional Websites for Small Businesses',
        sub: "From Consultation to Maintenance - We're Here to Help",
      },
      why: {
        title: 'Why Choose SiCost?',
        subtitle: 'We understand small business needs and offer the right solutions',
        features: {
          personal: {
            title: 'Direct & Intensive Communication',
            desc:
              "More than just a ticket number. You speak directly with the founder who understands your business vision",
          },
          support: {
            title: 'Ongoing Support',
            desc:
              "Your website isn't abandoned after launch. We're here to help whenever you need",
          },
          price: {
            title: 'Affordable for Small Businesses',
            desc:
              'Professional quality without breaking the budget. Quality websites that fit small business budgets',
          },
        },
      },
      packages: {
        title: 'Our Service Packages',
        subtitle: 'Choose the package that fits your business needs',
        basic: {
          title: 'Basic',
          price: 'Starting from Rp 120,000',
          tagline: 'Perfect for simple landing pages',
          timeline: '7-12 working days',
        },
        standard: {
          title: 'Standard',
          price: 'Starting from Rp 220,000',
          tagline: 'For complete business websites',
          timeline: '7-12 working days',
          badge: 'Most Popular',
        },
        maintenance: {
          title: 'Standard + Maintenance',
          price: 'Starting from Rp 320,000',
          tagline: 'Website + full support',
          timeline: '7-16 working days (+ support)',
        },
        // Premium (alias for filter label)
        premium: {
          title: 'Premium',
        },
      },
      portfolio: {
        title: 'Our Latest Projects',
        subtitle: 'See our work for various types of businesses',
      },
      finalCta: {
        title: 'Ready to start? Free consultation for your website needs',
      },
      services: {
        hero: {
          title: 'Website Development Services',
          subtitle: 'Professional website solutions for all your business needs',
        },
        intro: {
          title: 'Our Approach',
          description: 'At SiCost, we understand that every business has unique needs. Therefore, we offer various service packages that can be customized to your specific budget and requirements.',
        },
        packages: {
          basic: {
            title: 'Basic Package',
            price: 'Starting from Rp 120,000',
            timeline: '7-12 working days',
            description: 'Perfect for businesses that need a simple yet professional landing page',
            suitableFor: 'Suitable for:',
            suitableList: [
              'Startups and new SMEs',
              'Freelancers or personal branding',
              'Businesses with one main product/service',
              'Special events or promotions'
            ],
            included: 'What\'s included:',
            includedList: [
              'Responsive landing page (1 page)',
              'Modern and professional design',
              'Basic SEO optimization',
              'WhatsApp integration',
              'Contact form',
              'Google Analytics',
              'SSL Certificate',
              '1 year hosting'
            ],
            notIncluded: 'What\'s not included:',
            notIncludedList: [
              'Additional pages',
              'Content Management System (CMS)',
              'E-commerce functionality',
              'Ongoing maintenance'
            ]
          },
          standard: {
            title: 'Standard Package',
            price: 'Starting from Rp 220,000',
            timeline: '7-12 working days',
            description: 'Complete solution for businesses that need multi-page websites with full features',
            badge: 'Most Popular',
            suitableFor: 'Suitable for:',
            suitableList: [
              'Growing SMEs',
              'Businesses with multiple products/services',
              'Companies needing online credibility',
              'Businesses planning digital expansion'
            ],
            included: 'What\'s included:',
            includedList: [
              'Multi-page website (up to 5 pages)',
              'Custom responsive design',
              'Content Management System (CMS)',
              'Advanced SEO optimization',
              'Social media integration',
              'Contact form and newsletter',
              'Google Analytics & Search Console',
              'SSL Certificate',
              '1 year hosting',
              'CMS usage training'
            ],
            notIncluded: 'What\'s not included:',
            notIncludedList: [
              'E-commerce functionality',
              'Ongoing maintenance',
              'Content copywriting',
              'Product photography'
            ]
          },
          maintenance: {
            title: 'Standard + Maintenance',
            price: 'Starting from Rp 320,000',
            timeline: '7-16 working days + ongoing support',
            description: 'Standard Package with ongoing maintenance and update support',
            suitableFor: 'Suitable for:',
            suitableList: [
              'Businesses without internal IT team',
              'Companies focusing on core business',
              'Businesses needing always up-to-date websites',
              'SMEs wanting peace of mind'
            ],
            included: 'What\'s included (all Standard features +):',
            includedList: [
              'Monthly maintenance',
              'Content updates (up to 2x per month)',
              'Automatic backups',
              'Security monitoring',
              'Plugin and system updates',
              'Priority technical support',
              'Monthly performance reports',
              'Minor design adjustments'
            ],
            notIncluded: 'What\'s not included:',
            notIncludedList: [
              'Major redesign',
              'New page additions (charged separately)',
              'E-commerce functionality',
              'Custom development'
            ]
          },
          premium: {
            title: 'Premium Package',
            price: 'Starting from Rp 500,000',
            timeline: '14-21 working days',
            description: 'Enterprise solution with full features and complete customization',
            suitableFor: 'Suitable for:',
            suitableList: [
              'Medium to large companies',
              'Businesses with special requirements',
              'E-commerce and online stores',
              'Businesses needing system integration'
            ],
            included: 'What\'s included:',
            includedList: [
              'Unlimited pages website',
              'Custom design and development',
              'E-commerce functionality',
              'Payment gateway integration',
              'Advanced SEO optimization',
              'Custom features as needed',
              'API integration',
              'Advanced analytics',
              'SSL Certificate',
              '1 year hosting',
              'Complete training',
              '3 months free maintenance'
            ],
            notIncluded: 'What\'s not included:',
            notIncludedList: [
              'Maintenance after 3 months (separate package available)',
              'Third-party license fees',
              'Custom mobile app'
            ]
          }
        }
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources: {
    id: { common: resources.id.common },
    en: { common: resources.en.common },
  },
  lng: import.meta.env.VITE_APP_LOCALE || 'id',
  fallbackLng: 'id',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

export default i18n
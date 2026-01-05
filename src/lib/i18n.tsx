'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'id';

const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      contact: 'Contact',
    },
    // Home
    home: {
      hero: {
        title: 'Software for Indonesian Business',
        subtitle: 'We build modern software to help businesses in Indonesia operate more efficiently. From POS systems to studio management.',
        cta: 'View Products',
        contact: 'Contact Us',
      },
      products: {
        title: 'Our Products',
        subtitle: 'Software built specifically for local business needs',
        warungos: {
          tagline: 'POS for Restaurant & Retail',
          description: 'Complete cashier system with kitchen display, inventory, and financial reports.',
          badge: 'POS System',
          features: ['Point of Sale', 'Kitchen Display', 'Inventory', 'Reports'],
        },
        studiodesk: {
          tagline: 'Fitness Studio Management',
          description: 'Manage class schedules, memberships, and check-in with QR code.',
          badge: 'Studio Management',
          features: ['Class Schedule', 'Membership', 'QR Check-in', 'WhatsApp'],
        },
        learn: 'Learn More',
        demo: 'Demo',
      },
      why: {
        title: 'Why Choose Us?',
        reliable: {
          title: 'Reliable',
          desc: '99.9% uptime with infrastructure built for Indonesian businesses.',
        },
        easy: {
          title: 'Easy to Use',
          desc: 'Intuitive interface, ready to use without extensive training.',
        },
        support: {
          title: 'Local Support',
          desc: 'Indonesian-speaking support team, ready to help anytime.',
        },
      },
      cta: {
        title: 'Ready to Start?',
        subtitle: 'Contact us for free consultation and product demo.',
        contact: 'Contact Us',
        whatsapp: 'WhatsApp',
      },
    },
    // Product pages
    product: {
      features: 'Complete Features',
      featuresSubtitle: 'Everything you need to run your business',
      screenshots: 'Screenshots',
      screenshotsSubtitle: 'See the application interface',
      tryDemo: 'Try Demo',
      demoAccess: 'Access demo with the following credentials:',
      openDemo: 'Open Demo',
      interested: 'Interested in',
      contactSubtitle: 'Contact us for free demo and consultation',
      contactUs: 'Contact Us',
      contactSales: 'Contact Sales',
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'A small team passionate about building software that makes a real difference.',
      story: {
        title: 'Our Story',
        p1: 'precise-software was founded with a simple mission: to build software that helps businesses operate more efficiently without the complexity and cost of enterprise solutions.',
        p2: 'Our first product, WarungOS, was born from firsthand experience seeing small restaurants and cafes struggle with POS systems that were too expensive or too complicated for their needs.',
        p3: 'We believe every business, regardless of size, deserves access to modern, well-designed software. That\'s why we focus on building products that are powerful yet simple, affordable yet feature-rich.',
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide everything we do',
        quality: {
          title: 'Quality First',
          desc: 'We build software that works reliably. No compromises.',
        },
        user: {
          title: 'User Focused',
          desc: 'Every feature starts with understanding real needs.',
        },
        simple: {
          title: 'Simple',
          desc: 'Powerful doesn\'t have to be complicated.',
        },
        everyone: {
          title: 'For Everyone',
          desc: 'Software accessible for businesses of all sizes.',
        },
      },
      team: {
        title: 'Team',
        desc: 'A small but dedicated team of developers, designers, and problem solvers working to build the best software tools for businesses.',
        location: 'Based in Indonesia',
      },
      cta: {
        title: 'Let\'s Work Together',
        subtitle: 'Contact us to discuss your business needs',
      },
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Have questions? We\'re ready to help.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        email: 'Email',
        emailPlaceholder: 'email@example.com',
        product: 'Product of Interest',
        productPlaceholder: 'Select product',
        other: 'Other',
        message: 'Message',
        messagePlaceholder: 'Tell us about your needs...',
        submit: 'Send Message',
      },
      success: {
        title: 'Message Sent!',
        message: 'Thank you for contacting us. We will reply within 24 hours.',
        another: 'Send another message',
      },
      alternative: 'Or contact directly:',
    },
    // Footer
    footer: {
      tagline: 'Software for Indonesian businesses',
      products: 'Products',
      company: 'Company',
      aboutUs: 'About Us',
      contactLink: 'Contact',
      contactTitle: 'Contact',
    },
    // Common
    common: {
      learnMore: 'Learn More',
    },
  },
  id: {
    // Header
    nav: {
      about: 'Tentang',
      contact: 'Kontak',
    },
    // Home
    home: {
      hero: {
        title: 'Software untuk Bisnis Indonesia',
        subtitle: 'Kami membangun software modern yang membantu bisnis di Indonesia beroperasi lebih efisien. Dari sistem kasir hingga manajemen studio.',
        cta: 'Lihat Produk',
        contact: 'Hubungi Kami',
      },
      products: {
        title: 'Produk Kami',
        subtitle: 'Software yang dibuat khusus untuk kebutuhan bisnis lokal',
        warungos: {
          tagline: 'POS untuk Restoran & Retail',
          description: 'Sistem kasir lengkap dengan kitchen display, inventory, dan laporan keuangan.',
          badge: 'POS System',
          features: ['Point of Sale', 'Kitchen Display', 'Inventory', 'Laporan'],
        },
        studiodesk: {
          tagline: 'Manajemen Studio Fitness',
          description: 'Kelola jadwal kelas, membership, dan check-in dengan QR code.',
          badge: 'Studio Management',
          features: ['Jadwal Kelas', 'Membership', 'QR Check-in', 'WhatsApp'],
        },
        learn: 'Pelajari',
        demo: 'Demo',
      },
      why: {
        title: 'Mengapa Pilih Kami?',
        reliable: {
          title: 'Handal',
          desc: 'Uptime 99.9% dengan infrastruktur yang dibangun untuk bisnis Indonesia.',
        },
        easy: {
          title: 'Mudah Digunakan',
          desc: 'Interface yang intuitif, bisa langsung dipakai tanpa training panjang.',
        },
        support: {
          title: 'Support Lokal',
          desc: 'Tim support berbahasa Indonesia, siap membantu kapan saja.',
        },
      },
      cta: {
        title: 'Siap Memulai?',
        subtitle: 'Hubungi kami untuk konsultasi gratis dan demo produk.',
        contact: 'Hubungi Kami',
        whatsapp: 'WhatsApp',
      },
    },
    // Product pages
    product: {
      features: 'Fitur Lengkap',
      featuresSubtitle: 'Semua yang dibutuhkan untuk menjalankan bisnis Anda',
      screenshots: 'Screenshot',
      screenshotsSubtitle: 'Lihat tampilan aplikasi',
      tryDemo: 'Coba Demo',
      demoAccess: 'Akses demo dengan akun berikut:',
      openDemo: 'Buka Demo',
      interested: 'Tertarik dengan',
      contactSubtitle: 'Hubungi kami untuk demo dan konsultasi gratis',
      contactUs: 'Hubungi Kami',
      contactSales: 'Hubungi Sales',
    },
    // About
    about: {
      title: 'Tentang Kami',
      subtitle: 'Tim kecil yang passionate membangun software yang membuat perbedaan nyata.',
      story: {
        title: 'Cerita Kami',
        p1: 'precise-software didirikan dengan misi sederhana: membangun software yang membantu bisnis beroperasi lebih efisien tanpa kompleksitas dan biaya solusi enterprise.',
        p2: 'Produk pertama kami, WarungOS, lahir dari pengalaman langsung melihat restoran dan kafe kecil kesulitan dengan sistem POS yang terlalu mahal atau terlalu rumit untuk kebutuhan mereka.',
        p3: 'Kami percaya setiap bisnis, apapun ukurannya, berhak mendapat akses ke software modern yang well-designed. Karena itu kami fokus membangun produk yang powerful tapi simple, affordable tapi feature-rich.',
      },
      values: {
        title: 'Nilai Kami',
        subtitle: 'Prinsip yang memandu semua yang kami lakukan',
        quality: {
          title: 'Kualitas Utama',
          desc: 'Kami membangun software yang bekerja dengan andal. Tanpa kompromi.',
        },
        user: {
          title: 'Fokus Pengguna',
          desc: 'Setiap fitur dimulai dari memahami kebutuhan nyata.',
        },
        simple: {
          title: 'Sederhana',
          desc: 'Powerful tidak harus rumit.',
        },
        everyone: {
          title: 'Untuk Semua',
          desc: 'Software yang accessible untuk bisnis semua ukuran.',
        },
      },
      team: {
        title: 'Tim',
        desc: 'Tim kecil tapi dedicated dari developers, designers, dan problem solvers yang bekerja membangun software tools terbaik untuk bisnis.',
        location: 'Berbasis di Indonesia',
      },
      cta: {
        title: 'Mari Bekerja Sama',
        subtitle: 'Hubungi kami untuk diskusi kebutuhan bisnis Anda',
      },
    },
    // Contact
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Ada pertanyaan? Kami siap membantu.',
      form: {
        name: 'Nama',
        namePlaceholder: 'Nama Anda',
        email: 'Email',
        emailPlaceholder: 'email@contoh.com',
        product: 'Produk yang Diminati',
        productPlaceholder: 'Pilih produk',
        other: 'Lainnya',
        message: 'Pesan',
        messagePlaceholder: 'Ceritakan kebutuhan Anda...',
        submit: 'Kirim Pesan',
      },
      success: {
        title: 'Pesan Terkirim!',
        message: 'Terima kasih sudah menghubungi kami. Kami akan membalas dalam 24 jam.',
        another: 'Kirim pesan lagi',
      },
      alternative: 'Atau hubungi langsung:',
    },
    // Footer
    footer: {
      tagline: 'Software untuk bisnis Indonesia',
      products: 'Produk',
      company: 'Perusahaan',
      aboutUs: 'Tentang Kami',
      contactLink: 'Kontak',
      contactTitle: 'Hubungi',
    },
    // Common
    common: {
      learnMore: 'Pelajari Lebih Lanjut',
    },
  },
};

type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

// Default context value for SSR
const defaultContextValue: LanguageContextType = {
  lang: 'id',
  setLang: () => {},
  t: translations.id,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('lang') as Language;
    if (saved && (saved === 'en' || saved === 'id')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  // During SSR/SSG, return children with default context
  if (!mounted) {
    return (
      <LanguageContext.Provider value={defaultContextValue}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Export translations for direct use
export { translations };

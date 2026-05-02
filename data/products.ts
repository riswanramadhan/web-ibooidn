export type ProductKey =
  | "purple_freak"
  | "ginger_shot"
  | "turmeric_shot"
  | "carrot_crush"
  | "celery_shot";

export type Product = {
  key: ProductKey;
  name: string;
  descriptionLead: string;
  descriptionBody: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  showBestSeller: boolean;
  showBadgeIcon: boolean;
  storage: {
    title: string;
    detail: string;
  };
  consumption: {
    title: string;
    detail: string;
  };
  composition: string[];
};

export const products: Record<ProductKey, Product> = {
  purple_freak: {
    key: "purple_freak",
    name: "Purple Freak",
    descriptionLead: "Cocok untuk kamu yang mudah lelah, anemia & insomnia.",
    descriptionBody:
      "Membantu mendukung daya tahan tubuh, menjaga keseimbangan gula darah, serta menunjang kesehatan jantung, hati, dan otak. Juga berperan dalam merawat kesehatan mata, kulit, rambut, gigi, dan mulut.",
    image: "/images/purple.freak-produk.jpg.PNG",
    imageAlt: "Iboo.idn Purple Freak 70ml Wellness Shot",
    imagePosition: "center center",
    showBestSeller: true,
    showBadgeIcon: true,
    storage: {
      title: "Simpan di tempat dingin",
      detail: "Tahan 3 hari dalam chiller dan 14 hari dalam freezer",
    },
    consumption: {
      title: "Pagi atau malam hari",
      detail: "Kocok dulu, lalu minum 1 shot per hari untuk hasil optimal",
    },
    composition: [
      "100% ekstrak buah bit, wortel, apel, jahe dan lemon",
      "Tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan",
      "Vegan-friendly, dan ramah lingkungan",
    ],
  },
  ginger_shot: {
    key: "ginger_shot",
    name: "Ginger Shot",
    descriptionLead: "Cocok untuk kamu yang sedang demam, flu, dan batuk.",
    descriptionBody:
      "Membantu menjaga daya tahan tubuh, menjaga kesehatan pencernaan, mengontrol tekanan darah, mengurangi peradangan, meningkatkan kesehatan tulang, mempercepat penyembuhan luka, membantu mencegah penyakit kardiovaskular, serta meringankan gejala sinusitis.",
    image: "/images/ginger.shot-produk.jpg.PNG",
    imageAlt: "Iboo.idn Ginger Shot 70ml Wellness Shot",
    showBestSeller: false,
    showBadgeIcon: false,
    storage: {
      title: "Simpan di tempat dingin",
      detail: "Tahan 3 hari dalam chiller dan 14 hari dalam freezer",
    },
    consumption: {
      title: "Pagi atau malam hari",
      detail: "Kocok dulu, lalu minum 1 shot per hari untuk hasil optimal",
    },
    composition: [
      "100% ekstrak jahe, nanas, dan lemon",
      "Tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan",
      "Vegan-friendly, dan ramah lingkungan",
    ],
  },
  turmeric_shot: {
    key: "turmeric_shot",
    name: "Turmeric Shot",
    descriptionLead: "Solusi alami untuk pencernaan dan kesehatan kewanitaan.",
    descriptionBody:
      "Diformulasikan untuk membantu menjaga keseimbangan tubuh, mendukung kesehatan pencernaan dan hormonal. Dapat membantu mencerahkan kulit, menjaga vitalitas, mengontrol gula darah dan kolesterol, melawan peradangan, serta menjaga daya tahan tubuh.",
    image: "/images/turmeric.shot-produk.PNG",
    imageAlt: "Iboo.idn Turmeric Shot 70ml Wellness Shot",
    imagePosition: "center 20%",
    showBestSeller: true,
    showBadgeIcon: true,
    storage: {
      title: "Simpan di tempat dingin",
      detail: "Tahan 3 hari dalam chiller dan 14 hari dalam freezer",
    },
    consumption: {
      title: "Pagi atau malam hari",
      detail: "Kocok dulu, lalu minum 1 shot per hari untuk hasil optimal",
    },
    composition: [
      "100% ekstrak kunyit, jahe, jeruk, lemon dan jahe",
      "Tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan",
      "Vegan-friendly, dan ramah lingkungan",
    ],
  },
  carrot_crush: {
    key: "carrot_crush",
    name: "Carrot Crush",
    descriptionLead: "Menjaga kesehatan jantung, kulit, dan mata.",
    descriptionBody:
      "Diperkaya manfaat untuk mendukung daya tahan tubuh, menutrisi kulit secara alami, serta memelihara kesehatan rambut dan kekuatan tulang. Juga membantu mengendalikan kadar gula darah, mencegah penuaan dini, menjaga kesehatan ginjal, dan meminimalkan risiko penyakit kronis.",
    image: "/images/carrot.shot-produk.PNG",
    imageAlt: "Iboo.idn Carrot Crush 70ml Wellness Shot",
    imagePosition: "center 40%",
    showBestSeller: false,
    showBadgeIcon: false,
    storage: {
      title: "Simpan di tempat dingin",
      detail: "Tahan 3 hari dalam chiller dan 14 hari dalam freezer",
    },
    consumption: {
      title: "Pagi atau malam hari",
      detail: "Kocok dulu, lalu minum 1 shot per hari untuk hasil optimal",
    },
    composition: [
      "100% ekstrak wortel, jahe, jeruk, lemon, dan apel",
      "Tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan",
      "Vegan-friendly, dan ramah lingkungan",
    ],
  },
  celery_shot: {
    key: "celery_shot",
    name: "Celery Shot",
    descriptionLead: "Mendukung kesehatan otak, saraf, tulang, dan sendi.",
    descriptionBody:
      "Membantu menjaga daya tahan tubuh, mendukung kesehatan jantung, memperlambat penuaan, meningkatkan kesuburan, serta membantu menjaga fungsi otak dan daya ingat.",
    image: "/images/celery.shot-produk.PNG",
    imageAlt: "Iboo.idn Celery Shot 70ml Wellness Shot",
    showBestSeller: false,
    showBadgeIcon: false,
    storage: {
      title: "Simpan di tempat dingin",
      detail: "Tahan 3 hari dalam chiller dan 14 hari dalam freezer",
    },
    consumption: {
      title: "Pagi atau malam hari",
      detail: "Kocok dulu, lalu minum 1 shot per hari untuk hasil optimal",
    },
    composition: [
      "100% ekstrak seledri, jahe, nanas, lemon dan mentimun",
      "Tanpa tambahan gula, air, pengawet, pewarna, dan perasa buatan",
      "Vegan-friendly, dan ramah lingkungan",
    ],
  },
};

export const productOrder: ProductKey[] = [
  "purple_freak",
  "ginger_shot",
  "turmeric_shot",
  "carrot_crush",
  "celery_shot",
];

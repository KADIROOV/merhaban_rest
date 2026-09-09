export type Locale = "en" | "ru" | "uz";

export const locales: Locale[] = ["en", "ru", "uz"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export interface DishCopy {
  name: string;
  desc: string;
}

export interface Translation {
  meta: { title: string; description: string };
  nav: {
    menu: string;
    gallery: string;
    about: string;
    reviews: string;
    location: string;
    call: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaBook: string;
    ctaCall: string;
    ratingLabel: string;
    scroll: string;
  };
  about: {
    title: string;
    body: string;
    butcherLabel: string;
    teaLabel: string;
  };
  menu: {
    title: string;
    subtitle: string;
    categories: Record<"starters" | "salads" | "grill" | "sides" | "drinks", string>;
    dishes: Record<string, DishCopy>;
  };
  gallery: { title: string; subtitle: string };
  reviews: {
    title: string;
    countSuffix: string;
    sampleNote: string;
    testimonials: { name: string; quote: string }[];
  };
  hours: {
    title: string;
    subtitle: string;
    monSat: string;
    sun: string;
    hoursMonSat: string;
    hoursSun: string;
    landmark: string;
    directions: string;
    addressLabel: string;
    phoneLabel: string;
  };
  sticky: { call: string; whatsapp: string; reserve: string };
  doneness: { title: string; subtitle: string; levels: string[] };
  reservation: {
    title: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    submit: string;
    submitNote: string;
    close: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    hoursTitle: string;
    contactTitle: string;
    rights: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: "Merhaba Steakhouse — Tashkent",
      description:
        "A Turkish-style steakhouse in Tashkent — charcoal-grilled meat, aged cuts, and a table that's always warm.",
    },
    nav: {
      menu: "Menu",
      gallery: "Gallery",
      about: "About",
      reviews: "Reviews",
      location: "Location",
      call: "Call",
    },
    hero: {
      headline: "Fire. Meat. Tradition.",
      subheadline:
        "A Turkish grill in the heart of Tashkent — charcoal, aged cuts, and a table that's always warm.",
      ctaBook: "Book a table",
      ctaCall: "Call now",
      ratingLabel: "Loved across Tashkent",
      scroll: "Scroll",
    },
    about: {
      title: "Where the fire never goes out",
      body: "Merhaba brings the Anatolian mangal to Tashkent — cuts aged and butchered in house, grilled over open charcoal the way it's done from Adana to Istanbul. Every meal ends with a glass of tulip tea, poured slow, the way a table should close.",
      butcherLabel: "The butcher's case",
      teaLabel: "A glass of tea, always",
    },
    menu: {
      title: "Signature dishes",
      subtitle: "From the grill, the case, and the garden.",
      categories: {
        starters: "Starters",
        salads: "Salads",
        grill: "Grill & Steaks",
        sides: "Sides",
        drinks: "Drinks",
      },
      dishes: {
        tomahawkSteak: {
          name: "Tomahawk steak",
          desc: "Bone-in, grilled over charcoal, served with grilled corn and a side relish.",
        },
        sizzlingLambChops: {
          name: "Sizzling lamb chops",
          desc: "Grilled lamb rack served hot off the plate with arugula, red onion, and cherry tomato.",
        },
        adanaKofta: {
          name: "Adana-style kofta",
          desc: "Hand-minced skewers grilled over charcoal, served with fries.",
        },
        slicedGrilledSteak: {
          name: "Sliced grilled steak",
          desc: "Char-grilled and sliced to order, served with fries.",
        },
        beefCarpaccio: {
          name: "Beef carpaccio",
          desc: "Thin-sliced raw beef with a mustard drizzle.",
        },
        pomegranateWalnutSalad: {
          name: "Pomegranate & walnut salad",
          desc: "Fresh greens, pomegranate seeds, corn, cherry tomato, and walnuts.",
        },
        grilledVegPlatter: {
          name: "Grilled vegetable platter",
          desc: "Peppers, zucchini, broccoli, and garlic, charred over the coals.",
        },
        turkishTeaService: {
          name: "Turkish tea service",
          desc: "Black tea poured hot into a tulip glass, the way every meal here ends.",
        },
      },
    },
    gallery: {
      title: "Inside Merhaba",
      subtitle: "The dining room, the grill, the plates — a look around.",
    },
    reviews: {
      title: "What the table says",
      countSuffix: "rating from diners across Tashkent",
      sampleNote: "Sample reviews — real guest reviews are coming soon.",
      testimonials: [
        {
          name: "Aziz K.",
          quote:
            "The tomahawk alone is worth the trip. Best steak I've had in Tashkent, full stop.",
        },
        {
          name: "Dilnoza R.",
          quote:
            "Smoky, generous, and the tea at the end is such a nice touch. Coming back with the whole family.",
        },
        {
          name: "James T.",
          quote:
            "Felt like a proper Anatolian mangal house. The lamb chops were incredible.",
        },
      ],
    },
    hours: {
      title: "Hours & location",
      subtitle: "Find us near Daniel Hill.",
      monSat: "Mon – Sat",
      sun: "Sunday",
      hoursMonSat: "12:00 – 00:00",
      hoursSun: "11:00 – 23:30",
      landmark: "Near Daniel Hill",
      directions: "Get directions",
      addressLabel: "Address",
      phoneLabel: "Phone",
    },
    sticky: { call: "Call", whatsapp: "WhatsApp", reserve: "Reserve a table" },
    doneness: {
      title: "How do you take it?",
      subtitle: "Drag to see how we grill it.",
      levels: ["Rare", "Medium rare", "Medium", "Medium well", "Well done"],
    },
    reservation: {
      title: "Book a table",
      name: "Full name",
      phone: "Phone number",
      date: "Date",
      time: "Time",
      guests: "Guests",
      submit: "Request table",
      submitNote: "We'll confirm by phone shortly after you submit.",
      close: "Close",
    },
    footer: {
      tagline: "Fire. Meat. Tradition.",
      navTitle: "Explore",
      hoursTitle: "Hours",
      contactTitle: "Contact",
      rights: "All rights reserved.",
    },
  },
  ru: {
    meta: {
      title: "Merhaba Steakhouse — Ташкент",
      description:
        "Стейкхаус в турецком стиле в Ташкенте — мясо на углях, выдержанные отрубы и стол, за которым всегда тепло.",
    },
    nav: {
      menu: "Меню",
      gallery: "Галерея",
      about: "О нас",
      reviews: "Отзывы",
      location: "Локация",
      call: "Позвонить",
    },
    hero: {
      headline: "Огонь. Мясо. Традиция.",
      subheadline:
        "Турецкий гриль в самом сердце Ташкента — уголь, выдержанное мясо и стол, за которым всегда тепло.",
      ctaBook: "Забронировать столик",
      ctaCall: "Позвонить",
      ratingLabel: "Любимое место Ташкента",
      scroll: "Листайте вниз",
    },
    about: {
      title: "Огонь, который не гаснет",
      body: "Merhaba приносит анатолийский мангал в Ташкент — мясо выдерживается и разделывается на месте, готовится на открытом угле так же, как в Адане и Стамбуле. Каждый ужин завершается стаканом чая-тюльпан, налитого неспешно — так, как и должен заканчиваться настоящий ужин.",
      butcherLabel: "Витрина мясника",
      teaLabel: "Стакан чая — всегда",
    },
    menu: {
      title: "Фирменные блюда",
      subtitle: "С гриля, из витрины и с грядки.",
      categories: {
        starters: "Закуски",
        salads: "Салаты",
        grill: "Гриль и стейки",
        sides: "Гарниры",
        drinks: "Напитки",
      },
      dishes: {
        tomahawkSteak: {
          name: "Стейк томагавк",
          desc: "На кости, приготовлен на углях, подаётся с гриль-кукурузой и соусом релиш.",
        },
        sizzlingLambChops: {
          name: "Шипящие бараньи рёбрышки",
          desc: "Каре ягнёнка на гриле, подаётся горячим с рукколой, красным луком и черри.",
        },
        adanaKofta: {
          name: "Кёфте по-адански",
          desc: "Шашлычки из рубленого мяса на углях, подаются с картофелем фри.",
        },
        slicedGrilledSteak: {
          name: "Нарезанный стейк на гриле",
          desc: "Приготовлен на углях и нарезан порционно, подаётся с картофелем фри.",
        },
        beefCarpaccio: {
          name: "Карпаччо из говядины",
          desc: "Тонко нарезанная сырая говядина с горчичной заправкой.",
        },
        pomegranateWalnutSalad: {
          name: "Салат с гранатом и грецким орехом",
          desc: "Свежая зелень, зёрна граната, кукуруза, черри и грецкий орех.",
        },
        grilledVegPlatter: {
          name: "Овощи на гриле",
          desc: "Перец, цукини, брокколи и чеснок, обжаренные на углях.",
        },
        turkishTeaService: {
          name: "Турецкий чай",
          desc: "Чёрный чай, налитый горячим в стакан-тюльпан — так здесь заканчивается каждый ужин.",
        },
      },
    },
    gallery: {
      title: "Внутри Merhaba",
      subtitle: "Зал, гриль, блюда — загляните внутрь.",
    },
    reviews: {
      title: "Что говорят гости",
      countSuffix: "рейтинг от гостей по всему Ташкенту",
      sampleNote: "Примеры отзывов — настоящие отзывы гостей появятся здесь совсем скоро.",
      testimonials: [
        {
          name: "Азиз К.",
          quote:
            "Один томагавк уже стоит поездки. Лучший стейк, который я пробовал в Ташкенте.",
        },
        {
          name: "Дилноза Р.",
          quote:
            "Дымный, щедрый, а чай в конце — приятный штрих. Вернёмся всей семьёй.",
        },
        {
          name: "Джеймс Т.",
          quote: "Ощущение настоящего анатолийского мангала. Бараньи рёбрышки были невероятны.",
        },
      ],
    },
    hours: {
      title: "Часы работы и локация",
      subtitle: "Мы находимся рядом с Daniel Hill.",
      monSat: "Пн – Сб",
      sun: "Воскресенье",
      hoursMonSat: "12:00 – 00:00",
      hoursSun: "11:00 – 23:30",
      landmark: "Рядом с Daniel Hill",
      directions: "Проложить маршрут",
      addressLabel: "Адрес",
      phoneLabel: "Телефон",
    },
    sticky: { call: "Позвонить", whatsapp: "WhatsApp", reserve: "Забронировать столик" },
    doneness: {
      title: "Как приготовить?",
      subtitle: "Потяните ползунок, чтобы увидеть прожарку.",
      levels: [
        "С кровью",
        "Слабой прожарки",
        "Средней прожарки",
        "Почти прожаренный",
        "Полностью прожаренный",
      ],
    },
    reservation: {
      title: "Забронировать столик",
      name: "Ваше имя",
      phone: "Номер телефона",
      date: "Дата",
      time: "Время",
      guests: "Гостей",
      submit: "Отправить заявку",
      submitNote: "Мы перезвоним вам вскоре после отправки.",
      close: "Закрыть",
    },
    footer: {
      tagline: "Огонь. Мясо. Традиция.",
      navTitle: "Разделы",
      hoursTitle: "Часы работы",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
    },
  },
  uz: {
    meta: {
      title: "Merhaba Steakhouse — Toshkent",
      description:
        "Toshkentdagi turk uslubidagi steakhouse — cho'gda pishirilgan go'sht, yetilgan bo'laklar va doim issiq stol.",
    },
    nav: {
      menu: "Menyu",
      gallery: "Galereya",
      about: "Biz haqimizda",
      reviews: "Sharhlar",
      location: "Manzil",
      call: "Qo'ng'iroq",
    },
    hero: {
      headline: "Olov. Go'sht. An'ana.",
      subheadline:
        "Toshkent markazidagi turk grili — cho'g', yetilgan go'sht va doim issiq stol.",
      ctaBook: "Stol band qilish",
      ctaCall: "Qo'ng'iroq qilish",
      ratingLabel: "Toshkentning sevimli joyi",
      scroll: "Pastga suring",
    },
    about: {
      title: "O'chmaydigan olov",
      body: "Merhaba Anadolu mangalini Toshkentga olib keladi — go'sht joyida yetiltiriladi va bo'laklanadi, Adana va Istanbuldagidek ochiq cho'gda pishiriladi. Har bir ovqat lola shaklidagi stakanda shoshilmay quyilgan choy bilan yakunlanadi.",
      butcherLabel: "Qassob vitrinasi",
      teaLabel: "Har doim bir stakan choy",
    },
    menu: {
      title: "Maxsus taomlar",
      subtitle: "Grildan, vitrinadan va bog'dan.",
      categories: {
        starters: "Boshlang'ich taomlar",
        salads: "Salatlar",
        grill: "Gril va steyklar",
        sides: "Garnirlar",
        drinks: "Ichimliklar",
      },
      dishes: {
        tomahawkSteak: {
          name: "Tomahawk steyk",
          desc: "Suyakli, cho'gda pishirilgan, gril makkajo'xori va relish bilan beriladi.",
        },
        sizzlingLambChops: {
          name: "Jizillagan qo'zi qovurdoq",
          desc: "Issiq laganda qo'zi qovurdoq, arugula, qizil piyoz va pomidor bilan beriladi.",
        },
        adanaKofta: {
          name: "Adana kabob",
          desc: "Cho'gda pishirilgan qiyma kabob, fri kartoshka bilan beriladi.",
        },
        slicedGrilledSteak: {
          name: "Bo'laklangan gril steyk",
          desc: "Cho'gda pishirilib, bo'laklangan, fri kartoshka bilan beriladi.",
        },
        beefCarpaccio: {
          name: "Mol go'shti karpachchosi",
          desc: "Yupqa kesilgan xom mol go'shti, gorchitsa sousi bilan.",
        },
        pomegranateWalnutSalad: {
          name: "Anor va yong'oqli salat",
          desc: "Yangi ko'katlar, anor donalari, makkajo'xori, pomidor va yong'oq.",
        },
        grilledVegPlatter: {
          name: "Gril sabzavotlari",
          desc: "Cho'gda pishirilgan qalampir, kabachka, brokkoli va sarimsoq.",
        },
        turkishTeaService: {
          name: "Turk choyi",
          desc: "Lola shaklidagi stakanga issiq quyilgan qora choy — har bir ovqat shu bilan yakunlanadi.",
        },
      },
    },
    gallery: {
      title: "Merhaba ichkarisida",
      subtitle: "Zal, gril va taomlar — bir nazar tashlang.",
    },
    reviews: {
      title: "Mehmonlar fikri",
      countSuffix: "Toshkent bo'ylab mehmonlar reytingi",
      sampleNote: "Namunaviy sharhlar — asl mehmon sharhlari tez orada qo'shiladi.",
      testimonials: [
        {
          name: "Aziz Q.",
          quote: "Tomahawkning o'zi safarga arziydi. Toshkentda yegan eng mazali steykim.",
        },
        {
          name: "Dilnoza R.",
          quote: "Tutunli, mo'l-ko'l, oxiridagi choy esa juda yoqimli. Butun oila bilan yana kelamiz.",
        },
        {
          name: "Jeyms T.",
          quote: "Haqiqiy Anadolu mangalidek his qildim. Qo'zi qovurdoq ajoyib edi.",
        },
      ],
    },
    hours: {
      title: "Ish vaqti va manzil",
      subtitle: "Biz Daniel Hill yaqinidamiz.",
      monSat: "Dush – Shan",
      sun: "Yakshanba",
      hoursMonSat: "12:00 – 00:00",
      hoursSun: "11:00 – 23:30",
      landmark: "Daniel Hill yaqinida",
      directions: "Yo'nalishni ko'rish",
      addressLabel: "Manzil",
      phoneLabel: "Telefon",
    },
    sticky: { call: "Qo'ng'iroq", whatsapp: "WhatsApp", reserve: "Stol band qilish" },
    doneness: {
      title: "Qanday pishirib beraylik?",
      subtitle: "Pishirish darajasini ko'rish uchun suring.",
      levels: [
        "Kam pishgan",
        "Yengil pishgan",
        "O'rtacha pishgan",
        "Yaxshi pishgan",
        "To'liq pishgan",
      ],
    },
    reservation: {
      title: "Stol band qilish",
      name: "To'liq ism",
      phone: "Telefon raqami",
      date: "Sana",
      time: "Vaqt",
      guests: "Mehmonlar soni",
      submit: "So'rov yuborish",
      submitNote: "Yuborganingizdan so'ng tez orada telefon orqali tasdiqlaymiz.",
      close: "Yopish",
    },
    footer: {
      tagline: "Olov. Go'sht. An'ana.",
      navTitle: "Bo'limlar",
      hoursTitle: "Ish vaqti",
      contactTitle: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
};

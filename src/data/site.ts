export const languages = ["sr", "en"] as const;
export type Language = (typeof languages)[number];

export const contactEmail = "info@jelenajevremovic.com";
export const dataRetentionMonths = 12;

export const locales = {
  sr: { htmlLang: "sr-Latn-RS", ogLocale: "sr_RS", label: "SR" },
  en: { htmlLang: "en-US", ogLocale: "en_US", label: "EN" }
} as const;

export function otherLanguage(lang: Language): Language {
  return lang === "sr" ? "en" : "sr";
}

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export const copy = {
  sr: {
    siteTitle: "Jelena Jevremović | Škola matematike",
    siteDescription: "Online škola matematike za decu koja žele da razviju znanje, logiku, sigurnost i samostalnost.",
    navHome: "Početna",
    navPrograms: "Programi",
    navApply: "Prijava",
    navIndividual: "Individualni rad",
    navLabel: "Glavna navigacija",
    langSwitcherLabel: "Izbor jezika",
    applyBadge: "Online prijava",
    founderImageAlt: "Fotografija osnivača škole",
    notFoundTitle: "Stranica nije pronađena",
    notFoundText: "Tražena stranica ne postoji ili je premeštena.",
    menu: "Meni",
    closeMenu: "Zatvori meni",
    skip: "Preskoči na sadržaj",
    heroBadge: "Škola za decu koja žele i mogu više.",
    heroTitle: "Matematika",
    heroServices: [
      "Dodatna nastava za učenike od III do VIII razreda osnovne škole",
      "Priprema za završni ispit",
      "Priprema za upis u Matematičku gimnaziju i specijalizovana matematička i IT odeljenja",
      "Pripreme za Veliku maturu",
      "Individualni rad",
      "Više od 10 godina rada sa nadarenim učenicima",
      "Preko 20 godina podučavanja"
    ],
    applyCta: "Prijavite dete",
    exploreCta: "Pogledajte programe",
    founderName: "Jelena Jevremović, master matematike",
    founderBadge: "Osnivač i predavač",
    founderRole: "Osnivač i nosilac obrazovnog programa",
    metrics: ["10+ god. rada sa nadarenim učenicima", "20+ god. iskustva"],
    quote: "Matematika nije samo predmet. To je trening razmišljanja koji detetu ostaje za ceo život.",
    quoteSub: "Učenje ima najveću vrednost onda kada inspiriše dete da poželi da nastavi samo.",
    aboutTitle: "O meni: matematika kao način razmišljanja",
    about: [
      "Verujem da matematika nije samo predmet koji se uči, već način razmišljanja koji se razvija kroz jasnoću, logiku i razumevanje.",
      "Master sam matematičar teorijskog smera, a svoj rad gradim na spoju naučne discipline i kreativnosti koju nosim iz muzičkog obrazovanja. Pored matematike, moj put su oblikovali instrumentalni smerovi klavira i violine, kao i godine provedene u horskim društvima. Upravo taj spoj uneo je u moj rad poseban osećaj za strukturu, harmoniju i fokus.",
      "Svoju ljubav prema teoriji povezala sam i sa savremenim tehnologijama kroz rad u oblasti veštačke inteligencije, sa fokusom na razvoj algoritama za detekciju objekata. Zahvaljujući tom iskustvu, učenicima mogu da približim matematiku ne samo kao osnovu školskog uspeha, već i kao važan deo sveta tehnologije i budućih zanimanja.",
      "Iza mene je više od dve decenije rada sa decom i mladima. Trinaest godina provela sam u Matematičkoj gimnaziji u Beogradu, radeći sa učenicima visokih sposobnosti i različitih interesovanja. Iskustvo sam gradila i kroz rad sa mlađim uzrastima u školama mladih matematičara „Kliker” i „Klikerčić”, kao i kroz vođenje letnjih kampova u organizaciji Matematičke gimnazije.",
      "Bila sam vođa timova koji su se vraćali sa medaljama sa internacionalnih takmičenja iz matematike u Rusiji, Rumuniji i Bugarskoj. Takođe, bila sam deo komisija koje su pregledale zadatke na svim nivoima takmičenja iz matematike u organizaciji Društva matematičara Srbije i Ministarstva prosvete Republike Srbije.",
      "U svom radu sa učenicima verujem da kvalitetna nastava ne donosi samo bolju ocenu. Ona razvija disciplinu, analitičko razmišljanje, sigurnost i samostalnost - osobine koje ostaju za ceo život.",
      "Moja misija je da kroz online nastavu deci u Srbiji i dijaspori pružim podršku, znanje i prostor da napreduju svojim tempom, savladaju izazove i steknu poverenje u sopstvene sposobnosti."
    ],
    highlights: [
      ["Teorijska matematika", "Master matematičar sa fokusom na strukturu i logičku preciznost.", "📐"],
      ["AI i tehnologija", "Iskustvo u veštačkoj inteligenciji i algoritmima za detekciju objekata.", "🤖"],
      ["Rad sa nadarenima", "Više od deset godina rada sa nadarenim učenicima i priprema za takmičenja.", "🏆"]
    ],
    audienceBadge: "Ciljna grupa",
    audienceTitle: "Za koga je program",
    audienceText: "Program je namenjen učenicima osnovne škole od III do VIII razreda koji žele više od standardne nastave matematike i traže jasan, sistematičan napredak.",
    resultsBadge: "Ciljevi i rezultati",
    resultsTitle: "Koji problem rešavam",
    resultsText: "Pomažem deci koja žele da učvrste osnove, savladaju teže zadatke i steknu samopouzdanje za redovnu nastavu, takmičenja i završne ispite.",
    learnMore: "Opširnije",
    applyTitle: "Prijava",
    applyIntro: "Popunite kratku prijavu direktno na sajtu. Podaci se bezbedno čuvaju i koriste samo za odgovor na prijavu.",
    formName: "Ime i prezime roditelja",
    formStudent: "Ime i prezime učenika (opciono)",
    formProgram: "Tip programa",
    formGrade: "Razred deteta",
    formEmail: "Email",
    formNotes: "Poruka (opciono)",
    formConsent: "Slažem se da se podaci koriste za odgovor na prijavu.",
    formSubmit: "Pošalji prijavu",
    selectProgram: "Izaberite program",
    selectGrade: "Izaberite razred",
    parentPlaceholder: "Npr. Ana Marković",
    studentPlaceholder: "Npr. Marko Marković",
    emailPlaceholder: "vas-email@primer.com",
    notesPlaceholder: "Napomena ili dodatne informacije o ciljevima deteta...",
    privacy: "Politika privatnosti",
    privacyTitle: "Politika privatnosti",
    privacyIntro: "Ova stranica prikuplja samo podatke neophodne za odgovor na prijavu.",
    privacyDataTitle: "Koje podatke prikupljamo",
    privacyData: "Prikupljamo ime roditelja, opciono ime učenika, izabrani program, razred, email i opcionu poruku.",
    privacyUseTitle: "Kako ih koristimo",
    privacyUse: "Podaci se koriste za kontaktiranje roditelja u vezi sa prijavom i organizaciju nastave.",
    privacyServicesTitle: "Spoljni servisi",
    privacyServices: "Podaci se obrađuju preko pouzdanog servisa za prijem prijava, koji filtrira spam i omogućava slanje obaveštenja na email.",
    privacyContact: `Za pitanja o vašim podacima, kao i za zahtev za pristup ili brisanje, obratite se na ${contactEmail}. Podaci iz prijava čuvaju se najduže ${dataRetentionMonths} meseci, nakon čega se brišu.`,
    successTitle: "Hvala na prijavi",
    successText: "Prijava je uspešno poslata. Javićemo vam se uskoro sa sledećim koracima.",
    backHome: "Nazad na početnu",
    footer: "Jelena Jevremović"
  },
  en: {
    siteTitle: "Jelena Jevremović | Mathematics School",
    siteDescription: "An online mathematics school helping children build knowledge, logic, confidence, and independence.",
    navHome: "Home",
    navPrograms: "Programs",
    navApply: "Apply",
    navIndividual: "Individual mentoring",
    navLabel: "Main navigation",
    langSwitcherLabel: "Language selection",
    applyBadge: "Online application",
    founderImageAlt: "Founder photo",
    notFoundTitle: "Page not found",
    notFoundText: "The page you are looking for does not exist or has been moved.",
    menu: "Menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    heroBadge: "A school for children ready to achieve more.",
    heroTitle: "Mathematics",
    heroServices: [
      "Mathematics enrichment for students from 3rd to 8th grade of primary school",
      "Preparation for the final exam",
      "Preparation for admission to the Mathematical Grammar School and specialized mathematics and IT departments",
      "Preparation for the school-leaving exam",
      "Individual mentoring",
      "More than 10 years of working with gifted students",
      "Over 20 years of teaching experience"
    ],
    applyCta: "Apply Now",
    exploreCta: "Explore programs",
    founderName: "Jelena Jevremović, Master of Mathematics",
    founderBadge: "Founder and instructor",
    founderRole: "Founder and academic program lead",
    metrics: ["10+ years working with gifted students", "20+ years of experience"],
    quote: "Mathematics is not just a subject. It is a way of thinking that stays with a child for a lifetime.",
    quoteSub: "Learning is most valuable when it inspires a child to want to continue on their own.",
    aboutTitle: "About Me: Mathematics as a Way of Thinking",
    about: [
      "I believe that mathematics is not merely a subject to be learned, but a way of thinking shaped through clarity, logic, and understanding.",
      "I hold a master's degree in theoretical mathematics, and my work is built on the intersection of scientific rigor and the creativity I bring from my musical background. Alongside mathematics, my path has been shaped by formal training in piano and violin, as well as years of singing in choirs. This unique blend has given my teaching a strong sense of structure, harmony, and focus.",
      "I have also connected my passion for theory with modern technology through my work in artificial intelligence, with a particular focus on developing object-detection algorithms. This experience allows me to present mathematics as both a foundation for academic success and an essential part of technology and future careers.",
      "I bring more than two decades of experience working with children and young people. For thirteen years, I taught at the Mathematical Grammar School in Belgrade, working with highly talented students and preparing them for competitions. I have also taught younger learners through the Kliker and Klikerčić schools and led summer camps organized by the Mathematical Grammar School.",
      "I was the leader of teams that returned with medals from international mathematics competitions in Russia, Romania, and Bulgaria. I was also a member of the grading commissions for all levels of mathematics competitions organized by the Mathematical Society of Serbia and the Ministry of Education of the Republic of Serbia.",
      "Quality teaching offers far more than better grades. It fosters discipline, analytical thinking, confidence, and independence - qualities that stay with children for life.",
      "My mission is to support children in Serbia and across the diaspora through online teaching, helping them progress at their own pace and build confidence in their abilities."
    ],
    highlights: [
      ["Theoretical mathematics", "A master's in mathematics focused on structure and logical precision.", "📐"],
      ["Music and harmony", "A combination of scientific discipline and creativity through violin, piano, and choir.", "🎻"],
      ["AI and technology", "Experience in artificial intelligence and object-detection algorithms.", "🤖"],
      ["Gifted students", "More than ten years of teaching gifted students and preparing them for competitions.", "🏆"]
    ],
    audienceBadge: "Who it is for",
    audienceTitle: "Who the program is for",
    audienceText: "The program is designed for primary school students from 3rd to 8th grade who want more than standard mathematics classes and seek clear, systematic progress.",
    resultsBadge: "Goals and results",
    resultsTitle: "What problem I solve",
    resultsText: "I support children who want stronger foundations, confidence with complex tasks, and steady progress for school, competitions, and final exams.",
    learnMore: "Learn more",
    applyTitle: "Application",
    applyIntro: "Complete the short application directly on the site. Data is stored securely and used only to respond to the application.",
    formName: "Parent Full Name",
    formStudent: "Student Full Name (optional)",
    formProgram: "Program Type",
    formGrade: "Student Grade",
    formEmail: "Email",
    formNotes: "Message (optional)",
    formConsent: "I agree that this information may be used to respond to the application.",
    formSubmit: "Submit application",
    selectProgram: "Select program",
    selectGrade: "Select grade",
    parentPlaceholder: "For example, Ana Marković",
    studentPlaceholder: "For example, Marko Marković",
    emailPlaceholder: "your-email@example.com",
    notesPlaceholder: "Notes or additional information about the student's goals...",
    privacy: "Privacy policy",
    privacyTitle: "Privacy policy",
    privacyIntro: "This site collects only the information needed to respond to an application.",
    privacyDataTitle: "What we collect",
    privacyData: "We collect the parent name, optional student name, selected program, grade, email, and optional message.",
    privacyUseTitle: "How we use it",
    privacyUse: "The information is used to contact the parent about the application and arrange the classes.",
    privacyServicesTitle: "External services",
    privacyServices: "Data is processed through a trusted application-receiving service, which filters spam and provides email notification delivery.",
    privacyContact: `For questions about your data, or to request access or deletion, contact ${contactEmail}. Application data is kept for at most ${dataRetentionMonths} months and then deleted.`,
    successTitle: "Thank you for applying",
    successText: "Your application was sent successfully. We will contact you soon with the next steps.",
    backHome: "Back to home",
    footer: "Jelena Jevremović"
  }
} as const;

export type Copy = (typeof copy)[Language];

export const programs = {
  "dodatna-nastava": {
    badge: { sr: "Napredni program", en: "Advanced program" },
    title: { sr: "Dodatna nastava za osnovnu školu", en: "Primary School Mathematics Enrichment" },
    card: { sr: "Program je namenjen učenicima koji žele da prodube matematičko znanje i sistematski se pripreme za takmičenja.", en: "Designed for students who want to deepen mathematical knowledge and prepare systematically for competitions." },
    workIntro: { sr: "Tokom nastave obrađuju se ključne matematičke oblasti:", en: "During the program, students work on key areas of mathematics:" },
    intro: {
      sr: "Program je namenjen učenicima koji žele da prodube svoje matematičko znanje, razviju sigurnost u rešavanju zadataka i sistematski napreduju kroz jasno vođen i strukturiran rad.",
      en: "This program is designed for students who want to deepen their mathematical knowledge, build confidence in problem-solving, and make steady progress through clear guidance and a structured approach."
    },
    secondIntro: {
      sr: "Za razliku od klasične nastave, fokus je na razumevanju, povezivanju i samostalnom zaključivanju - ne samo na rešavanju zadataka.",
      en: "Unlike traditional classroom teaching, the focus is on understanding, making connections, and thinking independently - not simply on solving problems."
    },
    workTitle: { sr: "Šta radimo na časovima", en: "What we cover in class" },
    topics: { sr: ["algebra", "geometrija", "teorija brojeva", "kombinatorika", "logika"], en: ["algebra", "geometry", "number theory", "combinatorics", "logic"] },
    focusTitle: { sr: "Poseban akcenat je na", en: "Special emphasis is placed on" },
    focus: { sr: ["razvoju strategija za rešavanje zadataka", "samostalnom razmišljanju", "razumevanju, a ne memorisanju"], en: ["developing problem-solving strategies", "independent thinking", "understanding rather than memorization"] },
    structureTitle: { sr: "Struktura programa", en: "Program structure" },
    structure: {
      sr: [
        "Dodatna nastava za učenike od III do VIII razreda osnovne škole realizuje se tokom školske godine uživo na Banovom brdu i online u grupama od 3 do 5 učenika.",
        "Časovi uživo se održavaju subotom ili nedeljom na Banovom brdu (Čukarica - Beograd).",
        "Broj termina zavisi od uzrasta učenika.",
        "Učenici III i IV razreda imaju 15 termina (30 x 45 minuta).",
        "Učenici V, VI, VII i VIII razreda imaju 20 termina (40 x 45 minuta)."
      ],
      en: [
        "Mathematics enrichment for students from 3rd to 8th grade is held throughout the school year in person at Banovo brdo and online in groups of 3 to 5 students.",
        "In-person classes take place on Saturdays or Sundays at Banovo brdo (Čukarica - Belgrade).",
        "The number of sessions depends on the students' age.",
        "Grades 3 and 4 have 15 sessions (30 x 45 minutes).",
        "Grades 5, 6, 7, and 8 have 20 sessions (40 x 45 minutes)."
      ]
    },
    outcomesTitle: { sr: "Šta učenici dobijaju", en: "What students gain" },
    outcomes: { sr: ["sigurnost u rešavanju zadataka", "razvijeno logičko razmišljanje", "sposobnost samostalnog rada", "disciplinu i fokus", "kvalitetnu osnovu za dalje školovanje"], en: ["confidence in problem-solving", "logical thinking", "the ability to work independently", "discipline and focus", "a strong foundation for further education"] },
    expectationsTitle: { sr: "Šta se očekuje od učenika", en: "What is expected from students" },
    expectations: { sr: ["redovno prisustvo", "aktivno učešće", "spremnost na razmišljanje i rad"], en: ["regular attendance", "active participation", "willingness to think deeply and engage with the work"] },
    closing: { sr: "Matematika se ne uči napamet - ona se razume. Razumevanje donosi sigurnost.", en: "Mathematics is not learned by rote - it is understood. Understanding brings confidence." }
  },
  "mala-matura": {
    badge: { sr: "Završni ispiti", en: "Final examinations" },
    title: { sr: "Pripreme za završni ispit", en: "Final Exam Preparation" },
    card: { sr: "Program pripreme za završni ispit iz matematike sa jasnim planom rada, probnim testovima i sistematskom analizom zadataka.", en: "A structured preparation program for the high school entrance exam, with mock tests and systematic task analysis." },
    intro: {
      sr: "Program pripreme za završni ispit odvija se uživo nedeljom od novembra do juna, u grupama od 4 učenika, kako bi svakom učeniku bila posvećena puna pažnja.",
      en: "The final exam preparation program takes place in person on Sundays from November to June, in groups of 4 students, ensuring full attention is given to each student."
    },
    secondIntro: {
      sr: "Nastava je organizovana kroz 25 termina u trajanju od po 90 minuta, od početka novembra do juna.",
      en: "Classes are organized into 25 sessions of 90 minutes each, running from the beginning of November to June."
    },
    points: {
      sr: [
        "rad u grupama od 4 učenika",
        "25 termina",
        "časovi od 90 minuta (2 x 45)",
        "nastava nedeljom",
        "sistematska priprema od novembra do juna",
        "kontinuirano praćenje napretka"
      ],
      en: [
        "work in groups of 4 students",
        "25 sessions",
        "90-minute classes (2 x 45)",
        "classes on Sundays",
        "systematic preparation from November to June",
        "continuous progress monitoring"
      ]
    },
    body: { sr: "Tokom programa učenici prolaze kroz sistematsku pripremu za završni ispit, uz redovno vežbanje, pažljivo vođen rad i kontinuirano praćenje napretka.", en: "Throughout the program, students work through systematic preparation for the final exam with regular practice, carefully guided work, and continuous progress monitoring." },
    closing: { sr: "Moj cilj je da učenik ne pristupi završnom ispitu samo sa više znanja, već i sa osećajem sigurnosti, jasnoće i unutrašnje spremnosti.", en: "My goal is for each student to approach the final exam not only with more knowledge, but also with confidence, clarity, and inner readiness." }
  },
  "srednjoskolci": {
    badge: { sr: "Srednjoškolski program", en: "Secondary-school program" },
    title: { sr: "Rad sa srednjoškolcima", en: "Secondary School Mentoring" },
    card: { sr: "Podrška u savladavanju gradiva i priprema za pismene zadatke, usmena odgovaranja i veliku maturu.", en: "Support in mastering the curriculum and preparation for written and oral exams, and the final school-leaving exam." },
    intro: { sr: "Program namenjen srednjoškolcima koji žele da unaprede svoje znanje, prevaziđu prepreke u tekućem gradivu i postave stabilne osnove za veliku maturu i dalje studije.", en: "A program for secondary-school students who want to improve their knowledge, overcome obstacles in the current curriculum, and build a strong foundation for the final exams and further studies." }
  },
  "mg-7-razred": {
    badge: { sr: "Specijalizovani program", en: "Specialized program" },
    title: { sr: "Pripreme za upis u VII razred pri Matematičkoj gimnaziji", en: "Preparation for 7th Grade at Mathematical Grammar School" },
    card: { sr: "Sistematska priprema za specifičan prijemni ispit za osnovnu školu pri Matematičkoj gimnaziji.", en: "Systematic preparation for the specific entrance exam for the primary school at the Mathematical Grammar School." },
    intro: { sr: "Temeljan rad prilagođen učenicima VI razreda koji se pripremaju za rani upis u posebno odeljenje Matematičke gimnazije. Fokus je na naprednim logičkim i kombinatornim zadacima.", en: "Thorough work adapted for 6th-grade students preparing for early admission to the special department of the Mathematical Grammar School. The focus is on advanced logical and combinatorial problems." }
  },
  "mg-mentoring": {
    badge: { sr: "Specijalizovani mentorski rad", en: "Specialized mentoring" },
    title: { sr: "Pripreme za upis u Matematičku gimnaziju", en: "Mathematical Grammar School Preparation" },
    card: {
      sr: "Rad uživo u grupama od 2 učenika za upis u srednju školu Matematičke gimnazije.",
      en: "In-person coaching in groups of 2 students for admission to the Mathematical Grammar School."
    },
    intro: {
      sr: "Vođen rad za učenike koji konkurišu za upis u Matematičku gimnaziju, sa fokusom na strategije rešavanja zadataka, sistematizaciju znanja i sigurnu pripremu za prijemni ispit.",
      en: "Guided mentoring for students applying to Mathematical Grammar School, focused on problem-solving strategies, knowledge systematization, and confident entrance-exam preparation."
    },
    secondIntro: {
      sr: "Pripreme se održavaju uživo subotom, u malim grupama od 2 učenika, kako bi se osigurao maksimalan fokus i prilagodljivost. Program obuhvata 40 časova raspoređenih u 20 termina.",
      en: "Preparation classes are held in person on Saturdays in small groups of 2 students to ensure maximum focus and adaptability. The program includes 40 classes distributed across 20 sessions."
    },
    points: {
      sr: [
        "nastava uživo subotom",
        "rad u grupama od samo 2 učenika",
        "ukupno 40 časova",
        "raspoređeno u 20 termina",
        "sistematizacija znanja za prijemni ispit"
      ],
      en: [
        "in-person classes on Saturdays",
        "groups of only 2 students",
        "total of 40 classes",
        "distributed across 20 sessions",
        "knowledge systematization for the entrance exam"
      ]
    }
  },
  "individualni-rad": {
    badge: { sr: "Mentorski program", en: "Mentoring program" },
    title: { sr: "Individualni rad", en: "Individual Mentoring" },
    card: { sr: "Nastava krojena prema specifičnim potrebama, tempu i ciljevima svakog učenika.", en: "Lessons tailored to the specific needs, pace, and goals of each student." },
    intro: { sr: "Individualni rad je idealan za učenike kojima je potreban specifičan fokus, bilo da se radi o ubrzanom napredovanju, pripremi za takmičenje ili nadoknađivanju propuštenog gradiva.", en: "Individual work is ideal for students who need specific focus, whether it is for accelerated progress, competition preparation, or catching up on missed material." }
  }
} as const;

export type ProgramSlug = keyof typeof programs;

export const programOptions: Record<Language, Array<[ProgramSlug, string]>> = {
  sr: [
    ["dodatna-nastava", "Dodatna nastava za osnovnu školu"],
    ["mala-matura", "Pripreme za završni ispit"],
    ["srednjoskolci", "Rad sa srednjoškolcima"],
    ["mg-7-razred", "Pripreme za upis u VII razred pri Matematičkoj gimnaziji"],
    ["mg-mentoring", "Pripreme za upis u Matematičku gimnaziju"],
    ["individualni-rad", "Individualni rad"]
  ],
  en: [
    ["dodatna-nastava", "Primary School Mathematics Enrichment"],
    ["mala-matura", "Final Exam Preparation"],
    ["srednjoskolci", "Secondary School Mentoring"],
    ["mg-7-razred", "Preparation for 7th Grade at Mathematical Grammar School"],
    ["mg-mentoring", "Mathematical Grammar School Preparation"],
    ["individualni-rad", "Individual Mentoring"]
  ]
};

export const gradeOptions: Record<Language, Array<[string, string]>> = {
  sr: [["3-osnovne", "III razred osnovne škole"], ["4-osnovne", "IV razred osnovne škole"], ["5-osnovne", "V razred osnovne škole"], ["6-osnovne", "VI razred osnovne škole"], ["7-osnovne", "VII razred osnovne škole"], ["8-osnovne", "VIII razred osnovne škole"], ["1-srednje", "I razred srednje škole"], ["2-srednje", "II razred srednje škole"], ["3-srednje", "III razred srednje škole"], ["4-srednje", "IV razred srednje škole"]],
  en: [["3-osnovne", "3rd grade primary school"], ["4-osnovne", "4th grade primary school"], ["5-osnovne", "5th grade primary school"], ["6-osnovne", "6th grade primary school"], ["7-osnovne", "7th grade primary school"], ["8-osnovne", "8th grade primary school"], ["1-srednje", "1st grade secondary school"], ["2-srednje", "2nd grade secondary school"], ["3-srednje", "3rd grade secondary school"], ["4-srednje", "4th grade secondary school"]]
};

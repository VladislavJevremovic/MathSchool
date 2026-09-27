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
      "Dodatna nastava za učenike od 3. do 8. razreda osnovne škole",
      "Pripreme za malu maturu",
      "Pripreme za upis u specijalizovana matematička odeljenja",
      "Pripreme za buduću veliku maturu",
      "Individualni rad",
      "Preko 10 godina rada u Matematičkoj gimnaziji u Beogradu",
      "Preko 20 godina podučavanja"
    ],
    applyCta: "Prijavite dete",
    exploreCta: "Pogledajte programe",
    founderName: "Jelena Jevremović, dipl. matematičar",
    founderBadge: "Osnivač i predavač",
    founderRole: "Osnivač i nosilac obrazovnog programa",
    metrics: ["10+ god. u Matematičkoj gimnaziji", "20+ god. iskustva"],
    quote: "Matematika nije samo predmet. To je trening razmišljanja koji detetu ostaje za ceo život.",
    quoteSub: "Učenje ima najveću vrednost onda kada inspiriše dete da poželi da nastavi samo.",
    aboutTitle: "O meni: matematika kao način razmišljanja",
    about: [
      "Verujem da matematika nije samo predmet koji se uči, već način razmišljanja koji se razvija kroz jasnoću, logiku i razumevanje.",
      "Diplomirani sam matematičar teorijskog smera, a svoj rad gradim na spoju naučne discipline i kreativnosti koju nosim iz muzičkog obrazovanja. Pored matematike, moj put su oblikovali instrumentalni smerovi klavira i violine, kao i godine provedene u horskim društvima. Upravo taj spoj uneo je u moj rad poseban osećaj za strukturu, harmoniju i fokus.",
      "Svoju ljubav prema teoriji povezala sam i sa savremenim tehnologijama kroz rad u oblasti veštačke inteligencije, sa fokusom na razvoj algoritama za detekciju objekata. Zahvaljujući tom iskustvu, učenicima mogu da približim matematiku ne samo kao osnovu školskog uspeha, već i kao važan deo sveta tehnologije i budućih zanimanja.",
      "Iza mene je više od dve decenije rada sa decom i mladima. Trinaest godina provela sam u Matematičkoj gimnaziji u Beogradu, radeći sa učenicima visokih sposobnosti i različitih interesovanja. Iskustvo sam gradila i kroz rad sa mlađim uzrastima u školama mladih matematičara „Kliker” i „Klikerčić”, kao i kroz vođenje letnjih kampova u organizaciji Matematičke gimnazije.",
      "U svom radu sa učenicima verujem da kvalitetna nastava ne donosi samo bolju ocenu. Ona razvija disciplinu, analitičko razmišljanje, sigurnost i samostalnost - osobine koje ostaju za ceo život.",
      "Moja misija je da kroz online nastavu deci u Srbiji i dijaspori pružim podršku, znanje i prostor da napreduju svojim tempom, savladaju izazove i steknu poverenje u sopstvene sposobnosti."
    ],
    highlights: [
      ["Teorijska matematika", "Diplomirani matematičar sa fokusom na strukturu i logičku preciznost.", "📐"],
      ["AI i tehnologija", "Iskustvo u veštačkoj inteligenciji i algoritmima za detekciju objekata.", "🤖"],
      ["Matematička gimnazija", "Više od deset godina rada sa učenicima i priprema za takmičenja.", "🏆"]
    ],
    audienceBadge: "Ciljna grupa",
    audienceTitle: "Za koga je program",
    audienceText: "Program je namenjen učenicima osnovne škole od III do VIII razreda koji žele više od standardne nastave matematike i traže jasan, sistematičan napredak.",
    resultsBadge: "Ciljevi i rezultati",
    resultsTitle: "Koji problem rešavam",
    resultsText: "Pomažem deci koja žele da učvrste osnove, savladaju teže zadatke i steknu samopouzdanje za redovnu nastavu, takmičenja i završne ispite.",
    learnMore: "Opširnije",
    applyTitle: "Prijava za probni čas",
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
    privacyUse: "Podaci se koriste za kontaktiranje roditelja u vezi sa prijavom i organizaciju probnog časa.",
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
      "Preparation for the final exam at the end of primary school",
      "Preparation for admission to specialized mathematics tracks",
      "Preparation for future school-leaving exams",
      "Individual mentoring",
      "Over 10 years of work at the Mathematical Grammar School in Belgrade",
      "Over 20 years of teaching experience"
    ],
    applyCta: "Apply Now",
    exploreCta: "Explore programs",
    founderName: "Jelena Jevremović, M.Sc. in Mathematics",
    founderBadge: "Founder and instructor",
    founderRole: "Founder and academic program lead",
    metrics: ["10+ years at Mathematical Grammar School", "20+ years of experience"],
    quote: "Mathematics is not just a subject. It is a way of thinking that stays with a child for a lifetime.",
    quoteSub: "Learning is most valuable when it inspires a child to want to continue on their own.",
    aboutTitle: "About Me: Mathematics as a Way of Thinking",
    about: [
      "I believe that mathematics is not merely a subject to be learned, but a way of thinking shaped through clarity, logic, and understanding.",
      "I hold a degree in theoretical mathematics, and my work is built on the intersection of scientific rigor and the creativity I bring from my musical background. Alongside mathematics, my path has been shaped by formal training in piano and violin, as well as years of singing in choirs. This unique blend has given my teaching a strong sense of structure, harmony, and focus.",
      "I have also connected my passion for theory with modern technology through my work in artificial intelligence, with a particular focus on developing object-detection algorithms. This experience allows me to present mathematics as both a foundation for academic success and an essential part of technology and future careers.",
      "I bring more than two decades of experience working with children and young people. For thirteen years, I taught at the Mathematical Grammar School in Belgrade, working with highly talented students and preparing them for competitions. I have also taught younger learners through the Kliker and Klikerčić schools and led summer camps organized by the Mathematical Grammar School.",
      "Quality teaching offers far more than better grades. It fosters discipline, analytical thinking, confidence, and independence - qualities that stay with children for life.",
      "My mission is to support children in Serbia and across the diaspora through online teaching, helping them progress at their own pace and build confidence in their abilities."
    ],
    highlights: [
      ["Theoretical mathematics", "A mathematics graduate focused on structure and logical precision.", "📐"],
      ["Music and harmony", "A combination of scientific discipline and creativity through violin, piano, and choir.", "🎻"],
      ["AI and technology", "Experience in artificial intelligence and object-detection algorithms.", "🤖"],
      ["Mathematical Grammar School", "More than ten years of teaching students and preparing them for competitions.", "🏆"]
    ],
    audienceBadge: "Who it is for",
    audienceTitle: "Who the program is for",
    audienceText: "The program is designed for primary school students from 3rd to 8th grade who want more than standard mathematics classes and seek clear, systematic progress.",
    resultsBadge: "Goals and results",
    resultsTitle: "What problem I solve",
    resultsText: "I support children who want stronger foundations, confidence with complex tasks, and steady progress for school, competitions, and final exams.",
    learnMore: "Learn more",
    applyTitle: "Trial Class Application",
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
    privacyUse: "The information is used to contact the parent about the application and arrange a trial class.",
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
    badge: { sr: "Akademski program", en: "Academic program" },
    title: { sr: "Dodatna nastava", en: "Mathematics Enrichment" },
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
      sr: ["Program se sastoji iz dva modula, a broj časova prilagođen je uzrastu učenika.", "Modul 1 traje od oktobra do kraja decembra, dok Modul 2 traje od januara do kraja maja.", "Za učenike III i IV razreda dostupno je uživo i online po 10 časova u svakom modulu.", "Za učenike V razreda dostupno je uživo i online po 12 časova u svakom modulu.", "Za učenike VI razreda nastava se odvija online po 12 časova u svakom modulu.", "Za učenike VII i VIII razreda nastava se odvija online po 14 časova u svakom modulu."],
      en: ["The program is organized into two modules, with the number of lessons adjusted to the students' age and grade level.", "Module 1 runs from October to the end of December, while Module 2 runs from January to the end of May.", "For Grades 3 and 4, classes are available in person and online with 10 lessons in each module.", "For Grade 5, classes are available in person and online with 12 lessons in each module.", "For Grade 6, classes are held online with 12 lessons in each module.", "For Grades 7 and 8, classes are held online with 14 lessons in each module."]
    },
    durationTitle: { sr: "Trajanje časa", en: "Lesson duration" },
    duration: { sr: ["III razred - 45 minuta", "IV razred - 60 minuta", "V razred - 75 minuta", "VI razred - 75 minuta", "VII i VIII razred - 90 minuta"], en: ["Grade 3 - 45 minutes", "Grade 4 - 60 minutes", "Grade 5 - 75 minutes", "Grade 6 - 75 minutes", "Grades 7 and 8 - 90 minutes"] },
    formatTitle: { sr: "Način realizacije", en: "Format" },
    format: {
      sr: ["Rad je organizovan jasno i sistematično, uz kombinaciju online nastave za sve učenike i nastave uživo za mlađe razrede.", "Nastava uživo održava se tokom vikenda.", "Online rad je dostupan deci iz drugih gradova i učenicima iz dijaspore."],
      en: ["The program combines online classes for all students with in-person classes for younger age groups.", "In-person classes are held during weekends.", "Online work is accessible to students from other cities and children living abroad."]
    },
    outcomesTitle: { sr: "Šta učenici dobijaju", en: "What students gain" },
    outcomes: { sr: ["sigurnost u rešavanju zadataka", "razvijeno logičko razmišljanje", "sposobnost samostalnog rada", "disciplinu i fokus", "kvalitetnu osnovu za dalje školovanje"], en: ["confidence in problem-solving", "logical thinking", "the ability to work independently", "discipline and focus", "a strong foundation for further education"] },
    expectationsTitle: { sr: "Šta se očekuje od učenika", en: "What is expected from students" },
    expectations: { sr: ["redovno prisustvo", "aktivno učešće", "spremnost na razmišljanje i rad"], en: ["regular attendance", "active participation", "willingness to think deeply and engage with the work"] },
    closing: { sr: "Matematika se ne uči napamet - ona se razume. Razumevanje donosi sigurnost.", en: "Mathematics is not learned by rote - it is understood. Understanding brings confidence." }
  },
  "mala-matura": {
    badge: { sr: "Završni ispiti", en: "Final examinations" },
    title: { sr: "Priprema za malu maturu", en: "Final Exam Preparation" },
    card: { sr: "Program pripreme za završni ispit iz matematike sa jasnim planom rada, probnim testovima i sistematskom analizom zadataka.", en: "A structured preparation program for the final mathematics exam, with mock tests and systematic task analysis." },
    intro: { sr: "Program pripreme za malu maturu odvija se online tokom radne sedmice, u grupama od 6 učenika, kako bi svakom učeniku bila posvećena puna pažnja.", en: "The final-exam preparation program is held online during weekdays in groups of 6 students, so each student receives full attention." },
    secondIntro: { sr: "Nastava je organizovana kroz 30 časova u trajanju od po 75 minuta, od početka oktobra do sredine juna.", en: "Classes are organized through 30 sessions of 75 minutes each, from early October to mid-June." },
    points: { sr: ["rad u grupi od 6 učenika", "30 termina", "časovi od 75 minuta", "online nastava tokom radne sedmice", "sistematska priprema od oktobra do juna", "kontinuirano praćenje napretka"], en: ["work in a group of 6 students", "30 sessions", "75-minute classes", "online classes during weekdays", "systematic preparation from October to June", "continuous progress monitoring"] },
    body: { sr: "Tokom programa učenici prolaze kroz sistematsku pripremu za završni ispit, uz redovno vežbanje, pažljivo vođen rad i kontinuirano praćenje napretka.", en: "Throughout the program, students work through systematic preparation for the final exam with regular practice, carefully guided work, and continuous progress monitoring." },
    closing: { sr: "Moj cilj je da učenik ne pristupi završnom ispitu samo sa više znanja, već i sa osećajem sigurnosti, jasnoće i unutrašnje spremnosti.", en: "My goal is for each student to approach the final exam not only with more knowledge, but also with confidence, clarity, and inner readiness." }
  },
  "mg-mentoring": {
    badge: { sr: "Specijalizovani mentorski rad", en: "Specialized mentoring" },
    title: { sr: "Mentorski rad za upis u Matematičku gimnaziju", en: "Mathematical Grammar School Mentoring" },
    card: { sr: "Individualni rad za upis u Matematičku gimnaziju.", en: "Individual coaching for admission to Mathematical Grammar School." },
    intro: { sr: "Individualno vođen rad za učenike koji konkurišu za upis u Matematičku gimnaziju, sa fokusom na strategije rešavanja zadataka, sistematizaciju znanja i sigurnu pripremu za prijemni ispit.", en: "Individually guided mentoring for students applying to Mathematical Grammar School, focused on problem-solving strategies, knowledge systematization, and confident entrance-exam preparation." }
  },
  "velika-matura": {
    badge: { sr: "Srednjoškolski program", en: "Secondary-school program" },
    title: { sr: "Buduća priprema za veliku maturu", en: "Future School-Leaving Exam Preparation" },
    intro: { sr: "Program u pripremi za srednjoškolce: postepeni uvod u zadatke i strategije za veliku maturu.", en: "A program in development for secondary-school students: a gradual introduction to school-leaving exam tasks and strategies." }
  }
} as const;

export type ProgramSlug = keyof typeof programs;

export const programOptions: Record<Language, Array<[string, string]>> = {
  sr: [["dodatna-nastava", "Dodatna nastava"], ["mala-matura", "Priprema za malu maturu"], ["mg-mentoring", "Mentorski rad za upis u Matematičku gimnaziju"], ["velika-matura", "Priprema za buduću veliku maturu"], ["individualni-rad", "Individualni rad"]],
  en: [["dodatna-nastava", "Mathematics Enrichment"], ["mala-matura", "Final Exam Preparation"], ["mg-mentoring", "Mathematical Grammar School Mentoring"], ["velika-matura", "Future School-Leaving Exam Preparation"], ["individualni-rad", "Individual mentoring"]]
};

export const gradeOptions: Record<Language, Array<[string, string]>> = {
  sr: [["3-osnovne", "3. razred osnovne škole"], ["4-osnovne", "4. razred osnovne škole"], ["5-osnovne", "5. razred osnovne škole"], ["6-osnovne", "6. razred osnovne škole"], ["7-osnovne", "7. razred osnovne škole"], ["8-osnovne", "8. razred osnovne škole"], ["1-srednje", "1. razred srednje škole"], ["2-srednje", "2. razred srednje škole"], ["3-srednje", "3. razred srednje škole"], ["4-srednje", "4. razred srednje škole"]],
  en: [["3-osnovne", "3rd grade primary school"], ["4-osnovne", "4th grade primary school"], ["5-osnovne", "5th grade primary school"], ["6-osnovne", "6th grade primary school"], ["7-osnovne", "7th grade primary school"], ["8-osnovne", "8th grade primary school"], ["1-srednje", "1st grade secondary school"], ["2-srednje", "2nd grade secondary school"], ["3-srednje", "3rd grade secondary school"], ["4-srednje", "4th grade secondary school"]]
};

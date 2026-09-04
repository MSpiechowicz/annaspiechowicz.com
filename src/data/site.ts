export type Locale = "en" | "de";

export interface SiteContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  navigation: {
    work: string;
    credentials: string;
    approach: string;
    contact: string;
    languageLabel: string;
    menu: string;
    status: string;
    theme: { label: string; light: string; dark: string; system: string };
  };
  hero: {
    eyebrow: string;
    lead: string;
    emphasis: string;
    intro: string;
    workCta: string;
    meta: string[];
  };
  signal: {
    title: string;
    description: string;
    boardLabel: string;
    boardHint: string;
    inputs: string[];
    decision: string;
    output: string;
    outputHint: string;
    phases: string[];
    caption: string;
  };
  metrics: {
    years: { label: string; unit: string; detail: string };
    languages: { label: string; detail: string };
    roles: { label: string; value: number; detail: string };
    certification: { label: string; value: string; detail: string };
  };
  impact: {
    title: string;
    intro: string;
    columns: {
      capability: string;
      produces: string;
      artifacts: string;
    };
    stories: Array<{
      verb: string;
      title: string;
      body: string;
      details: string[];
    }>;
  };
  approach: {
    title: string;
    intro: string;
    methods: Array<{
      verb: string;
      body: string;
    }>;
    toolsLabel: string;
    toolsNote: string;
    tools: string[];
  };
  depth: {
    title: string;
    intro: string;
    credentials: Array<{
      name: string;
      detail: string;
    }>;
    languagesValue: string;
    languagesLabel: string;
    languages: string[];
    personal: string;
  };
  contact: {
    title: string;
    body: string;
    emailCta: string;
    linkedInCta: string;
  };
  footer: {
    role: string;
    location: string;
    imprint: string;
    privacy: string;
    rights: string;
  };
}

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    meta: {
      title: "Anna Spiechowicz | Product Owner and Business Analyst",
      description:
        "Product Owner and Business Analyst in Germany, turning complex software systems into clear product decisions."
    },
    skipLink: "Skip to content",
    navigation: {
      work: "Work",
      credentials: "Credentials",
      approach: "Approach",
      contact: "Contact",
      languageLabel: "Switch to German",
      menu: "Menu",
      status: "open to conversations",
      theme: { label: "Theme", light: "Light", dark: "Dark", system: "System" }
    },
    hero: {
      eyebrow: "Product Owner with analyst precision",
      lead: "I turn complex systems into",
      emphasis: "clear product decisions.",
      intro:
        "Developer foundations, analyst precision and product ownership for teams building complex software \u2014 in English and German, since 2012.",
      workCta: "See my work",
      meta: [
        "Frankfurt Rhine-Main, Germany",
        "Enterprise software teams",
        "IREB certified"
      ]
    },
    signal: {
      title: "From many signals to one product direction",
      description:
        "User needs, business value, risk and constraints converge into a decision and a roadmap.",
      boardLabel: "Decision pipeline",
      boardHint: "4 signals, one direction",
      inputs: ["User need", "Business value", "Risk", "Constraint"],
      decision: "Decision",
      output: "Roadmap",
      outputHint: "value \u00b7 risk \u00b7 effort",
      phases: ["now", "next", "later"],
      caption: "Clarity is not less information. It is the right information in the right order."
    },
    metrics: {
      years: {
        label: "Years in the field",
        unit: "yrs",
        detail: "Software, analysis, product \u2014 since 2012"
      },
      languages: {
        label: "Languages",
        detail: "Polish \u00b7 English \u00b7 German \u00b7 French"
      },
      roles: {
        label: "Roles held",
        value: 5,
        detail: "From junior programmer to Product Owner"
      },
      certification: {
        label: "Certification",
        value: "IREB",
        detail: "Foundation Level, certified 2017"
      }
    },
    impact: {
      title: "Clarity is a product skill.",
      intro:
        "I structure what first looks contradictory until users, business and engineering can act on the same decision.",
      columns: {
        capability: "Capability",
        produces: "What it produces",
        artifacts: "Working artifacts"
      },
      stories: [
        {
          verb: "Prioritize",
          title: "Turn competing requests into a product direction.",
          body:
            "I connect user workshops, backlog decisions, PI Planning and roadmap maintenance so teams can focus on the next valuable move.",
          details: ["Backlog", "PI Planning", "Product roadmap"]
        },
        {
          verb: "Visualize",
          title: "Make requirements visible before they become expensive.",
          body:
            "I translate needs into process models, specifications and Figma designs that customers and development teams can challenge together.",
          details: ["BPMN and UML", "Figma", "Customer workshops"]
        },
        {
          verb: "Enable",
          title: "Turn individual knowledge into a team practice.",
          body:
            "I train in English and German, mentor colleagues and build shared standards that make good analysis easier to repeat.",
          details: ["Bilingual training", "Mentoring", "BA community"]
        }
      ]
    },
    approach: {
      title: "A practical way through complexity.",
      intro: "The method changes with the problem. The discipline stays consistent.",
      methods: [
        {
          verb: "Listen",
          body: "Find the real need behind the first request."
        },
        {
          verb: "Map",
          body: "Make processes, dependencies and unknowns visible."
        },
        {
          verb: "Decide",
          body: "Give value, risk and effort a clear order."
        },
        {
          verb: "Share",
          body: "Leave the team with knowledge it can reuse."
        }
      ],
      toolsLabel: "Working vocabulary",
      toolsNote: "The tools the work actually runs on",
      tools: [
        "Product roadmaps",
        "Backlog prioritization",
        "PI Planning",
        "BPMN",
        "UML",
        "Figma",
        "Jira",
        "Confluence",
        "REST and SOAP",
        "Agile",
        "AI agents"
      ]
    },
    depth: {
      title: "Depth beyond the job title.",
      intro:
        "Product thinking supported by requirements practice, project management and an engineering education.",
      credentials: [
        {
          name: "REQB / IREB Foundation Level",
          detail: "Certified requirements engineering, 2017"
        },
        {
          name: "IT Project Management",
          detail: "Postgraduate studies, AGH University of Science and Technology"
        },
        {
          name: "Biomedical Engineering",
          detail: "Master of Science, Silesian University of Technology"
        }
      ],
      languagesValue: "4",
      languagesLabel: "languages",
      languages: ["Polish", "English", "German", "French"],
      personal: "Away from the backlog: books, cinema, Japanese culture and the stories hidden inside names."
    },
    contact: {
      title: "Complex product. Clear next move.",
      body:
        "I am open to thoughtful conversations about product ownership, business analysis and teams solving hard software problems.",
      emailCta: "Email Anna",
      linkedInCta: "LinkedIn"
    },
    footer: {
      role: "Product Owner and Business Analyst",
      location: "Frankfurt Rhine-Main, Germany",
      imprint: "Imprint",
      privacy: "Privacy",
      rights: "All rights reserved."
    }
  },
  de: {
    locale: "de",
    meta: {
      title: "Anna Spiechowicz | Product Owner und Business Analystin",
      description:
        "Product Owner und Business Analystin in Deutschland. Komplexe Softwaresysteme werden zu klaren Produktentscheidungen."
    },
    skipLink: "Zum Inhalt springen",
    navigation: {
      work: "Arbeit",
      credentials: "Qualifikationen",
      approach: "Arbeitsweise",
      contact: "Kontakt",
      languageLabel: "Zur englischen Version wechseln",
      menu: "Men\u00fc",
      status: "offen f\u00fcr Gespr\u00e4che",
      theme: { label: "Design", light: "Hell", dark: "Dunkel", system: "System" }
    },
    hero: {
      eyebrow: "Product Owner mit analytischer Präzision",
      lead: "Aus Komplexität werden",
      emphasis: "klare Produktentscheidungen.",
      intro:
        "Technisches Fundament, analytische Präzision und Product Ownership für Teams, die komplexe Software entwickeln \u2014 auf Englisch und Deutsch, seit 2012.",
      workCta: "Meine Arbeit",
      meta: [
        "Frankfurt Rhein-Main, Deutschland",
        "Enterprise-Softwareteams",
        "IREB-zertifiziert"
      ]
    },
    signal: {
      title: "Von vielen Signalen zu einer Produktrichtung",
      description:
        "Nutzerbedarf, Geschäftswert, Risiko und Rahmenbedingungen führen zu einer Entscheidung und einer Roadmap.",
      boardLabel: "Entscheidungs-Pipeline",
      boardHint: "4 Signale, eine Richtung",
      inputs: ["Nutzerbedarf", "Geschäftswert", "Risiko", "Rahmen"],
      decision: "Entscheidung",
      output: "Roadmap",
      outputHint: "Wert \u00b7 Risiko \u00b7 Aufwand",
      phases: ["jetzt", "als N\u00e4chstes", "sp\u00e4ter"],
      caption:
        "Klarheit bedeutet nicht weniger Information. Sie bringt die richtige Information in die richtige Reihenfolge."
    },
    metrics: {
      years: {
        label: "Jahre im Fach",
        unit: "J.",
        detail: "Softwareentwicklung, Analyse, Produkt \u2014 seit 2012"
      },
      languages: {
        label: "Sprachen",
        detail: "Polnisch \u00b7 Englisch \u00b7 Deutsch \u00b7 Französisch"
      },
      roles: {
        label: "Positionen",
        value: 5,
        detail: "Vom Junior Programmer zur Product Ownerin"
      },
      certification: {
        label: "Zertifizierung",
        value: "IREB",
        detail: "Foundation Level, zertifiziert 2017"
      }
    },
    impact: {
      title: "Klarheit ist eine Produktkompetenz.",
      intro:
        "Ich strukturiere, was zunächst widersprüchlich wirkt, bis Nutzer, Business und Entwicklung an derselben Entscheidung arbeiten.",
      columns: {
        capability: "Kompetenz",
        produces: "Was dabei entsteht",
        artifacts: "Arbeitsergebnisse"
      },
      stories: [
        {
          verb: "Priorisieren",
          title: "Aus konkurrierenden Anforderungen wird eine klare Produktrichtung.",
          body:
            "Ich verbinde Nutzerworkshops, Backlog-Entscheidungen, PI Planning und Roadmap-Pflege, damit sich Teams auf den nächsten wertvollen Schritt konzentrieren.",
          details: ["Backlog", "PI Planning", "Produkt-Roadmap"]
        },
        {
          verb: "Visualisieren",
          title: "Anforderungen werden sichtbar, bevor sie teuer werden.",
          body:
            "Ich übersetze Bedürfnisse in Prozessmodelle, Spezifikationen und Figma-Designs, die Kunden und Entwicklung gemeinsam prüfen können.",
          details: ["BPMN und UML", "Figma", "Kundenworkshops"]
        },
        {
          verb: "Befähigen",
          title: "Aus individuellem Wissen wird gemeinsame Praxis.",
          body:
            "Ich trainiere auf Englisch und Deutsch, begleite Kollegen und entwickle Standards, mit denen gute Analyse wiederholbar wird.",
          details: ["Zweisprachige Trainings", "Mentoring", "BA Community"]
        }
      ]
    },
    approach: {
      title: "Ein praktischer Weg durch Komplexität.",
      intro: "Die Methode ändert sich mit dem Problem. Die Disziplin bleibt.",
      methods: [
        {
          verb: "Zuhören",
          body: "Hinter dem ersten Wunsch den tatsächlichen Bedarf erkennen."
        },
        {
          verb: "Abbilden",
          body: "Prozesse, Abhängigkeiten und offene Fragen sichtbar machen."
        },
        {
          verb: "Entscheiden",
          body: "Wert, Risiko und Aufwand in eine klare Reihenfolge bringen."
        },
        {
          verb: "Weitergeben",
          body: "Wissen so teilen, dass das Team es wiederverwenden kann."
        }
      ],
      toolsLabel: "Arbeitsvokabular",
      toolsNote: "Die Werkzeuge, mit denen die Arbeit läuft",
      tools: [
        "Produkt-Roadmaps",
        "Backlog-Priorisierung",
        "PI Planning",
        "BPMN",
        "UML",
        "Figma",
        "Jira",
        "Confluence",
        "REST und SOAP",
        "Agile",
        "KI-Agenten"
      ]
    },
    depth: {
      title: "Mehr Tiefe als der Jobtitel zeigt.",
      intro:
        "Produktdenken auf der Basis von Requirements Engineering, Projektmanagement und technischer Ausbildung.",
      credentials: [
        {
          name: "REQB / IREB Foundation Level",
          detail: "Requirements Engineering, zertifiziert 2017"
        },
        {
          name: "IT-Projektmanagement",
          detail: "Aufbaustudium, AGH University of Science and Technology"
        },
        {
          name: "Biomedizintechnik",
          detail: "Master of Science, Silesian University of Technology"
        }
      ],
      languagesValue: "4",
      languagesLabel: "Sprachen",
      languages: ["Polnisch", "Englisch", "Deutsch", "Französisch"],
      personal:
        "Abseits des Backlogs: Bücher, Kino, japanische Kultur und die Geschichten, die in Namen stecken."
    },
    contact: {
      title: "Komplexes Produkt. Klarer nächster Schritt.",
      body:
        "Ich bin offen für Gespräche über Product Ownership, Business-Analyse und Teams, die anspruchsvolle Softwareprobleme lösen.",
      emailCta: "Anna kontaktieren",
      linkedInCta: "LinkedIn"
    },
    footer: {
      role: "Product Owner und Business Analystin",
      location: "Frankfurt Rhein-Main, Deutschland",
      imprint: "Impressum",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten."
    }
  }
};

export const alternatePath = (locale: Locale) => (locale === "en" ? "/de/" : "/");

export const careerStart = 2012;
export const emailAddress = "anna.maria.spiechowicz@gmail.com";
export const linkedInUrl = "https://www.linkedin.com/in/anna-spiechowicz-166b25108/";

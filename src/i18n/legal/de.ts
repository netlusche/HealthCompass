import { LegalDictionary } from "@/types/legal";

export const de: LegalDictionary = {
  privacy: {
    title: "Datenschutzerklärung",
    subtitle: "Stand: [Datum]",
    sections: [
      {
        title: "1. Allgemeine Hinweise und Pflichtinformationen",
        content: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Unsere Anwendung ist auf Anonymität ausgelegt. Für die Nutzung der Selbsttests ist keine Registrierung oder Angabe identifizierbarer persönlicher Daten erforderlich."
      },
      {
        title: "2. Verantwortliche Stelle",
        content: "[Name / Firma]\n[Ladungsfähige Anschrift]\n[Postleitzahl, Stadt]\n\nVertreten durch: [Vertretungsberechtigte Person]\nKontakt: E-Mail: [E-Mail-Adresse]"
      },
      {
        title: "3. Datenerfassung auf dieser Website",
        content: [
          "Hosting: Wir hosten die Inhalte unserer Website bei [Anbietername]. Grundlage für die Nutzung ist Art. 6 Abs. 1 lit. f DSGVO.",
          "Server-Log-Dateien: Der Provider erhebt automatisch Informationen (IP-Adresse, Browser, System), die technisch notwendig sind. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
          "Local Storage: Fortschrittsdaten verbleiben ausschließlich auf Ihrem Endgerät und werden nicht an unsere Server übertragen."
        ]
      },
      {
        title: "4. Ihre Rechte",
        content: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Sperrung oder Löschung Ihrer Daten gemäß DSGVO."
      }
    ],
    note: "Hinweis: Dies ist ein Entwurf. Bitte vor Veröffentlichung rechtlich prüfen lassen."
  },
  imprint: {
    title: "Impressum",
    sections: [
      {
        title: "Angaben gemäß § 5 TMG",
        content: "[Name / Firma]\n[Ladungsfähige Anschrift]\n[Postleitzahl, Stadt]\n\nKontakt: [E-Mail-Adresse]\nVertreten durch: [Vertretungsberechtigte Person]"
      },
      {
        title: "Registereintrag (falls vorhanden)",
        content: "Registergericht: [Gericht]\nRegisternummer: [Nummer]"
      },
      {
        title: "EU-Streitschlichtung",
        content: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/"
      }
    ]
  },
  disclaimer: {
    title: "Haftungsausschluss (Disclaimer)",
    sections: [
      {
        title: "1. Warnhinweis zu Inhalten",
        content: "Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte."
      },
      {
        title: "2. Kein medizinisches Gerät / Keine Diagnose",
        content: "Diese Anwendung stellt ein Informations- und Präventionsangebot dar. Die Selbsttests sind KEINE medizinische Diagnose und ersetzen KEINE fachärztliche Untersuchung."
      },
      {
        title: "3. Kein Notfalldienst",
        content: "Bei akuten Symptomen oder Lebensgefahr wählen Sie bitte umgehend den Notruf. Wir sind kein Krisen- oder Notfalldienst."
      }
    ]
  },
  copyright: {
    title: "Copyright / Urheberrecht",
    sections: [
      {
        title: "Urheberrechtshinweis",
        content: "Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf unserer schriftlichen Zustimmung."
      },
      {
        title: "Bildnachweise",
        content: "[Platzhalter für Bildnachweise / Lizenzen]"
      }
    ]
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    sections: [
      {
        title: "Bemühen um Barrierefreiheit",
        content: "Wir bemühen uns, diese Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen."
      },
      {
        title: "Stand der Vereinbarkeit",
        content: "Diese Website ist mit den gängigen Webstandards (WCAG 2.1) weitgehend vereinbar. Wir arbeiten kontinuierlich an weiteren Verbesserungen."
      }
    ]
  },
  checklist: {
    title: "Checkliste vor Veröffentlichung",
    items: [
      "Betreiber-Stammdaten ergänzen",
      "Hosting-Anbieter eintragen",
      "Rechtsform prüfen (Einzelunternehmer, GmbH, etc.)",
      "Anwaltliche Endkontrolle durchführen",
      "Impressumspflichten gemäß § 5 TMG finalisieren"
    ]
  }
};

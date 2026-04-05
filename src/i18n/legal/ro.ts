import { LegalDictionary } from "@/types/legal";

export const ro: LegalDictionary = {
  privacy: {
    title: "Politica de confidențialitate",
    subtitle: "Valabil de la: [Data]",
    sections: [
      {
        title: "1. Informații generale și informații obligatorii",
        content: "Protecția datelor dumneavoastră cu caracter personal este foarte importantă pentru noi. Tratăm datele dumneavoastră în mod confidențial și în conformitate cu reglementările legale privind protecția datelor și cu această politică de confidențialitate. Aplicația noastră este concepută pentru anonimat. Nu este necesară înregistrarea sau furnizarea de date cu caracter personal identificabile pentru a utiliza autoevaluările."
      },
      {
        title: "2. Partea responsabilă",
        content: "[Nume / Companie]\n[Adresa legală]\n[Cod poștal, Oraș]\n\nReprezentat de: [Reprezentant autorizat]\nContact: E-mail: [Adresă e-mail]"
      },
      {
        title: "3. Colectarea datelor pe acest site web",
        content: [
          "Găzduire (Hosting): Găzduim conținutul site-ului nostru la [Nume furnizor]. Baza legală este Art. 6 alin. 1 lit. f GDPR.",
          "Fișiere log de server: Furnizorul colectează automat informații (adresă IP, browser, sistem) care sunt necesare din punct de vedere tehnic. Baza legală este Art. 6 alin. 1 lit. f GDPR.",
          "Stocare locală (Local Storage): Datele privind progresul testului rămân exclusiv pe dispozitivul dumneavoastră și nu sunt transmise serverelor noastre."
        ]
      },
      {
        title: "4. Drepturile dumneavoastră",
        content: "Aveți dreptul la informare, rectificare, blocare sau ștergere a datelor dumneavoastră în orice moment, în conformitate cu GDPR."
      }
    ],
    note: "Notă: Acesta este un proiect de document. Vă rugăm să îl verificați din punct de vedere juridic înainte de publicare."
  },
  imprint: {
    title: "Mențiuni legale (Imprint)",
    sections: [
      {
        title: "Informații conform § 5 TMG (Legea germană)",
        content: "[Nume / Companie]\n[Adresa legală]\n[Cod poștal, Oraș]\n\nContact: [Adresă e-mail]\nReprezentat de: [Reprezentant autorizat]"
      },
      {
        title: "Înregistrare în registru (dacă este cazul)",
        content: "Instanța de înregistrare: [Sediul instanței]\nNumăr de înregistrare: [Număr]"
      },
      {
        title: "Soluționarea disputelor în UE",
        content: "Comisia Europeană oferă o platformă pentru soluționarea online a litigiilor (OS): https://ec.europa.eu/consumers/odr/"
      }
    ]
  },
  disclaimer: {
    title: "Declinarea responsabilității (Disclaimer)",
    sections: [
      {
        title: "1. Avertisment privind conținutul",
        content: "Nu ne asumăm nicio responsabilitate pentru acuratețea, completitudinea și actualitatea conținutului furnizat."
      },
      {
        title: "2. Nu este un dispozitiv medical / Nu este un diagnostic",
        content: "Această aplicație este un serviciu informațional și preventiv. Autoevaluările NU sunt un diagnostic medical și NU înlocuiesc un consult medical de specialitate."
      },
      {
        title: "3. Nu este un serviciu de urgență",
        content: "În caz de simptome acute sau pericol de moarte, vă rugăm să apelați imediat serviciile de urgență. Nu suntem un serviciu de criză sau de urgență."
      }
    ]
  },
  copyright: {
    title: "Drepturi de autor",
    sections: [
      {
        title: "Notificare privind drepturile de autor",
        content: "Conținutul și lucrările publicate pe acest site web sunt supuse legii germane privind drepturile de autor. Orice tip de utilizare în afara limitelor legii drepturilor de autor necesită acordul nostru scris."
      },
      {
        title: "Credite pentru imagini",
        content: "[Placeholder pentru creditele imaginilor / licențe]"
      }
    ]
  },
  accessibility: {
    title: "Accessibility Statement",
    sections: [
      {
        title: "Commitment to Accessibility",
        content: "We strive to make this website accessible in accordance with national legislation implementing Directive (EU) 2016/2102."
      },
      {
        title: "Status of Compliance",
        content: "This website is largely compliant with the common web standards (WCAG 2.1). We are continuously working on further improvements."
      }
    ]
  },
  checklist: {
    title: "Lista de verificare finală înainte de publicare",
    items: [
      "Completați datele de identificare ale operatorului",
      "Introduceți furnizorul de găzduire",
      "Verificați forma juridică (Persoană Fizică Autorizată, SRL etc.)",
      "Efectuați revizuirea juridică finală",
      "Verificați corectitudinea datelor de înregistrare"
    ]
  }
};

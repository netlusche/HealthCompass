import { LegalDictionary } from "@/types/legal";

export const pl: LegalDictionary = {
  privacy: {
    title: "Polityka prywatności",
    subtitle: "Stan na dzień: [Data]",
    sections: [
      {
        title: "1. Informacje ogólne i obowiązek informacyjny",
        content: "Ochrona Państwa danych osobowych jest dla nas priorytetem. Państwa dane są traktowane poufnie, zgodnie z ustawowymi przepisami o ochronie danych oraz niniejszą polityką prywatności. Nasza aplikacja jest zaprojektowana z myślą o anonimowości. Korzystanie z testów nie wymaga rejestracji ani podawania możliwych do zidentyfikowania danych osobowych."
      },
      {
        title: "2. Podmiot odpowiedzialny",
        content: "[Imię / Firma]\n[Adres do doręczeń]\n[Kod pocztowy, Miasto]\n\nReprezentowany przez: [Osoba upoważniona do reprezentacji]\nKontakt: E-mail: [Adres e-mail]"
      },
      {
        title: "3. Gromadzenie danych na tej stronie internetowej",
        content: [
          "Hosting: Treści sserwisu są hostowane u dostawcy: [Nazwa dostawcy]. Podstawą prawną jest art. 6 ust. 1 lit. f RODO.",
          "Pliki logów serwera: Dostawca automatycznie zbiera informacje (adres IP, przeglądarka, system), które są niezbędne technicznie. Podstawą jest art. 6 ust. 1 lit. f RODO.",
          "Local Storage: Dane o postępie testów pozostają wyłącznie na urządzeniu końcowym użytkownika."
        ]
      },
      {
        title: "4. Prawa przysługujące użytkownikowi",
        content: "Zgodnie z RODO, mają Państwo prawo do informacji, sprostowania, blokowania lub usunięcia swoich danych w dowolnym momencie."
      }
    ],
    note: "Uwaga: To jest projekt dokumentu. Przed publikacją należy poddać go weryfikacji prawnej."
  },
  imprint: {
    title: "Nota prawna (Imprint)",
    sections: [
      {
        title: "Informacje zgodnie z § 5 TMG (Prawo niemieckie)",
        content: "[Imię / Firma]\n[Adres do doręczeń]\n[Kod pocztowy, Miasto]\n\nKontakt: [Adres e-mail]\nReprezentowany przez: [Osoba upoważniona do reprezentacji]"
      },
      {
        title: "Wpis do rejestru (jeśli dotyczy)",
        content: "Sąd rejestrowy: [Nazwa sądu]\nNumer rejestrowy: [Numer]"
      },
      {
        title: "Sprostowanie sporów w UE",
        content: "Komisja Europejska udostępnia platformę do internetowego rozstrzygania sporów (OS): https://ec.europa.eu/consumers/odr/"
      }
    ]
  },
  disclaimer: {
    title: "Zastrzeżenie prawne (Disclaimer)",
    sections: [
      {
        title: "1. Ostrzeżenie dotyczące treści",
        content: "Nie ponosimy odpowiedzialności za dokładność, kompletność i aktualność udostępnianych treści."
      },
      {
        title: "2. Nie jest wyrobem medycznym / Brak diagnozy",
        content: "Ta aplikacja jest usługą informacyjną i profilaktyczną. Samooceny NIE stanowią diagnozy medycznej i NIE zastępują profesjonalnego badania lekarskiego."
      },
      {
        title: "3. Brak serwisu ratunkowego",
        content: "W przypadku ostrych objawów lub zagrożenia życia należy natychmiast wezwać pomoc pod numerem alarmowym. Nie jesteśmy usługą kryzysową ani ratunkową."
      }
    ]
  },
  copyright: {
    title: "Prawo autorskie",
    sections: [
      {
        title: "Informacja o prawach autorskich",
        content: "Treści i utwory opublikowane na tej stronie podlegają niemieckiemu prawu autorskiemu. Jakikolwiek rodzaj wykorzystania poza granicami prawa autorskiego wymaga naszej pisemnej zgody."
      },
      {
        title: "Źródła obrazów",
        content: "[Miejsce na źródła obrazów / licencje]"
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
    title: "Ostateczna lista kontrolna przed publikacją",
    items: [
      "Uzupełnij dane identyfikacyjne operatora",
      "Wpisz dostawcę hostingu",
      "Sprawdź formę prawną (JDG, spółka z o.o. itp.)",
      "Przeprowadź końcową weryfikację prawną",
      "Zweryfikuj poprawność danych rejestrowych"
    ]
  }
};

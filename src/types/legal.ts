export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface LegalPage {
  title: string;
  subtitle?: string;
  sections: LegalSection[];
  note?: string;
}

export interface LegalDictionary {
  privacy: LegalPage;
  imprint: LegalPage;
  disclaimer: LegalPage;
  copyright: LegalPage;
  checklist: {
    title: string;
    items: string[];
  };
}

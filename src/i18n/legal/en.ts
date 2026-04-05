import { LegalDictionary } from "@/types/legal";

export const en: LegalDictionary = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "As of: [Date]",
    sections: [
      {
        title: "1. General Information and Mandatory Disclosure",
        content: "The protection of your personal data is very important to us. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy. Our application is designed for anonymity. No registration or provision of identifiable personal data is required to use the self-assessments."
      },
      {
        title: "2. Controller / Responsible Body",
        content: "[Name / Company]\n[Legal Address]\n[Postcode, City]\n\nRepresented by: [Authorized Representative]\nContact: E-Mail: [E-Mail Address]"
      },
      {
        title: "3. Data Collection on This Website",
        content: [
          "Hosting: We host our website content with [Provider Name]. The basis for use is Art. 6 Para. 1 lit. f GDPR.",
          "Server Log Files: The provider automatically collects information (IP address, browser, system) that is technically necessary. The basis is Art. 6 Para. 1 lit. f GDPR.",
          "Local Storage: Progress data remains exclusively on your terminal device and is not transmitted to our servers."
        ]
      },
      {
        title: "4. Your Rights",
        content: "You have the right to information, correction, blocking, or deletion of your data at any time in accordance with the GDPR."
      }
    ],
    note: "Note: This is a draft. Please have it legally reviewed before publication."
  },
  imprint: {
    title: "Legal Notice",
    sections: [
      {
        title: "Information according to § 5 TMG (German Law)",
        content: "[Name / Company]\n[Legal Address]\n[Postcode, City]\n\nContact: [E-Mail Address]\nRepresented by: [Authorized Representative]"
      },
      {
        title: "Register Entry (if applicable)",
        content: "Registry Court: [Court]\nRegistration Number: [Number]"
      },
      {
        title: "EU Dispute Resolution",
        content: "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/"
      }
    ]
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      {
        title: "1. Warning Concerning Content",
        content: "We assume no liability for the accuracy, completeness, and timeliness of the content provided."
      },
      {
        title: "2. Not a Medical Device / No Diagnosis",
        content: "This application is an informational and prevention-oriented service. The self-assessments are NOT a medical diagnosis and do NOT replace professional medical examination."
      },
      {
        title: "3. No Emergency Service",
        content: "In case of acute symptoms or life-threatening situations, please call emergency services immediately. We are not a crisis or emergency service."
      }
    ]
  },
  copyright: {
    title: "Copyright",
    sections: [
      {
        title: "Copyright Notice",
        content: "The content and works published on this website are subject to German copyright and performance protection law. Any type of utilization outside the limits of copyright law requires our written consent."
      },
      {
        title: "Image Credits",
        content: "[Placeholder for Image Credits / Licenses]"
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
    title: "Final Checklist Before Publication",
    items: [
      "Fill in operator master data",
      "Enter hosting provider",
      "Check legal form (Sole Proprietor, GmbH, etc.)",
      "Perform final legal review",
      "Finalize legal notice requirements according to § 5 TMG"
    ]
  }
};

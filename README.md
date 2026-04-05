# HealthCompass

HealthCompass is a prevention-oriented, privacy-first, multilingual digital health app designed to provide short self-assessments for non-diagnostic health risk awareness.

The application allows users to check risk factors completely anonymously. It operates strictly client-side using a Next.js `sessionStorage` approach, ensuring absolute data privacy.

## Features
- **Privacy-First Design**: Zero tracking, zero login walls, 100% anonymous usage. Local state cleans up automatically.
- **Multilingual Architecture**: Native browser language detection with full fallback pathways for English, German, and Turkish.
- **Responsive Architecture**: Extensively configured via Tailwind v4 to handle desktop scaling and comfortable mobile touch targets for all demographics.
- **Medical Disclaimer Priority**: Every application flow establishes that calculations are informational and never diagnostic.

## Included Modules
- Dementia Risk
- Heart Attack Risk
- Type 2 Diabetes Risk
- COPD Risk
- Chronic Kidney Disease Risk
- Osteoporosis Risk
- Work Stress & Burnout Warning Signs (Behavioral)
- Alcohol Risk & Warning Signs (Behavioral)
- Anxiety & Persistent Worry Warning Signs (Behavioral)

## Adding a New Module
The app is designed to scale horizontally very easily. To add an additional disease screening module, follow this workflow:

1. **Create Data Model (`src/data/modules/<new_disease>.ts`)**:
   Implement a new object matching the `ModuleDefinition` interface (found in `src/types/assessment.ts`). This structure holds all tri-lingual questions, answers, points logic, risk thresholds, and medical recommendations.
2. **Setup Routing (`src/app/<new_disease>/page.tsx`)**:
   Create a single page that imports `<ModuleRunner>` and passes in your newly constructed data module.
3. **Localize Dictionary (`src/i18n/dictionaries/*.ts`)**:
   Open all translation dictionaries and add a `newDiseaseTitle` and `newDiseaseDesc` key to the `home` block.
4. **Link the Card (`src/app/page.tsx`)**:
   Add a new `<Link>` block scaling the grid. You are free to assign a fresh Tailwind color (e.g. `emerald`, `fuchsia`) to visually separate the new module on the dashboard.

## Development Commands
```bash
npm install
npm run dev
npm run build 
```

**Note**: All scoring metrics require professional medical validation prior to publishing. Modules related to behavioral and mental health (e.g., Burnout, Alcohol, Anxiety) must be explicitly positioned as non-diagnostic orientation tools, with prominent "Prefer not to answer" flows and safety warnings against sudden physiological changes (like alcohol withdrawal) without medical supervision.

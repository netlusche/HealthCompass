"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { diabetesModule } from "@/data/modules/diabetes";

export default function DiabetesPage() {
  return <ModuleRunner moduleDef={diabetesModule} />;
}

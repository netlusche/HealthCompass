"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { dementiaModule } from "@/data/modules/dementia";

export default function DementiaPage() {
  return <ModuleRunner moduleDef={dementiaModule} />;
}

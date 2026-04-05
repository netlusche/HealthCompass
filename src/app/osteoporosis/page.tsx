"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { osteoporosisModule } from "@/data/modules/osteoporosis";

export default function OsteoporosisPage() {
  return <ModuleRunner moduleDef={osteoporosisModule} />;
}

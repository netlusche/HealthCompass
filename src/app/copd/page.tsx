"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { copdModule } from "@/data/modules/copd";

export default function COPDPage() {
  return <ModuleRunner moduleDef={copdModule} />;
}

"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { kidneyModule } from "@/data/modules/kidney";

export default function KidneyPage() {
  return <ModuleRunner moduleDef={kidneyModule} />;
}

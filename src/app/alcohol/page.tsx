"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { alcoholModule } from "@/data/modules/alcohol";

export default function AlcoholPage() {
  return <ModuleRunner moduleDef={alcoholModule} />;
}

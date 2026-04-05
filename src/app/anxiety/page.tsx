"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { anxietyModule } from "@/data/modules/anxiety";

export default function AnxietyPage() {
  return <ModuleRunner moduleDef={anxietyModule} />;
}

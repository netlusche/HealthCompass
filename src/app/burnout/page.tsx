"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { burnoutModule } from "@/data/modules/burnout";

export default function BurnoutPage() {
  return <ModuleRunner moduleDef={burnoutModule} />;
}

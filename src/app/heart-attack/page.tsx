"use client";

import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { heartAttackModule } from "@/data/modules/heart-attack";

export default function HeartAttackPage() {
  return <ModuleRunner moduleDef={heartAttackModule} />;
}

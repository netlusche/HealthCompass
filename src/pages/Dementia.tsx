import React from "react";
import { ModuleRunner } from "@/components/assessment/ModuleRunner";
import { dementiaModule } from "@/data/modules/dementia";

const Dementia = () => {
  return <ModuleRunner moduleDef={dementiaModule} />;
};

export default Dementia;

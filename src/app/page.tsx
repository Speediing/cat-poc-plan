import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import {
  HowWeRunIt,
  WhatWeProve,
  WhatWeHeard,
  TheGap,
  WhoCursorIs,
  WhereItPlugsIn,
  ProposedPoc,
  ThePilot,
} from "@/components/Sections";
import { NextSteps } from "@/components/NextSteps";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionNav />
      <HowWeRunIt />
      <WhatWeProve />
      <WhatWeHeard />
      <TheGap />
      <WhoCursorIs />
      <WhereItPlugsIn />
      <ProposedPoc />
      {/* TheGroup hidden until Nate confirms peeps. See hiddenGroup in content.ts */}
      <ThePilot />
      <NextSteps />
    </main>
  );
}

import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import {
  WhatWeHeard,
  TheGap,
  WhoCursorIs,
  WhereItPlugsIn,
  ProposedPoc,
  ThePilot,
  Timeline,
} from "@/components/Sections";
import { NextSteps } from "@/components/NextSteps";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionNav />
      <WhatWeHeard />
      <TheGap />
      <WhoCursorIs />
      <WhereItPlugsIn />
      <ProposedPoc />
      {/* TheGroup hidden until Nate confirms peeps — see hiddenGroup in content.ts */}
      <ThePilot />
      <Timeline />
      <NextSteps />
    </main>
  );
}

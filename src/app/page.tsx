import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import {
  WhatWeHeard,
  TheGap,
  WhoCursorIs,
  WhatItDoes,
  WhereItPlugsIn,
  IdeaWorthTesting,
  ProposedPoc,
  TheGroup,
  ThePilot,
  Timeline,
  Faq,
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
      <WhatItDoes />
      <WhereItPlugsIn />
      <IdeaWorthTesting />
      <ProposedPoc />
      <TheGroup />
      <ThePilot />
      <Timeline />
      <Faq />
      <NextSteps />
    </main>
  );
}

import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import {
  WhatWeHeard,
  TheGap,
  WhoCursorIs,
  WhereItPlugsIn,
  IdeaWorthTesting,
  ProposedPoc,
  TheGroup,
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
      <IdeaWorthTesting />
      <ProposedPoc />
      <TheGroup />
      <ThePilot />
      <Timeline />
      <NextSteps />
    </main>
  );
}

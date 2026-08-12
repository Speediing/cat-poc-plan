import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import { WhatWeHeard } from "@/components/WhatWeHeard";
import { ThePilot } from "@/components/ThePilot";
import { WhyNow } from "@/components/WhyNow";
import { GoForward } from "@/components/GoForward";
import { NextSteps } from "@/components/NextSteps";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionNav />
      <WhatWeHeard />
      <ThePilot />
      <WhyNow />
      <GoForward />
      <NextSteps />
    </main>
  );
}

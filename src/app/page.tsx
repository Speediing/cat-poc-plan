import { Hero } from "@/components/Hero";
import { SectionNav } from "@/components/SectionNav";
import { WhatWeHeard } from "@/components/WhatWeHeard";
import { UseCase } from "@/components/UseCase";
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
      <UseCase />
      <WhyNow />
      <ThePilot />
      <GoForward />
      <NextSteps />
    </main>
  );
}

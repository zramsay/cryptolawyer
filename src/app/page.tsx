import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";


import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
    
      <Hero />
      <div className="h-16"></div> {/* 8 is for the spacing, can be adjusted to your needs */}


      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Blockchain + smart contract-powered ecosystem
"
        title="Efficiency | Integrity | Opportunity"
      >
        By merging law, blockchain, and gamification, Cryptolawyer.net is leading the way in making legal finance profitable, accessible, and transparent, while reducing fraud enabling greater adoption of crypto worldwide.

      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
  preTitle="Code Meets Law"
  title="Outdated legal frameworks can’t keep up with the fast pace of crypto assets"
>
  <p className="mb-4">Investor losses due to scams, fraud, and lack of transparency.</p>
  <p>Legal processes are expensive, slow, and often ineffective to solve cross-border crypto-legal problems.</p>
</SectionTitle>


      <Testimonials />

      <SectionTitle preTitle="FAQ" title="A Holistic Ecosystem">
        
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}

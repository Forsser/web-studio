import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialization from "@/components/Specialization";
import Example from "@/components/Example";

import Problem from "@/components/Problem";
import Review from "@/components/Review";
import ApplicationForm from "@/components/ApplicationForm";
import Steps from "@/components/Steps";
import Team from "@/components/Team";
import FAQAccordion from "@/components/FAQAccordion";
import Advantages from "@/components/Advantages";
import SpecializationPage from "@/components/SpecializationPage";
import Garant from "@/components/Garant";
export default function Home() {
  return (
    <>
      <Hero />

      <About />
      <SpecializationPage />
      <Example />

      <Problem />
      <Garant />
      <Review />
      <ApplicationForm />
      <Steps />
      <Team />
      <FAQAccordion />
    </>
  );
}

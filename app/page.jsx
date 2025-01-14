import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialization from "@/components/Specialization";
import Example from "@/components/Example";
import Feedback from "@/components/Feedback";
import Problem from "@/components/Problem";
import Review from "@/components/Review";
import ApplicationForm from "@/components/ApplicationForm";
import Steps from "@/components/Steps";
import Team from "@/components/Team";
import FAQAccordion from "@/components/FAQAccordion";
import ThreeScene from "@/components/S-3d";
import Advantages from "@/components/Advantages";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <Specialization />
      <Example />
      <Feedback />
      <Problem />
      <Review />
      <ApplicationForm />
      <Steps />
      <Team />
      <FAQAccordion />
    </>
  );
}

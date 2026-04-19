import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scaleahead — Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Scaleahead helps businesses grow revenue with Meta Ads, Google Ads, Lead Generation and Social Media Management.",
      },
      { property: "og:title", content: "Scaleahead — Digital Marketing Agency" },
      {
        property: "og:description",
        content:
          "Results-driven digital marketing strategies that turn clicks into paying clients.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] pt-24">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials />
        <ConsultationForm />
        <BookCall />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

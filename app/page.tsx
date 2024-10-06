import Homepage from "@/components/Homepage";
import Header from "@/components/Header";
import Aboutpage from "@/components/Aboutpage";
import Servicespage from "@/components/Servicespage";
import Footer from "@/components/Footer";
import Projectspage from "@/components/Projectspage";
import Skillespage from "@/components/Skillespage";
import Contactspage from "@/components/Contactspage";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-scroll relative">
      <Header />
      <Homepage />
      <Servicespage />
      <Aboutpage />
      <Projectspage />
      <Skillespage />
      <Contactspage />
      <Footer />
    </main>
  );
}

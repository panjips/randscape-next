import AdvanceUsage from "@/components/AdvanceUsage";
import BasicUsage from "@/components/BasicUsage";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <BasicUsage />
      <AdvanceUsage />
      <Footer />
    </main>
  );
}

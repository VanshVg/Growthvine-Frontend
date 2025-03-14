import FaqSection from "./components/FaqSection";
import LearnSection from "./components/LearnSection";
import TopSection from "./components/TopSection";
import WorkSection from "./components/WorkSection";

const HomePage = () => {
  return (
    <div className="mt-8">
      <TopSection />
      <LearnSection />
      <WorkSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;

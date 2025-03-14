import { faqQuestionsData } from "../types/constants";
import QuestionCard from "./QuestionCard";

const FaqSection = () => {
  return (
    <section className="p-[100px] bg-[#E9EBE0] mt-16 max-w-[95%] rounded-3xl mx-auto">
      <h1 className="font-bold text-[32px]">Frequently asked questions</h1>
      <div className="mt-[55px]">
        {faqQuestionsData &&
          faqQuestionsData.map((element, index) => (
            <QuestionCard
              questionData={element}
              key={`${element.question} + ${index}`}
            />
          ))}
      </div>
    </section>
  );
};

export default FaqSection;

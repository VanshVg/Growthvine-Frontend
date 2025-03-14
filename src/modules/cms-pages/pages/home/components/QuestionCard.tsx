import { ChevronDownIcon, ChevronRightIcon } from "@/assets/Svg";
import { IQuestionCardProps } from "../types";
import { useState } from "react";

const QuestionCard = (props: IQuestionCardProps) => {
  const { questionData } = props;

  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);

  return (
    <div className="mt-[20px]">
      <div className="flex justify-between">
        <p className="font-semibold text-[22px]">{questionData.question}</p>
        <div
          onClick={() => setIsAnswerOpen(!isAnswerOpen)}
          className="cursor-pointer"
        >
          {isAnswerOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </div>
      </div>
      {isAnswerOpen && (
        <div>
          <p className="text-justify mt-[10px]">{questionData.answer}</p>
          {questionData.additionalAnswer && (
            <ul className="list-disc ml-6 mt-2">
              {questionData.additionalAnswer.map((e, index) => (
                <li key={index} className="text-justify mt-[5px]">
                  {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="h-[1px] bg-black border-black mt-[10px]" />
    </div>
  );
};

export default QuestionCard;

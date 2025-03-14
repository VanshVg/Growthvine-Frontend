export interface IQuestionCardProps {
  questionData: IQuestionAnswers;
}

export interface IQuestionAnswers {
  question: string;
  answer: string;
  additionalAnswer?: string[];
  link?: string;
}

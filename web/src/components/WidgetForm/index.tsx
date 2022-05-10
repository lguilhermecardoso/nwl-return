import { useState } from "react";
import { CloseButton } from "../CloseButton";

// ASSETS
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccess";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    img: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    img: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    img: {
      source: thoughtImageUrl,
      alt: 'Balão de pensamento!',
    },
  },
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null >(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 realtive rounded-2xl mb-4 flex flex-col items-center sahdow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )}
        </>
      ) }
      <footer className="text-xs text-neutral-400">
        Feito com ❤ pelo  <a className="underline underline-offset-2" href="https://github.com/lguilhermecardoso" target={"_blank"}>Gui!</a>
      </footer>
    </div>
  );
}
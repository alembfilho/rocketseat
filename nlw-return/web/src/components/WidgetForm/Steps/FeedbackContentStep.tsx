import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentStepProps {
  setFeedbackType: (type: FeedbackType | null) => void
  feedbackType: FeedbackType
}

export function FeedbackContentStep({ feedbackType, setFeedbackType }: FeedbackContentStepProps) {
  const feedbackTypesInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault()
    console.log({
      screenshot,
      comment
    })
  }

  return (<>
    <header>
      <button className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        onClick={() => setFeedbackType(null)}
      >
        <ArrowLeft weight="bold" className="w-4 h-4" />
      </button>

      <span className="text-xl leading-6 flex gap-2">
        <img src={feedbackTypesInfo.image.source} alt={feedbackTypesInfo.image.source} className="w-6 h-6" />
        {feedbackTypesInfo.title}
      </span>

      <CloseButton />
    </header>

    <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea
        className="min-w[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700"
        placeholder="Conte com detalhes o que está acontecendo..."
        onChange={e => setComment(e.target.value)}
      />

      <footer className="flex gap-2">
        <ScreenshotButton
          screenshot={screenshot}
          setScreenshot={setScreenshot}
        />

        <button
          disabled={comment.length == 0}
          type="submit"
          className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >Enviar Feedback</button>
      </footer>
    </form>
  </>)
}
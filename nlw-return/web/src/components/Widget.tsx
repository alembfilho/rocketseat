import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
  return (
    <div className="absolute right-5 bottom-5">
      <button className="bg-brand-500 rounded-full h-12 px-3 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2 max-w-0">Feedback</span>
        </span>
      </button>
    </div>
  )
}
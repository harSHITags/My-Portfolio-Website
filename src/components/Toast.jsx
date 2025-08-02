import { CheckCircle, XCircle } from "lucide-react"

const Toast = ({ toast }) => {
  if (!toast.show) return null

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[1001] animate-slide-up">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-2xl backdrop-blur-xl border shadow-lg ${
          toast.type === "success"
            ? "bg-green-500/90 border-green-400/50 text-white"
            : "bg-red-500/90 border-red-400/50 text-white"
        }`}
      >
        {toast.type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
        <span className="font-medium">{toast.message}</span>
      </div>
    </div>
  )
}

export default Toast


export default function GradientText({ children }) {
  return (
    <span className="bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-transparent">
      {children}
    </span>
  )
}
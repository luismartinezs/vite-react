import HeroSection from '@/components/HeroSection'
import HeaderSection from './components/HeaderSection'
import LineSpacer from './components/LineSpacer'
import NoteSection from './components/NoteSection'

function App() {
  return (
    <div className="font-base text-gray-700">
      <HeaderSection />
      <HeroSection />
      <LineSpacer />
      <NoteSection />
      <LineSpacer />
    </div>
  )
}

export default App

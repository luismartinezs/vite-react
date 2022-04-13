import HeroSection from '@/components/HeroSection'
import HeaderSection from './components/HeaderSection'
import LineSpacer from './components/LineSpacer'
import NoteSection from './components/NoteSection'
import FeatureSection from './components/FeatureSection'

function App() {
  return (
    <div className="font-base text-gray-700 overflow-x-hidden">
      <HeaderSection />
      <HeroSection />
      <LineSpacer />
      <NoteSection />
      <LineSpacer />
      <FeatureSection />
    </div>
  )
}

export default App

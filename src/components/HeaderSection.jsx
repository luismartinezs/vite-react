import SiteLogo from '@/components/SiteLogo'
import LineSpacer from '@/components/LineSpacer'
import DarkModeSwitch from '@/components/DarkModeSwitch'

export default function HeaderSection() {
  return (
    <div className="sticky top-0">
      <header className="bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div>
            <SiteLogo />
          </div>
          <div>
            <DarkModeSwitch />
          </div>
        </div>
      </header>
      <LineSpacer />
    </div>
  )
}

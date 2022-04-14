import SiteLogo from '@/components/SiteLogo'
import LineSpacer from '@/components/LineSpacer'
import DarkModeSwitch from '@/components/DarkModeSwitch'

export default function HeaderSection({ headerHeight = 60, offsetTop = 0 }) {
  return (
    <div
      className="fixed left-0 right-0 bg-white"
      style={{ height: headerHeight, top: offsetTop }}
    >
      <header className="h-full w-full px-6 flex items-center">
        <div className="w-full max-w-6xl mx-auto flex justify-between">
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

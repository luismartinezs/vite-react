import { useState } from 'react'
import './ThemeSwitch.css'
// eslint-disable-next-line import/no-unresolved
import IconSun from '~icons/heroicons-outline/sun'
// eslint-disable-next-line import/no-unresolved
import IconMoon from '~icons/heroicons-outline/moon'

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      role="switch"
      aria-checked={!darkMode}
      className="switch"
      aria-label="toggle theme"
    >
      <span aria-hidden="true">{darkMode ? <IconMoon /> : <IconSun />}</span>
    </button>
  )
}

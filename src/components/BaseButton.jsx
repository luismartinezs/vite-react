export default function BaseButton({
  children,
  btnStyle = 'primary',
  type = 'button',
}) {
  const getButtonClasses = () => {
    const base =
      'font-semibold px-4 py-2 rounded-lg flex items-center transition ease-in-out duration-300'
    switch (btnStyle) {
      case 'primary':
        return `${base} bg-primary-500 hover:bg-primary-600 text-white`
      default:
        return ''
    }
  }

  if (type === 'link') {
    return (
      <a className={getButtonClasses()} href="/">
        {children}
      </a>
    )
  }
  return (
    <button className={getButtonClasses()} type="button">
      {children}
    </button>
  )
}

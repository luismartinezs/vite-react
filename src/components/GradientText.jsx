import PropTypes from 'prop-types'

export default function GradientText({ children }) {
  return (
    <span className="-mx-2 px-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
      {children}
    </span>
  )
}

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
}

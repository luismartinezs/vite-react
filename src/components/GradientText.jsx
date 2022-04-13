import PropTypes from 'prop-types'

export default function GradientText({ children }) {
  return (
    <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent px-px">
      {children}
    </span>
  )
}

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
}

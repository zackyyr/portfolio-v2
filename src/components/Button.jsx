import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  const content = (
    <>
      <span>{label}</span>
      {icon && (
        <i
          className={`${icon} ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2`}
          aria-hidden="true"
          style={{ color: 'inherit' }}
        ></i>
      )}
    </>
  )

  const baseClasses =
    `inline-flex items-center justify-center px-6 py-3 rounded-lg font-normal text-white
     border border-[0.5px] border-gradient-custom bg-transparent
     transition-colors duration-300 group`

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${classes}`}
      style={{
        // CSS untuk gradient border via background-clip trick
        borderImageSlice: 1,
        borderImageSource:
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(200,200,200,0.5) 100%)',
      }}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      className={`${baseClasses} ${classes}`}
      style={{
        borderImageSlice: 1,
        borderImageSource:
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(200,200,200,0.5) 100%)',
      }}
    >
      {content}
    </button>
  )
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
}

export { ButtonPrimary }

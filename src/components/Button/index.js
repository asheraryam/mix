import React from 'react';
import PropTypes from 'prop-types'
import { ButtonElement } from './index.style'


const Button = ({children, onClick}) => {
  return (
    <ButtonElement onClick={onClick} type="button">{children}</ButtonElement>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export { Button }
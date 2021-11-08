import React from 'react'
import PropTypes from 'prop-types';

// cuando se va a retornar una sola cosa
export const Error = ({message}) => (
    <p className='alert alert-danger error'>{message}</p>
)

Error.propTypes = {
    message: PropTypes.string.isRequired
}
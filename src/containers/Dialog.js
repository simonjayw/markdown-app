import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dialog/Dialog.css';

const Dialog = ({ type, isShow, text }) => {
    const templete = isShow ?
        (
            <div className={`dialog dialog-${type}`}>
                {text}
            </div>
        ) : '';

    return templete;
}

Dialog.propTypes = {
    type: PropTypes.string.isRequired,
    isShow: PropTypes.bool.isRequired,
    text: PropTypes.string
};

export default Dialog;

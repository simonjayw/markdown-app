import React from 'react';
import PropTypes from 'prop-types';

import '../styles/preview/markdown.css';
import '../styles/preview/highlight.css';
import '../styles/preview/Preview.css';

const Preview = ({ previewHtml, isFullScreen }) => {
    const createMarkup = () => ({ __html: previewHtml });
    return (
        <div
            className='preview markdown-body'
            style={{
                width: isFullScreen ? '100%' : '50%',
                zIndex: isFullScreen ? 99 : 1,
            }}
            dangerouslySetInnerHTML={createMarkup()}
        />
    );
}

Preview.propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    previewHtml: PropTypes.string.isRequired
}

export default Preview;

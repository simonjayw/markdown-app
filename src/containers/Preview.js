import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js';

import '../styles/preview/markdown.css';
import '../styles/preview/highlight.css';
import '../styles/preview/Preview.css';

class Preview extends React.Component {

    render() {
        const previewHtml = marked(
            this.props.editorValue,
            {
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                }
            }
            // ,
            // function (param, content) {
            //     return content;
            // }
        );
        const createMarkup = () => ({ __html: previewHtml });
        const { isFullScreen } = this.props;
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
}

Preview.propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    editorValue: PropTypes.string.isRequired
}

export default Preview;

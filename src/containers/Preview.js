import React from 'react';
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
        function createMarkup() {
            return { __html: previewHtml };
        }
        return (
            <div className='preview markdown-body' dangerouslySetInnerHTML={createMarkup()} />
        );
    }
}

export default Preview;

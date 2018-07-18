import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditorContent from '../components/EditorContent';
import '../styles/editor/Editor.css';

class Editor extends Component {
    handleEditorFullScreen() {
        this.props.handleEditorFullScreen();
    }

    handlePreviewFullScreen() {
        this.props.handlePreviewFullScreen();
    }

    selectThemes(theme) {
        this.props.changeTheme(theme);
    }

    changeEditorValue = (editorValue) => {
        this.props.getEditorValue(editorValue);
    }

    render() {
        const { isFullScreen, theme, editorValue } = this.props;
        return (
            <div
                className='editor-wrap'
                style={{
                    width: isFullScreen ? '100%' : '50%',
                    zIndex: isFullScreen ? 99 : 1,
                }}
            >
                <EditorContent
                    theme={theme}
                    isFullScreen={isFullScreen}
                    editorValue={editorValue}
                    changeEditorValue={this.changeEditorValue}
                />
            </div>
        );
    }
}

Editor.propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired,
    editorValue: PropTypes.string.isRequired,
    getEditorValue: PropTypes.func.isRequired
}

export default Editor;

import React from 'react';
import PropTypes from 'prop-types';

import EditorToolBar from '../components/EditorToolBar';
import EditorContent from '../components/EditorContent';
import '../styles/editor/Editor.css';

class Editor extends React.Component {
    handleFullScreen() {
        this.props.changeFullscreen();
    }

    selectThemes(theme) {
        this.props.changeTheme(theme);
    }

    changeEditorValue(editorValue) {
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
                <EditorToolBar
                    isFullScreen={isFullScreen}
                    handleFullScreen={this.handleFullScreen.bind(this)}
                    selectThemes={this.selectThemes.bind(this)}
                />
                <EditorContent
                    theme={theme}
                    isFullScreen={isFullScreen}
                    editorValue={editorValue}
                    changeEditorValue={this.changeEditorValue.bind(this)}
                />
            </div>
        );
    }
}

Editor.propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired,
    editorValue: PropTypes.string.isRequired
}

export default Editor;

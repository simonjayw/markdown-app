import React from 'react';
import { connect } from 'react-redux';
import * as dialogActions from '../redux/actions/dialog';
import * as editorActions from '../redux/actions/editor';
import * as previewActions from '../redux/actions/preview';
import * as toolbarActions from '../redux/actions/toolbar';

import Editor from './Editor';
import Preview from './Preview';
import Dialog from './Dialog';
import ToolBar from './ToolBar';
import '../styles/App.css';

class App extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 's') {
                this.saveEditor();
                e.preventDefault();
            }
        })
    }

    saveEditor() {
        const { editor, showDialogTip } = this.props;
        localStorage.setItem('markdown_editor_value', editor.editorValue);
        showDialogTip(true, '保存成功');
    }

    render() {
        const {
            dialog,
            editor,
            preview,
            toolbar,
            changeEditorFullscreen,
            changePreviewFullscreen,
            changeTheme,
            getEditorValue
        } = this.props;

        return (
            <div className='app'>
                <Editor
                    isFullScreen={toolbar.isEditorFullScreen}
                    theme={toolbar.theme}
                    editorValue={editor.editorValue}
                    getEditorValue={(editorValue) => { getEditorValue(editorValue) }}
                />
                <Preview
                    editorValue={editor.editorValue}
                    isFullScreen={toolbar.isPreviewFullScreen}
                />
                <ToolBar
                    selectThemes={(theme) => { changeTheme(theme) }}
                    isPreviewFullScreen={toolbar.isPreviewFullScreen}
                    handlePreviewFullScreen={() => { changePreviewFullscreen() }}
                    isEditorFullScreen={toolbar.isEditorFullScreen}
                    handleEditorFullScreen={() => { changeEditorFullscreen() }}
                />
                <Dialog
                    type={dialog.type}
                    isShow={dialog.isShow}
                    text={dialog.text}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(
    mapStateToProps,
    {
        ...dialogActions,
        ...editorActions,
        ...previewActions,
        ...toolbarActions
    }
)(App);

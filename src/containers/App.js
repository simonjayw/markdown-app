import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';

import * as dialogActions from '../redux/actions/dialog';
import * as editorActions from '../redux/actions/editor';
import * as previewActions from '../redux/actions/preview';
import * as toolbarActions from '../redux/actions/toolbar';

import Editor from './Editor';
import Preview from './Preview';
import Dialog from './Dialog';
import ToolBar from './ToolBar';
import '../styles/App.css';


let previewHtml = '';

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

    exportHtml() {
        // const { editor } = this.props;
        // fetch('//127.0.0.1:3001/exportHtml', {
        //     method: 'POST',
        //     body: {
        //         previewHtml: previewHtml
        //     }
        // }).
        // then((res) => {
        //     console.log(res)
        // })
        console.log('导出')
    }

    render() {
        previewHtml = marked(
            this.props.editor.editorValue,
            {
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                }
            }
        );

        const {
            dialog,
            editor,
            // preview,
            toolbar,
            changeEditorFullscreen,
            changePreviewFullscreen,
            changeTheme,
            getEditorValue,
            changePreviewHtml,
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
                    previewHtml={previewHtml}
                    isFullScreen={toolbar.isPreviewFullScreen}
                />
                <ToolBar
                    selectThemes={(theme) => { changeTheme(theme) }}
                    handleExport={this.exportHtml.bind(this)}
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

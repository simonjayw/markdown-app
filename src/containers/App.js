import React from 'react';
import { connect } from 'react-redux';
import * as dialog from '../redux/actions/dialog';
import * as editor from '../redux/actions/editor';

import Editor from './Editor';
import Preview from './Preview';
import Dialog from './Dialog';
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
        const { showDialogTip, editor } = this.props;
        localStorage.setItem('markdown_editor_value', editor.editorValue);
        showDialogTip(true, '保存成功');
    }

    render() {
        const { dialog, editor } = this.props;
        return (
            <div className='app'>
                <Editor
                    isFullScreen={editor.isFullScreen}
                    theme={editor.theme}
                    editorValue={editor.editorValue}
                    changeFullscreen={() => { this.props.changeFullscreen() }}
                    changeTheme={(theme) => { this.props.changeTheme(theme) }}
                    getEditorValue={(editorValue) => { this.props.getEditorValue(editorValue) }}
                />
                <Preview
                    editorValue={editor.editorValue}
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
};

export default connect(mapStateToProps, { ...dialog, ...editor })(App);

import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from '../../node_modules/_codemirror@5.31.0@codemirror/lib/codemirror';
import './EditorContentImport';
import '../styles/editor/EditorContent.css';

let timmer = null;
const timeout = function (callback, time) {
    if (timmer) {
        return;
    }
    timmer = setTimeout(() => {
        callback && callback();
        timmer = null;
    }, time || 300);
}

class EditorContent extends React.Component {
    // 挂载发生后
    componentDidMount() {
        this.editorInstance = CodeMirror.fromTextArea(this.editArea, {
            theme: this.props.theme,
            mode: 'markdown',
            lineNumbers: true,
            lineWrapping: true, // 换行
            styleActiveLine: true, // 活动行样式
            matchBrackets: true, // 匹配括号
            autoCloseBrackets: true, // 自动关闭方括号
            showCursorWhenSelecting: true, // 选择时显示光标
            tabSize: 4,
            foldGutter: true,
            scrollbarStyle: 'simple', // 滚动条
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            // extraKeys: {
            //     'F11': function(cm) {
            //         cm.setOption('fullScreen', !cm.getOption('fullScreen'));
            //     },
            //     'Esc': function(cm) {
            //         if (cm.getOption('fullScreen')) {
            //             cm.setOption('fullScreen', false)
            //         };
            //     }
            // },
            keyMap: 'sublime',
        });

        this.editorInstance.on('changes', (instance, changeObj) => {
            timeout(() => {
                this.props.changeEditorValue(instance.getValue());
            });
        })
    }


    // 更新发生后
    componentDidUpdate() {
        this.editorInstance.setOption("theme", this.props.theme);
    }

    render() {
        return (
            <textarea
                ref={(textarea) => this.editArea = textarea}
                defaultValue={this.props.editorValue}
            ></textarea>
        )
    }
}

EditorContent.propTypes = {
    theme: PropTypes.string.isRequired,
    editorValue: PropTypes.string.isRequired
};

export default EditorContent;

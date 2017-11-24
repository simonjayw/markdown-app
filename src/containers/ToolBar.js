import React from 'react';
import PropTypes from 'prop-types';

import '../styles/editor/EditorToolBar.css';
import ToolThemeList from '../components/ToolThemeList';
import * as toolIcons from '../components/ToolBarIcon';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowThemes: false
        }
    }

    handleShowThemes() {
        this.setState({
            isShowThemes: !this.state.isShowThemes
        });
    }
    
    render() {
        return (
            <ul className='editorToolBar'>
                <li onClick={this.handleShowThemes.bind(this)}>
                    {toolIcons.theme}
                    {
                        this.state.isShowThemes ?
                        <ToolThemeList
                            selectThemes={this.props.selectThemes}
                        /> : ''
                    }
                </li>
                <li>
                    {toolIcons.exportHtml}
                </li>
                <li onClick={this.props.handlePreviewFullScreen}>
                    { this.props.isPreviewFullScreen ? toolIcons.arrowRight : toolIcons.arrowLeft }
                </li>
                <li onClick={this.props.handleEditorFullScreen}>
                    { this.props.isEditorFullScreen ? toolIcons.fullscreenExit : toolIcons.fullscreen }
                </li>
            </ul>
        )
    }
}

ToolBar.propTypes = {
    selectThemes: PropTypes.func.isRequired,
    isPreviewFullScreen: PropTypes.bool.isRequired,
    handlePreviewFullScreen: PropTypes.func.isRequired,
    isEditorFullScreen: PropTypes.bool.isRequired,
    handleEditorFullScreen: PropTypes.func.isRequired
};

export default ToolBar;

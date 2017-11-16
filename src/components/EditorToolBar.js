import React from 'react';
import PropTypes from 'prop-types';

import '../styles/editor/EditorToolBar.css';
import ThemeList from './EditorToolThemeList';
import { fullscreen, fullscreenExit, theme } from './EditorToolIcon';

class EditorToolBar extends React.Component {
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
                    {theme}
                    {
                        this.state.isShowThemes ?
                        <ThemeList
                            selectThemes={this.props.selectThemes}
                        /> : ''
                    }
                </li>
                <li onClick={this.props.handleFullScreen}>
                    { this.props.isFullScreen ? fullscreenExit : fullscreen }
                </li>
            </ul>
        )
    }
}

EditorToolBar.propTypes = {
    selectThemes: PropTypes.func.isRequired,
    isFullScreen: PropTypes.bool.isRequired
};

export default EditorToolBar;

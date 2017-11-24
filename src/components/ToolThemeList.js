import React from 'react';
import PropTypes from 'prop-types';

class ToolThemeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [
                'default',
                'base16-dark',
                'base16-light',
                'isotope',
                'mdn-like',
                'monokai',
                'panda-syntax',
                'tomorrow-night-bright'
            ]
        }
    }

    handleClick(e) {
        this.props.selectThemes(e.target.innerText)
    }
    
    render() {
        return (
            <ul className='themeList'>
                {
                    this.state.themes.map((theme, index) => 
                        <li
                            key={index}
                            onClick={this.handleClick.bind(this)}
                        >{theme}</li>
                    )
                }
            </ul>
        )
    }
}

ToolThemeList.propTypes = {
    selectThemes: PropTypes.func.isRequired
};

export default ToolThemeList;

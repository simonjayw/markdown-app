import { CHANGEFULLSCREEN, CHANGETHEME, EDITORVALUE } from '../actions/editor';

const initState = {
    isFullScreen: false,
    theme: localStorage.getItem('markdown_editor_theme') || 'default',
    editorValue: localStorage.getItem('markdown_editor_value') || ''
};

// `# A First Level Header

// **Bold** text in a normal-size paragraph.

// And a very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long, wrapped line with a piece of **big** text inside of it.

// ## A Second Level Header

// Now is the time for all good men to come to
// the aid of their country. This is just a
// regular paragraph.

// The quick brown fox jumped over the lazy
// dog's back.

// ### Header 3

// > This is a blockquote.
// > 
// > This is the second paragraph in the blockquote.
// >
// > ## This is an H2 in a blockquote`

export default function reducer(state=initState, action) {
    switch (action.type) {
        case CHANGEFULLSCREEN:
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        
        case CHANGETHEME:
            return {
                ...state,
                theme: action.theme
            };
        
        case EDITORVALUE:
            return {
                ...state,
                editorValue: action.editorValue
            };
        
        default:
            return state;
    }
}

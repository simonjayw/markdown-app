import { EDITORVALUE } from '../actions/editor';

const initState = {
    editorValue: localStorage.getItem('markdown_editor_value') || ''
};

export default function reducer(state=initState, action) {
    switch (action.type) {
        case EDITORVALUE:
            return {
                ...state,
                editorValue: action.editorValue
            };
        
        default:
            return state;
    }
}

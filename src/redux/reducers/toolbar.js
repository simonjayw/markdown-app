import {
    CHANGEEDITORFULLSCREEN,
    CHANGEPREVIEWFULLSCREEN,
    CHANGETHEME
} from '../actions/toolbar'

const initState = {
    isEditorFullScreen: false,
    isPreviewFullScreen: false,
    theme: localStorage.getItem('markdown_editor_theme') || 'default',
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case CHANGEEDITORFULLSCREEN:
            return {
                ...state,
                isEditorFullScreen: !state.isEditorFullScreen
            };
        case CHANGEPREVIEWFULLSCREEN:
            return {
                ...state,
                isPreviewFullScreen: !state.isPreviewFullScreen
            };
        case CHANGETHEME:
            return {
                ...state,
                theme: action.theme
            };

        default:
            return state;
    }
}

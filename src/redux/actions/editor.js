export const CHANGEFULLSCREEN = 'editor/CHANGEFULLSCREEN';
export const CHANGETHEME = 'editor/CHANGETHEME';
export const EDITORVALUE = 'editor/EDITORVALUE';

export const changeFullscreen = (isFullScreen) => ({
    type: CHANGEFULLSCREEN,
    isFullScreen
});

export const changeTheme = (theme) => (dispatch) => {
    localStorage.setItem('markdown_editor_theme', theme);
    dispatch({
        type: CHANGETHEME,
        theme
    });
};

export const getEditorValue = (editorValue) => ({
    type: EDITORVALUE,
    editorValue
});

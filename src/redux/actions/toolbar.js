export const CHANGEEDITORFULLSCREEN = 'toolbar/CHANGEEDITORFULLSCREEN';
export const CHANGEPREVIEWFULLSCREEN = 'toolbar/CHANGEPREVIEWFULLSCREEN';
export const CHANGETHEME = 'toolbar/CHANGETHEME';

export const changeEditorFullscreen = () => ({
    type: CHANGEEDITORFULLSCREEN
});

export const changePreviewFullscreen = () => ({
    type: CHANGEPREVIEWFULLSCREEN
});

export const changeTheme = (theme) => (dispatch) => {
    localStorage.setItem('markdown_editor_theme', theme);
    dispatch({
        type: CHANGETHEME,
        theme
    });
};

export const DIALOGTIP = 'dialog/DIALOGTIP';

const dialogTip = (isShow, text) => ({
    type: DIALOGTIP,
    isShow,
    text
});

export const showDialogTip = (isShow, text) => (dispatch, getState) => {
    const { dialog } = getState();
    if (dialog.isShow) {
        return;
    }
    dispatch(dialogTip(isShow, text));
    setTimeout(() => {
        dispatch(dialogTip(false, ''));
    }, 1500);
}

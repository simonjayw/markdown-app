import { combineReducers } from 'redux';
import editor from './reducers/editor';
import dialog from './reducers/dialog';
import preview from './reducers/preview';
import toolbar from './reducers/toolbar';

export default combineReducers({
    editor,
    dialog,
    preview,
    toolbar
})

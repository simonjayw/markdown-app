import { combineReducers } from 'redux';
import editor from './reducers/editor';
import dialog from './reducers/dialog';

export default combineReducers({
    editor,
    dialog
})

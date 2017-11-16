import { DIALOGTIP } from '../actions/dialog';

const initState = {
    type: 'tip',
    isShow: false,
    text: ''
};

export default function reducer(state=initState, action) {
    switch (action.type) {
        case DIALOGTIP:
            return {
                type: 'tip',
                isShow: action.isShow,
                text: action.text
            };
    
        default:
            return state;
    }
}

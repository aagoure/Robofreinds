import {CHANGE_SEARCH_FIELD} from './Constants'


const initialstate = {
	searchfield : ''
}

export const searchRobots = (state= initialstate, action= {}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchfield: action.payload});
			default: 
				return state;
	}
}
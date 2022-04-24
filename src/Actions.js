import {CHANGE_SEARCH_FIELD} from './Constants.js'


export const setSearchfield = (text) => ({
	type: 'CHANGE_SEARCH_FIELD',
	payload: text
})
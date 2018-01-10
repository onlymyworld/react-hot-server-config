import {combineReducers} from 'redux'
import Immutable from 'immutable'



let defaultValue=Immutable.fromJS({
     show:false
})

function getValue(state=defaultValue,action){
	if(action.type === 'CHANGE_VALUE'){
		return action.newValue
	}
	return state
}


export default combineReducers({getValue})
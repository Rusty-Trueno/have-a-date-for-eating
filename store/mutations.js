export default {
	selected(state,result){
		state.isSelected = result;
	},
	selectResult(state,result){
		state.seatArray = result.slice();
	}
}
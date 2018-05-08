import { fromJS } from 'immutable';

const initialState = fromJS({
  message: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      const { name, value } = action.payload;
      return state.set(name, value);
    // case 'ON_CHANGE_MERGE':
    //   const { name } = action.payload;
    //   return state.merge({ name });
    default:
      return state;
  }
}

export default reducer;

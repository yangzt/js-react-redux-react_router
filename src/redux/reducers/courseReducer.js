//state is init empty array here just to simplify the coding and will be over-written by the store file index.js(mainly) and configureStore.js later.
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //whatever returned from a reducer becomes the new state related to this reducer
      return [...state, { ...action.course }];
    //just in case some other action calls the reducer that it does not care about, it should return the unchanged state.
    default:
      return state;
  }
}

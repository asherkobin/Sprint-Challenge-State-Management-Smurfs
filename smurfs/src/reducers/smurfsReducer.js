const initialState = {
  smurfsInfo: null,
  isLoading: false,
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SMURFS_INFO_START":
      return { ...state, isLoading: true }
    case "GET_SMURFS_INFO_SUCCESS":
      return { ...state, isLoading: false, smurfsInfo: action.payload };
    case "ADD_SMURFS_INFO_START":
      return { ...state, isLoading: true }
    case "ADD_SMURF_INFO_SUCCESS":
        return { ...state, isLoading: false, smurfInfo: action.payload };
    default:
      return state;
  }
}
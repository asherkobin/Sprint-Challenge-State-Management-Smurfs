import Axios from "axios";

export const getSmurfsInfo = () => {
  return dispatch => {
    dispatch({ type: "GET_SMURFS_INFO_START" });
    Axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: "GET_SMURFS_INFO_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const addSmurfInfo = (smurfInfo) => {
  return dispatch => {
    dispatch({ type: "ADD_SMURF_INFO_START" });
    Axios
      .post("http://localhost:3333/smurfs", smurfInfo)
      .then(res => {
        dispatch({ type: "ADD_SMURF_INFO_SUCCESS" });
        dispatch({ type: "GET_SMURFS_INFO_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const removeSmurfById = (smurfId) => {
  return dispatch => {
    dispatch({ type: "REMOVE_SMURF_BYID_START" });
    Axios
      .delete("http://localhost:3333/smurfs/" + smurfId)
      .then(res => {
        dispatch({ type: "REMOVE_SMURF_BYID_SUCCESS" });
        dispatch({ type: "GET_SMURFS_INFO_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
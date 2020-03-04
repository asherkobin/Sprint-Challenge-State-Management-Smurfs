import React, { useEffect } from "react";
import { connect as connectToRedux } from "react-redux";
import "./App.css";
import { getSmurfsInfo, addSmurfInfo, removeSmurfById } from "../actions/smurfsActions";

const App = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
  
    props.addSmurfInfo({
      name: document.getElementById("smurfName").value,
      age: document.getElementById("smurfAge").value,
      height: document.getElementById("smurfHeight").value
    });
  }

  useEffect(() => {
    props.getSmurfsInfo();
  }, []); // run-once on load

  const smurfStyle = {
    border: "1px solid blue",
    padding: "10px",
    margin: "10px"
  };
  
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        props.smurfsInfo && props.smurfsInfo.map(smurfInfo => 
          <div key={smurfInfo.id} style={smurfStyle}>
            <div>Name: {smurfInfo.name}</div>
            <div>Age: {smurfInfo.age}</div>
            <div>Height: {smurfInfo.height}</div>
            <div><button onClick={() => props.removeSmurfById(smurfInfo.id)}>Euthanize</button></div>
          </div>)
      }
      </div>
      <hr />
      <form style={{ border: "1px solid blue", margin: "10px", padding: "10px", width: "200px" }}>
        <div>
          <label htmlFor="smurfName">Name: </label>
          <input type="text" id="smurfName" />
        </div>
        <div>
          <label htmlFor="smurfName">Age: </label>
          <input type="text" id="smurfAge" />
        </div>
        <div>
          <label htmlFor="smurfName">Height: </label>
          <input type="text" id="smurfHeight" />
        </div>
        <button onClick={handleSubmit}>Add Smurf</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfsInfo: state.smurfsInfo,
    isLoading: state.isLoading,
  }
}

export default connectToRedux(mapStateToProps, { getSmurfsInfo, addSmurfInfo, removeSmurfById })(App);

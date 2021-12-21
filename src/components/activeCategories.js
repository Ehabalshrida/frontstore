import React from "react";
import { connect } from "react-redux";

const ActiveCategory = (props) => {
  console.log(props.ActiveCategory);
  return (
  <div style={{margin:"0 auto" ,width:"960px"}}>
  <h1>{props.ActiveCategory.normalizedName}</h1>
  <h3>{props.ActiveCategory.description}</h3>
 
  </div>
  )
};

const mapStateToProps = (state) => ({
  ActiveCategory:state.ReduceCategory.activeCategory
});

export default connect(mapStateToProps)(ActiveCategory);
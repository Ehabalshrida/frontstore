import React from "react";
import { connect } from "react-redux";

const ActiveCategory = (props) => {
  return <h1>{props.ActiveCategory}</h1>;
};

const mapStateToProps = (state) => ({
  ActiveCategory:state.categoriesReducer.active
});

export default connect(mapStateToProps)(ActiveCategory);
import React from "react";
import { connect } from "react-redux";
import "../../style/current-category.scss"
const ActiveCategory = (props) => {
  return <h1>{props.ActiveCategory}</h1>;
};

const mapStateToProps = (state) => ({
  ActiveCategory: state.categories.activeCategory,
});


export default connect(mapStateToProps)(ActiveCategory);

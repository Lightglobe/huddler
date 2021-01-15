import { Button } from "grommet";
import React, { Component } from "react";
import { connect } from "react-redux";
import { increamentCounter, decreamentCounter } from "./testActions";
import { openModal } from "../modals/modalActions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  data: state.test.data,
  modal: state.modal,
});

const actions = {
  increamentCounter,
  decreamentCounter,
  openModal,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, actions), dispatch);
};

class TestComponent extends Component {
  render() {
    const {
      data,
      increamentCounter,
      decreamentCounter,
      openModal,
    } = this.props;
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>Test component</h1>
        <h3>The answer is {data}</h3>
        <Button primary label="+1" onClick={increamentCounter} />

        <Button primary onClick={decreamentCounter} label="-1" />
        <Button
          label="open modal"
          onClick={() => openModal("MapModal", { center: [34, 35] })}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

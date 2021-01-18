import { Button } from "grommet";
import { Spinning } from "grommet-controls";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increamentCounter,
  decreamentCounter,
  increamentAsync,
  decreamentAsync,
} from "./testActions";
import { openModal } from "../modals/modalActions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  data: state.test.data,
  modal: state.modal,
  loading: state.async.loading,
  buttonName: state.async.elementName,
});

const actions = {
  increamentCounter,
  decreamentCounter,
  increamentAsync,
  decreamentAsync,
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
      increamentAsync,
      decreamentAsync,
      loading,
      openModal,
      buttonName,
    } = this.props;
    console.log(buttonName);
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>Test component</h1>
        <h3>The answer is {data}</h3>
        <Button
          primary
          color="brand"
          name="increament"
          label={
            loading ? (
              buttonName === "increament" ? (
                <Spinning kind="chasing-dots" />
              ) : (
                "+1"
              )
            ) : (
              "+1"
            )
          }
          onClick={(e) => increamentAsync(e.target.name)}
        />

        <Button
          primary
          name="decreament"
          onClick={(e) => decreamentAsync(e.target.name)}
          label={
            loading ? (
              buttonName === "decreament" ? (
                <Spinning kind="chasing-dots" />
              ) : (
                "-1"
              )
            ) : (
              "-1"
            )
          }
        />
        <Button
          label="open modal"
          onClick={() => openModal("MapModal", { center: [34, 35] })}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

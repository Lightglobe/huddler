import { Button } from "grommet";
import React, { Component } from "react";
import { connect } from "react-redux";
import { increamentCounter, decreamentCounter } from "./testActions";

const mapStateToProps = (state) => ({
  data: state.test.data,
});

const mapDispatchToProps = {
  increamentCounter,
  decreamentCounter,
};

class TestComponent extends Component {
  render() {
    const { data, increamentCounter, decreamentCounter } = this.props;
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>Test component</h1>
        <h3>The answer is {data}</h3>
        <Button primary label="+1" onClick={increamentCounter} />

        <Button primary onClick={decreamentCounter} label="-1" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

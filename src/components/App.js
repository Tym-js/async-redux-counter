import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from "../actions";
import { Grid, Card, Header, Button } from "semantic-ui-react";

const App = ({
  value,
  increment,
  decrement,
  incrementAsync,
  decrementAsync
}) => {
  return (
    <Grid textAlign="center" verticalAlign="middle" className="App">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Card centered>
          <Card.Content>
            <Header as="h2">Counter : {value}</Header>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" onClick={increment}>
              +1
            </Button>
            <Button color="blue" onClick={decrement}>
              -1
            </Button>
          </Card.Content>
          <Card.Content extra>
            <Button size="mini" basic color="red" onClick={incrementAsync}>
              ゆっくり+1
            </Button>
            <Button size="mini" basic color="blue" onClick={decrementAsync}>
              ゆっくり-1
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    value: state.count.value
  };
};
const mapDispatcToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementAsync: () => dispatch(incrementAsync()),
    decrementAsync: () => dispatch(decrementAsync())
  };
};

App.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatcToProps
)(App);

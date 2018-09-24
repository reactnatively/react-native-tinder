import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles';
import { login } from '../redux/actions';

import {
  Text,
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {
    this.props.dispatch(login("what's appp"))
  }

  render() {
    return (
     <View>
      <Text>{this.props.user}</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);

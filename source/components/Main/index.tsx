import { SocialIcon } from 'react-native-elements';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';
import About from '../About';
import Progress from '../Progress';
import { Actions } from 'react-native-router-flux';

interface IState {
    userName: string;
    amountClicks: number;
}

export default class Main extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: 'Who?',
      amountClicks: 0,
    };
  }
  componentDidMount() {
    Actions.push('login');
  }
  onTextChange(newText: string) {
    this.setState({
      userName: newText,
      amountClicks: this.state.amountClicks + 1,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='who are thee'
          onChangeText={text => this.onTextChange(text)}
        />
        <Text>{this.state.userName}</Text>

        <SocialIcon
          style={{ width: 225 }}
          title='Sign In With Facebook'
          button
          type='facebook'
        />
        <About aboutText='We are a happy people' />
        <Image
          style={{ width: 200, height: 200 }}
          source={require('../../../2-Hot-Home-icon.png')}
        />

        <Progress amount={this.state.amountClicks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

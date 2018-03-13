import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as types from '../../../Types';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FacebookLogin } from '../actions';
import { SocialIcon } from 'react-native-elements';

export class Login extends React.Component<types.IProps, {}> {

    /**
     * Wraps {@link FacebookActions.FacebookLogin}
     * @type {function}
     * @private
     */
    facebookLogin = async () => {
        await this.props.FacebookLogin();
        if (this.props.login.isLoggedIn) {
          Actions.pop();
        }
      }

    render() {
        return (
                <View style={{padding: 10, flex: 1}}>
                    <Text>Login</Text>
                    <SocialIcon
                        // style = {{width: 300, height: 100}}
                        title='Sign In With Facebook'
                        button
                        // onPress={this.facebookLogin}
                        type='facebook'
                        />
                    <TextInput
                        style={{width: 200}}
                        placeholder='Username'
                        autoFocus
                        keyboardType='email-address' />
                    <TextInput
                        style={{width: 200}}
                        placeholder='Password'
                        secureTextEntry
                        onChangeText={(name) => this.onTextChanged(name)} />
                </View>
        );
    }

    onTextChanged = (text: string) => {
        this.userName = text;
        // this.props.FacebookLogin global stuff
        if (text && text.length > 5) { Actions.pop(); }
    }

    userName: string = 'unknown';
}

const mapStateToProps = (state: types.IApplicationState) => ({
    // route: state.route,
    login: state.login,
  });

const mapDispatchToProps = (dispatch: Dispatch<types.IProps>) => ({
dispatch,
FacebookLogin: bindActionCreators(FacebookLogin, dispatch),
});

  export default connect<types.IApplicationState, types.IProps>(
    mapStateToProps,
    mapDispatchToProps)
    (Login);

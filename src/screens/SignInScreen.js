import React, { useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'
import { Context } from '../context/AuthContext'

const SignInScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context)

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign in To your ACcount"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
                />
            <NavLink 
                text="dont have an account? Sign up instead"
                routeName="Signup"
                />
        </View>
    )
};

SignInScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150,
    }
});

export default SignInScreen
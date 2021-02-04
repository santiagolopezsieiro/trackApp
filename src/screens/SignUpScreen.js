import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation'

const SignUpScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)


    return ( 
    <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
        />
        <AuthForm 
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({ email, password }) => signup({ email, password })}
        />
        <NavLink 
            text="al ready have an account? sign in instead"
            routeName="Signin"
        />
    </View>
    )
};

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150,
    },
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    
});

export default SignUpScreen
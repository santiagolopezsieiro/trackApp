import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import  Spacer  from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'

const SignUpScreen = ({navigation}) => {
    const { state, singup } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    console.log(state)

    return ( 
    <View style={styles.container}>
        <Spacer>
            <Text h3>Sing Up for Trackers</Text>
        </Spacer>
        <Input 
            label="Email"
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        <Spacer>
            <Button title="Sign Up" onPress={() => singup({email, password})}/>
        </Spacer>   
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text>Already have an Account? Sign in</Text>
        </TouchableOpacity>
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
    }
});

export default SignUpScreen
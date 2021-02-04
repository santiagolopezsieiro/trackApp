import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMesagge: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_mesagge':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        navigate('TrackList')
    } else {
        navigate('Signup')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_mesagge' })
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem( 'token', response.data.token );
            dispatch({ type: 'signin', payload: response.data.token });
            
            navigate('TrackList')
        } catch (err) {
            dispatch({ 
                type: 'add_error', 
                payload: 'something went wrong with sign UP' 
            });
        }
    };
};

const signin = dispatch => async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('TrackList')
        } catch (err){
            dispatch({
                type: 'add_error', 
                payload:'something went wrong with sign IN'
            });
        }
    };


const signuot = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({
        type: 'signot'
    });
    navigate('loginFlow')
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signuot, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);

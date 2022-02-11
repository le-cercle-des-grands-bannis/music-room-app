import {StackNavigationProp} from '@react-navigation/stack';

export type NavigatorParam = {
  SignUp: undefined;
  SignIn: undefined;
};

export type signInProps = StackNavigationProp<NavigatorParam, 'SignIn'>;
export type signUpProps = StackNavigationProp<NavigatorParam, 'SignUp'>; // To remove when automatic redirection is UP

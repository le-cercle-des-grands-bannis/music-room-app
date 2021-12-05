import {StackNavigationProp} from '@react-navigation/stack';

export type NavigatorParam = {
  Splash: undefined;
  Auth: undefined;
};

export type authProp = StackNavigationProp<NavigatorParam, 'Auth'>;
export type splashProps = StackNavigationProp<NavigatorParam, 'Splash'>; // To remove when automatic redirection is UP

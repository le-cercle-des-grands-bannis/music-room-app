import { StackNavigationProp } from '@react-navigation/stack';

export type NavigatorParam = {
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

export type signInProps = StackNavigationProp<NavigatorParam, 'SignIn'>;
export type signUpProps = StackNavigationProp<NavigatorParam, 'SignUp'>;
export type ForgotPasswordProps = StackNavigationProp<
  NavigatorParam,
  'ForgotPassword'
>;

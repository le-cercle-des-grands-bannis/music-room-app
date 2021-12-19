import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {authProps} from '../../navigation/NavigatorParam';
import {checkEmail, checkPasswordRegister} from '../../helpers/validators';
import {
  loginUserAction,
  registerUserAction,
  clearUserErrors,
} from '../../redux/reduxActions/auth';
import {viewSizes, fontSizes, colors} from '../../config/styles';
import Header from '../../components/Header';
import AlertHandler from '../../components/AlertHandler';
import {triggerAlert} from '../../helpers/triggerAlert';

const Auth: React.FC = () => {
  const navigation = useNavigation<authProps>();

  const dispatch = useDispatch();

  const auth = useSelector((state: {auth: any}) => state.auth);
  const didMountRef = useRef<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [alertType, setAlertType] = useState<string>('');

  useEffect(() => {
    if (didMountRef.current && auth.error && auth.error?.message) {
      triggerAlert(
        () => {
          setIsError(true);
        },
        () => {
          setMessage(auth.error.message);
        },
        () => {
          setTimeout(() => {
            setIsError(false);
          }, 4000);
        },
        () => {
          setAlertType('error');
        },
      );
      didMountRef.current = false;
    }
  }, [auth]);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_confirmation, setPasswordConfirm] = useState<string>('');
  const [email_confirmation, setEmail_confirmation] = useState<string>(email);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<boolean>(true);

  const registerText = 'SignUP';
  const connectText = 'SignIn';

  const loginUser = async () => {
    const emailCheck = checkEmail(email);
    if (emailCheck.error) {
      triggerAlert(
        () => {
          setIsError(true);
        },
        () => {
          setMessage(emailCheck.message);
        },
        () => {
          setTimeout(() => {
            setIsError(false);
            // setAlertType('');
          }, 4000);
        },
        () => {
          setAlertType('error');
        },
      );

      // Alert.alert('', emailCheck.message);
      return null;
    } else if (!password) {
      // errorHandler(true, lang.formsErrors.passwordChk.empty);
      triggerAlert(
        () => {
          setIsError(true);
        },
        () => {
          setMessage('Please enter a password');
        },
        () => {
          setTimeout(() => {
            setIsError(false);
          }, 4000);
        },
        () => {
          setAlertType('error');
        },
      );

      return null;
    }
    await dispatch(
      loginUserAction(email, password, navigation, () => {
        didMountRef.current = true;
      }),
    );

    return null;
  };

  const registerUser = async () => {
    const emailCheck = checkEmail(email);
    const passCheck = checkPasswordRegister(password, password_confirmation);
    if (emailCheck.error) {
      // errorHandler(true, emailCheck.message);
      triggerAlert(
        () => {
          setIsError(true);
        },
        () => {
          setMessage(emailCheck.message);
        },
        () => {
          setTimeout(() => {
            setIsError(false);
          }, 4000);
        },
        () => {
          setAlertType('error');
        },
      );
      return null;
    } else if (passCheck.error) {
      // errorHandler(true, passCheck.message);
      triggerAlert(
        () => {
          setIsError(true);
        },
        () => {
          setMessage(passCheck.message);
        },
        () => {
          setTimeout(() => {
            setIsError(false);
          }, 4000);
        },
        () => {
          setAlertType('error');
        },
      );
      return null;
    }
    await dispatch(
      registerUserAction(
        {
          email,
          password,
          password_confirmation,
          email_confirmation,
          firstName,
          lastName,
          username,
        },
        navigation,
        () => {
          didMountRef.current = true;
        },
      ),
    );
    return null;
  };

  const bottom = isLogin ? '34%' : '22%';

  console.log(auth);
  return (
    <View style={styles.container}>
      <Header />
      {isError ? (
        <AlertHandler message={message} alertType={alertType} />
      ) : null}
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        style={{...styles.centerView, bottom}}>
        <View style={styles.topWrapper}>
          <TouchableOpacity
            onPress={async () => {
              await dispatch(clearUserErrors());
              setIsLogin(!isLogin);
              setIsSelected(!isSelected);
            }}
            style={styles.topButton}>
            <Text
              style={{
                color: colors.black,
                fontSize: fontSizes.large,
                fontWeight:
                  Platform.OS === 'ios' && isSelected ? 'bold' : 'normal',
              }}>
              {connectText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsLogin(!isLogin);
              setIsSelected(!isSelected);
            }}
            style={styles.topButton}>
            <Text
              style={{
                color: colors.black,
                fontSize: fontSizes.large,
                fontWeight:
                  Platform.OS === 'ios' && !isSelected ? 'bold' : 'normal',
              }}>
              {registerText}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={value => setEmail(value)}
            value={email}
            secureTextEntry={false}
            placeholder={'email *'}
            placeholderTextColor={colors.black}
            autoCapitalize="none"
            autoCorrect={false}
            editable={true}
            multiline={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={value => setPassword(value)}
            value={password}
            secureTextEntry={true}
            placeholder={'password *'}
            placeholderTextColor={colors.black}
            autoCapitalize="none"
            autoCorrect={false}
            editable={true}
            multiline={false}
          />
          {isLogin ? null : (
            <>
              <TextInput
                style={styles.input}
                onChangeText={value => setEmail_confirmation(value)}
                value={email_confirmation}
                secureTextEntry={false}
                placeholder={'confirm email'}
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                autoCorrect={false}
                editable={true}
                multiline={false}
              />
              <TextInput
                style={styles.input}
                onChangeText={value => setPasswordConfirm(value)}
                value={password_confirmation}
                secureTextEntry={true}
                placeholder={'confirm password'}
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                autoCorrect={false}
                editable={true}
                multiline={false}
              />
              <TextInput
                style={styles.input}
                onChangeText={value => setUsername(value)}
                value={username}
                secureTextEntry={false}
                placeholder={'username'}
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                autoCorrect={false}
                editable={true}
                multiline={false}
              />
              <TextInput
                style={styles.input}
                onChangeText={value => setFirstName(value)}
                value={firstName}
                secureTextEntry={false}
                placeholder={'first Name'}
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                autoCorrect={false}
                editable={true}
                multiline={false}
              />
              <TextInput
                style={styles.input}
                onChangeText={value => setLastName(value)}
                value={lastName}
                secureTextEntry={false}
                placeholder={'last name'}
                placeholderTextColor={colors.black}
                autoCapitalize="none"
                autoCorrect={false}
                editable={true}
                multiline={false}
              />
            </>
          )}
          {!isLogin ? null : (
            <TouchableOpacity
              // onPress={() => navigation.navigate('ResetPassword')}
              style={styles.forgetPasswordButton}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text
                style={{
                  fontSize: 20,
                  color: colors.black,
                }}>
                {'forgot password'}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={
              !isLogin
                ? {...styles.validateButton, marginTop: 20}
                : {...styles.validateButton, marginTop: 100}
            }
            onPress={async () => {
              if (isLogin) {
                // Login
                await loginUser();
              } else {
                // Register
                await registerUser();
              }
            }}>
            <Text style={styles.titleValidate}>
              {isLogin ? connectText : registerText}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: viewSizes.full,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
    height: viewSizes.full,
    backgroundColor: colors.yellow,
  },
  centerView: {
    shadowRadius: 6,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    width: '90%',
    maxHeight: '83%',
    position: 'relative',
    borderRadius: 6,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    top: 10,
    padding: 15,
    margin: 10,
  },
  topWrapper: {
    backgroundColor: '#F8F8F8',
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 90,
  },
  topButton: {
    marginHorizontal: 62,
    marginTop: 23,
    borderRadius: 4,
    marginBottom: 23,
  },
  orText: {
    color: colors.black,
    fontSize: fontSizes.medium,
    marginTop: 10,
    flex: 1,
  },
  connectText: {
    color: colors.black,
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginVertical: 12,
  },
  copyrightText: {
    color: colors.black,
    marginBottom: 16,
    fontSize: fontSizes.small,
  },
  inputWrapper: {
    marginTop: 40,
  },
  input: {
    color: colors.black,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 6,
    height: 60,
    padding: 10,
  },
  forgetPasswordButton: {
    marginTop: 0,
    height: 30,
    maxWidth: '75%',
  },
  validateButton: {
    justifyContent: 'center',
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#f7b500',
    shadowRadius: 6,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    height: 61,
  },
  titleValidate: {
    margin: 20,
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: colors.black,
  },
  termsWrapper: {
    marginTop: 30,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  termsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: colors.black,
  },
  errorStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'red',
  },
  requiredFieldsLabel: {
    textAlign: 'center',
    color: colors.black,
    marginBottom: 8,
  },
  contactButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 14,
    alignSelf: 'flex-end',
    marginBottom: 31,
    marginHorizontal: 62,
    marginTop: 23,
  },
  contactIcon: {
    width: 34,
    height: 32,
  },
});

export default Auth;

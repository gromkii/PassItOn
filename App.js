import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';

const store = configureStore();

Navigation.registerComponent("com.pass.Login", () => LoginScreen);
Navigation.registerComponent("com.pass.Home", () => HomeScreen);
Navigation.registerComponent("com.pass.Signup", () => SignupScreen );

Navigation.startSingleScreenApp({
  screen: {
    screen:"com.pass.Login",
    title:"Login"
  }
});
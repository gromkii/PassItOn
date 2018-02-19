import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const store = configureStore();

Navigation.registerComponent("com.pass.Login", () => LoginScreen);
Navigation.registerComponent("com.pass.Home", () => HomeScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen:"com.pass.Login",
    title:"Login"
  }
});
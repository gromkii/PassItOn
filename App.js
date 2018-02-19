import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';

Navigation.registerComponent("com.pass.Login", LoginScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen:"com.pass.Login",
    title:"Login"
  }
});
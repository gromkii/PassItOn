import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import NewNoteScreen from './src/screens/NewNoteScreen/NewNoteScreen';
import ViewNotesScreen from './src/screens/ViewNotesScreen/ViewNotesScreen';

const store = configureStore();

Navigation.registerComponent("com.pass.Login", () => LoginScreen);
Navigation.registerComponent("com.pass.Home", () => HomeScreen);
Navigation.registerComponent("com.pass.Signup", () => SignupScreen);
Navigation.registerComponent("com.pass.NewNote", () => NewNoteScreen);
Navigation.registerComponent("com.pass.ViewNotes", () => ViewNotesScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen:"com.pass.Login",
    title:"Login"
  }
});
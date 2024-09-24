import { createNativeStackNavigator,NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';


const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
  login: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="login"
        component={Login}
      />

      <Screen 
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}
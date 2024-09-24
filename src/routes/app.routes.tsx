import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Home } from "../screens/Home";
import { NewPublication } from "../screens/NewPublication";
import { Favorites } from "../screens/Favorites";
import { Profile } from "../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { PublicationUser } from "../screens/PublicationUser";

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

type AppRoutes = {
  favorites: undefined;
  home: undefined;
  profile: undefined;
  newPublication: undefined;
  publicationUser: undefined;
};

const iconSize = 24;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={iconSize} color={color} />
          ),
          tabBarLabel: "Início",
        }}
      />

      <Screen
        name="newPublication"
        component={NewPublication}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="star" size={iconSize} color={color} />
          ),
          tabBarLabel: "Favoritos",
        }}
      />

      <Screen
        name="publicationUser"
        component={PublicationUser}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={iconSize} color={color} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Navigator>
  );
}

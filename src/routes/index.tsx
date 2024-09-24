import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../contexts/AuthContext";

export function Routes() {
  const { isAuthenticated } = useAuth();


  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}

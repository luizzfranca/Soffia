import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ToastProvider>
    </AuthProvider>
  );
}

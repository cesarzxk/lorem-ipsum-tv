import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalProvider } from "./src/contexts/GlobalContext";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <GlobalProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </GlobalProvider>
  );
}

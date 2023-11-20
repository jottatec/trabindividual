import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackRoutes from "./Stack/StackRoutes";
export default function Routes() {
  

  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  );
}
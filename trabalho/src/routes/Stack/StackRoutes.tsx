import { createStackNavigator } from "@react-navigation/stack";
import Login from '../../pages/login';
import Cadastro from "../../pages/cadastro";

export default function StackRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="cadastrar" component={Cadastro} />
    </Stack.Navigator>
  );
}

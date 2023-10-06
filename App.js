import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

import LoadingScreen from './src/screens/LoadingScreen'
import HomeScreen from './src/screens/HomeScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Loading'
      >

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />

        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
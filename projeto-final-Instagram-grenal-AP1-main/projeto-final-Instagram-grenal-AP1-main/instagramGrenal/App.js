import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Gremio from './src/pages/Gremio';
import Inter from './src/pages/Inter';
import Login from './src/pages/Login';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Bem Vindo '
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Gremio" component={Gremio} />
        <Stack.Screen name="Inter" component={Inter} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
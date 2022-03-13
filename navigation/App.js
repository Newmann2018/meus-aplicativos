import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Bem Vindo ao App'
        }}
        />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        />
        <Stack.Screen 
        name = "Contato"
        component={Contato}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
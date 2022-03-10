import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import contato from "./src/pages/contato";

function Home(){
  return(
    <View>
      <Text> Home Screen</Text>
    </View>
  );
} 

function App(){
  return(
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Sobre" component={Sobre}/>
      <Stack.Screen name="contato" component={contato}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
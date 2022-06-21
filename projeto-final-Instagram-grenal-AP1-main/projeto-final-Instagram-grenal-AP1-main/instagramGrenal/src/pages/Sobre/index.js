import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

//import styles from './styleSobre.js';

export default function Sobre({navigation}) {
  return(
    <View style={{}}>
      <Text style={{fontSize: 16, color:'#FF1493'}}>Sobre o app</Text>
      <Image 
        source={require('../../../assets/favicon.png')}
        style={{ 
            width: 200, 
            height:200, 
            paddingTop:20 
        }}
        />
      <TextInput
            style={{ 
                height: 40, 
                borderColor: '#836FFF', 
                borderWidth: 1, 
                borderRadius: 5
            }}
       />
      <Button
        title = "Contato"
        onPress = { () =>
          navigation.navigate('Contato')}
          />
      <Button
        title = "Mudar Texto"
        onPress = { () =>
          navigation.setOptions({ title: 'About'})}
         />

    </View>
  );
}
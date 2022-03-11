import React from "react";
import {View,Text,image,TextInput} from "react-native";

import styleSobre from "./styleSobre.css";

export default function Sobre() {
    return(
        <View style ={styleSobre.container}>
            <image style={styleSobre.logo}>
                source={require('.../public/assets/image/logoinstagram.jpg')}
            </image>

            <TextInput
             style={styleSobre.imput}
             placeholder ="digite seu Email"
            />

             <TextInput
              style={styleSobre.imput}
              secureTextEntry={true}
              placeholder ="digite sua Senha"
            />

            <TouchableOpacity
            onPress = { () => navigation.navigate('contato')}
            style={styleSobre.button}>
                <Text style={styleHome.textButton}>Login</Text>
            </TouchableOpacity>

            <Text style={styleSobre.Text}>ou</Text>

            <TouchableOpacity
            onPress = { () => navigation.navigate('contato')}
            style={styleSobre.button}>
                <Text style={styleHome.textButton}>Login com facebook</Text>
            </TouchableOpacity>
        </View>
    )    
}
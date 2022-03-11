import React from "react";
import {
     View,
     Text,
     image,
     TextInput,
     TouchableOpacity 
} from "react-native";

import styleHome from "./styleHome.css"
export default function Home() {
    return(
        <View style={styleHome.container}>
            <image style={styleHome.logo}>
                source={require('.../public/assets/image/logo do facebook')};
            </image>

            <TextInput
            style={styleHome.imput}
                placeholder ="digite seu Email"
            />

            <TextInput
            style={styleHome.imput}
                secureTextEntry={true}
                placeholder ="digite sua senha"
            />

            <TouchableOpacity
            onPress = { () => navigation.navigate('Sobre')}
            style={styleHome.button}>
                <Text style={styleHome.textButton}>Login</Text>
            </TouchableOpacity>
        </View>
    );    
}
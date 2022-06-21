import React from "react";
import { View, Text, Button, Image, TextInput } from "react-native";

//import styles from './styleSobre.js';

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#D35207",
      }}
    >
      <Text style={{ fontSize: 20, color: "#000", marginBottom: 10 }}>
        InstagramGrenal
      </Text>
      <View style={{ width: 400, height: 400 }}>
        <Image
          style={{ width: 400, height: 400, borderRadius: 50, margin: 10 }}
          source={require("../../../assets/insta.jpeg")}
        />
      </View>
      <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between',alignItems:'center',}}>
        <TextInput
          placeholderTextColor={"#fff"}
          placeholder="Digite seu Email"
          style={{
            height: 40,
            borderColor: "#836FFF",
            borderWidth: 1,
            borderRadius: 5,
            textAlign: "center",
            backgroundColor: "blueviolet",
          }}
        />
        <TextInput
          placeholderTextColor={"#fff"}
          placeholder="Digite sua Senha"
          style={{
            height: 40,
            borderColor: "#836FFF",
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#236594",
            textAlign: "center",
          }}
        />
      </View>

      <Button
        color="#FF1493"
        title="Entrar"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

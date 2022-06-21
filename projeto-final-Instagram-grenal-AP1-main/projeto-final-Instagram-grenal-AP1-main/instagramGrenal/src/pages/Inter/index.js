import React from "react";
import { View, Text, Button, Image } from "react-native";

export default function Inter({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text style={{ fontSize: 30, color: "#FFF", textAlign:'center' }}> Inter</Text>
      <View style={{ width: 400, height: 400 }}>
        <Image
          style={{ width: 400, height: 400 }}
          source={require("../../../assets/beiraRio.jpg")}
        />
      </View>
      <View style={{margin:30}}>
        <Button
          title="voltar ao Início"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

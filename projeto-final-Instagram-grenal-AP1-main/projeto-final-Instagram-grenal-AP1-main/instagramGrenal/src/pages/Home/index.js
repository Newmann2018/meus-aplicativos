import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";

//import styles from './styleHome';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D1207F",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff", marginBottom: 10 }}>
        Bem Vindo !
      </Text>
      <View style={{ width: 400, height: 400 }}>
        <Image
          style={{ width: 400, height: 400, borderRadius: 50, margin: 10 }}
          source={require("../../../assets/insta.jpeg")}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          margin: 30,
        }}
      >
        <TouchableOpacity style={{ width: 100, height: 100, marginTop: 50 }}>
          <Button
            color="red"
            title="Inter"
            onPress={() => navigation.navigate("Inter")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, marginTop: 50,}}>
          <Button
            color="blue"
            title="Gremio"
            onPress={() => navigation.navigate("Gremio")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

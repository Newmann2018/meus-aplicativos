import { create } from "domain";
import { appendFile } from "fs";
import React, { Component } from "react";
import {View,text} from "react-native";

class exercicio1 extends Component{
  reader(){
    return(

      <View style = {style.conteiner}>
        <text style ={style.text}>
        minha tela
        </text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#548468",
  },
  text:{
    flex:1,
    fontSize:12,
    alignItems: 'center',
    justifyContent:"center",
    color:"#526866"
  }
})

export default app;

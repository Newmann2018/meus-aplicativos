import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native';
import styleContato from "./styleHome.css"

function contato({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden = {false} translucent={true} backgroundColor={'transparent'}/>
        <View style = {[styleContato.container]}>
          <View style = {[styleContato.containerOne]}></View>
          <View style = {[styles.containerTwo]}>
           <View style = {[styleContato.boxOne]}>
             <Text style = {[styleContato.textName]}>Your Name</Text>
           </View>
           <View style = {[styleCotato.boxTwo]}>
             <View style = {[styleContato.littleBox]}></View>
             <View style = {[styleCotato.littleBox]}></View>
           </View>
           <View style = {[styleContato.boxThree]}>
             <Text style = {[styleCotato.marginLeft]}>Your basic info 1</Text>
             <Text style = {[styleContato.marginLeft, styles.marginTop]}>Your basic info 2</Text>
           </View>
           <View style = {[styles.boxFour]}>
             <Text style = {[ styleContato.finalLineText]}>ABOUT</Text>
             <Text style = {[ styleContato.finalLineText]}>PHOTOS</Text>
             <Text style = {[ styleContato.finalLineText]}>FRIENDS</Text>
           </View>
          </View>
          <View style = {styleContato.containerThree}></View>
        </View>
      </SafeAreaView>
    );
}
    export default Contato;
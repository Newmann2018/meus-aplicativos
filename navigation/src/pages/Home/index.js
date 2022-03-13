import React from 'react';
import {SafeAreaView,
        View,
        Text,
        StyleSheet,
        TextInput,
        StatusBar,
        TouchableOpacity} from 'react-native';
 import styleHome from "./styleHome.css"
function Facebook({navigation}){
    return(
      <SafeAreaView style = {{flex:1}}>
        <StatusBar hidden />
        <View style = {[styleHome.container]}>
          <Text style = {[styleHome.title]} >facebook</Text>
          <TextInput
            style={[styleHome.input]}
            placeholder='     email or phone'
            clearButtonMode='always'/>
          <TextInput
            style={[styleHome.input]}
            placeholder='     password'
            secureTextEntry={true}
            clearButtonMode='always'/>
          <TouchableOpacity
            style={[styleHome.button]}
            onPress = { () =>
             navigation.navigate('Login')}>
           <Text style={[styleHome.textButton]}>Log in</Text>
          </TouchableOpacity>
          <Text style={[styles.finalText]}>sign up for facebook</Text>
        </View>
      </SafeAreaView>
    );
}
export default Facebook;
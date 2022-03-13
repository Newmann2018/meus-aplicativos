import React from 'react';
import{
TextInput,
StatusBar,
TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styleSobre from "./styleSobre.css"
function Sobre({navigation}){
return(
  
<SafeAreaView style = {{flex:1}}>
<StatusBar hidden />
<View style = {{flex:1}}>
  <LinearGradient
    colors={[ "#FF6347", "#E32636","#FF007F","#C71585", "#8B008B"]}
    style = {styleSobre.container}>
    <View style = {styleSobre.secondContainer}>
      <TouchableOpacity style = {[styleSobre.littleContainer, styleSobre.margin]}></TouchableOpacity>
      <TouchableOpacity style = {[styleSobre.littleContainer, styleSobre.margin]}></TouchableOpacity>
    </View>
    <TouchableOpacity style = {[styleSobre.littleContainer, styleSobre.marginTop]}></TouchableOpacity>
    <Text style= {[styleSobre.text, styleSobre.textButtonColor, styleSobre.marginTop, styles.textSize ]}>Enter the code sent to your number ending in 8691 or use your Backup Codes.</Text>
    <Text style= {[stylesobre.text, styleSobre.textButtonColor, styleSobre.marginTop]}>It many take few moments to receive SMS.</Text>
    <TextInput
       style={[styleSobre.input, styleSobre.marginTop]}
       placeholder='Enter Two-Factor code'
       placeholderTextColor={'#C0C0C0'}
       clearButtonMode='always'/>
    <Text style = {[styleSobre.textButtonColor, styleSobre.textPosition]}>What is it ?</Text>
    <TouchableOpacity
      style={[styleSobre.buttonOne, styleSobre.marginTop]}
      onPress = { () =>
       navigation.navigate('Facebook')} >
      <Text >Login with Instagram</Text>
    </TouchableOpacity>
    <Text style = {[styleSobre.textButtonColor, styleSobre.marginTop]}>Back to Login</Text>
    <View style = {[styleSobre.buttonNone]}>
      <Text style = {[styleSobre.textButtonColor]}>or</Text>
    </View>
    <TouchableOpacity
      style={[styleSobre.buttonTwo, styleSobre.marginTop]}
      onPress = { () =>
       navigation.navigate('Login')}>
      <Text style = {[styleSobre.textButtonColor]}>Repost without login</Text>
    </TouchableOpacity>
  </LinearGradient>
</View>
</SafeAreaView>
);
}
export default Sobre;
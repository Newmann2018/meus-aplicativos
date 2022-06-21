import React from 'react';
import { View, Text, Button, Image,} from 'react-native';


export default function Gremio({navigation}) {
  return(
    <View style = {{flex: 1, alignItems: 'center',justifyContent: 'center',backgroundColor:'blue'}}>
      <Text style={{fontSize: 30, color:'#fff', textAlign:'center'}}> Gremio </Text>
      <View style = {{width:400,height:400,}}>
     <Image style = {{width:400,height:400,}} source={require ('../../../assets/estadioG.jpeg')}/>
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
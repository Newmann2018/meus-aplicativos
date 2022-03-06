import React, {userState,useRef} from 'react';
import { 
  View,
  ScrollView,
  text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity ,
  Image 
}from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Carousel from 'react-native-snap-carousel';


const {width:screenWidht,height:screenheight} = Dimensions.get("window")

export default function exercicio() {
  const carouselRef= useRef(null);
  const [lista,setLista] = userState([
    {
      título : "O Justiceiro" ,
      text : "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro" ,
      lançamento : 2018 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    } ,
    {
      título : "Bad Boys para a vida" ,
      text : "ceiro episódio das histórias dos policiais Ter Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem ser presos os mais perigosos traficantes de drogas da cidade." ,
      lançamento : 2020 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    } ,
    {
      título : "Viúva Negra" ,
      text : "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar seu agente definitivo." ,
      lançamento : 2020 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    } ,
    {
      título : "Top Gun: MAVERICK" ,
      text : "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas." ,
      lançamento : 2020 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    } ,
    {
      título : "BloodShot" ,
      text : "Bloodshot é um ex-sex-sspecial: o deolded ea capacidade de se metamorfosear. " ,
      lançamento : 2020 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    } ,
    {
      título : "Cara Livre" ,
      text : "Uma caixa de banco realista presa a um entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um jogo de mundo aberto brutalmente." ,
      lançamento : 2020 ,
      img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    } ,
  ]);
  const [background,setBackgroud] = userState(lista[0].img);
  const [activeIndex,setActiveIndex] = userState(0);
  const _renderItem = ({item,index}) => {
    return(
      <View>
        <TouchableOpacity>
          <Image
            source={{uri:item.img}}
            style={styles.CarouselImg}
          />
          <text style={styles.CarouselText}>{item.title}</text>
          <Icon name='play-circle-outline' size={30} color="#fff" style={styles.CarouselIcon}/>
        </TouchableOpacity>
      </View>
    );
  };
 return (
   <ScrollView style = {StyleSheet.container}>
     <View style = {{flex:1, height:screenheight}}>
      <View style = {{...StyleSheet.absoluteFill,backgroundColor:'#000'}}>
        <ImageBackground 
          source={{uri:background}}
          style= {styles.imgBg}
          blurRadius= {8}>

            <View style = {styles.ViewSearch}>
            <TextInput style ={styles.imput}
            placeholder ="Procurando algo?" 
            />
            <TouchableOpacity style = {styles.Icons}>
              <Icon name='search'color ='#000'size={25}/>
            </TouchableOpacity>
            </View>

            <text style={{color:'#fff', fontSize: 25 ,fontWeight:'bold',marginLeft: 10, maginVertical:10,}}>
              Acabou de chegar
            </text>

            <view style={styles.slideView}>
              <Carousel
              style = {styles.Carousel}
              ref={carouselRef}
              data = {lista}
              renderItem = {_renderItem}
              sliderHeight={screenWidht}
              itemWidth = {200}
              inactiveSlideOpacity={0.5}
              onBeforeSnapToItem={(index)=>{
                setBackgroud(lista[index].Img);
                setActiveIndex(index);
              }}/>
            </view>
            <view style={styles.moreInfo}>
              <view style={{marginTop:10}}>
                <text style={styles.movieTitle}>{lista[activeIndex].title}</text>
                <text style={styles.movieDesc}>{lista[activeIndex].text}</text>
              </view>
              <Icon name='queue' color="#ff0000" size={30} style={{marginRight:15,marginTop:10,}} ></Icon>
            </view>

        </ImageBackground>
      </View>
     </View>
   </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imgBg:{
    flex:1,
    width:null,
    height:null,
    opacity:1,
    justifyContent:"flex-start",
    backgroundColor:"#000"
  },
  ViewSearch:{
    margintop: '20',
    backgroundColor:'#fff',
    elevation:10,
    borderRadius:5,
    marginVertical: 10,
    width:'95%',
    flexDirection:'row',
    alignSelf:'center',
  },
  input:{
    width:'90%',
    padding: 12,
    paddingLeft:20,
    fontSize:16,   
  },
  icon:{
    position: "absolute",
    right:20,
    top:15,
  },
  styleView:{
    width:'100%',
    height:350,
    justifyContent:"center",
    alignItems: 'center',
  },
  Carousel:{
    flex:1,
    overflow:'visible',
  },
  CarouselImg:{
    alignSelf:'center',
    width:200,
    height:300,
    borderRadius:12,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  CarouselText:{
    padding:15,
    color:'#fff',
    position:"absolute",
    Bottom:10,
    left:2,
    fontWeight:'bold',    
  },
  CarouselIcon:{
    position:'absolute',
    top:15,
    right:15,
  },
  moreInfo:{
    backgroundColor:"#ffff",
    width:screenWidht,
    height:screenheight,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  movieTitle:{
    paddingLeft:15,
    fontSize:22,
    fontWeight:'bold',
    color:'#000',
    marginBottom:5, 
  },
  movieDesc:{
   paddingLeft:15,
   color:'#000',
   fontSize:12,
   fontWeight:'bold',
  }
});



import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import Barcode from "../component/Barcode";
//import { Context } from "../contextv/DetailContext";
import Enroll_new from "./Enroll_new";
var check = 1;
var new_enroll = [1];

const Enroll_page = function ({ navigation }) {
 //var state_state = (Context._currentValue.state.Barcode);
 const item_show = navigation.getParam('data');
 console.log('??????');
 console.log(item_show)

 //console.log(state_state)
 useEffect(() => {
  new_enroll.length = 1;
 }, [])

 const fill_in = () => {

  if (check == 1) {
   return {
    opacity: 1
   }
  }
  else {
   return {
    opacity: 0
   }

  }



 }
 const goto_barcode = function () {
  //console.log('hey')
  navigation.navigate('Barcode')
 }
 return (

  <View style={{
   backgroundColor: '#F2F2F2',
   height: '100%'
  }}>

   <View style={{
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: '10%',
    marginTop: '5%',

    //eight: '35%'
   }}>
    <Text style={{
     fontFamily: "Aullia"
     , fontSize: 45,
     marginLeft: 20,
     marginTop: 9,
     color: 'black'
    }}>
     Anof
    </Text>
    <Text style={{
     fontSize: 16,
     alignSelf: "center",
     color: '#545252',
     position: 'absolute',
     top: 80,
     left: 30,
     fontFamily: "Sc"
    }}>상품 등록하기</Text>

   </View>
   <View style={{
    height: '40%',
    width: '100%',

   }}>

    <Enroll_new misu={() => goto_barcode()} hey={item_show}></Enroll_new>


   </View>
   <View style={{
    height: 20
   }}>

    {
     /*<Text style={fill_in()}>채워주세요</Text>*/
    }



   </View>


  </View>

 )
}
Enroll_page.navigationOptions = () => {
 return {
  header: () => false,
 };
};
const styles = StyleSheet.create({


 border: {

  backgroundColor: 'white',
  width: 80,
  height: 100,
  marginTop: 10,
  marginLeft: 30,




 },




})



export default Enroll_page
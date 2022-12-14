
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, ScrollView, Button, StyleSheet, Text } from "react-native"


import axios from "axios"
import { Ionicons } from '@expo/vector-icons';

//import { useSelector, useDispatch } from 'react-redux'


import Qna_Com from './Qna_Com';
const Qna = function ({ navigation, }) {
 // const token = useSelector((state) => state.token.token)
 const arr = navigation.getParam('item');
 console.log('QNA')
 console.log(arr);
 return (
  <View style={{
   backgroundColor: '#F2F2F2'
  }}>
   <View style={{
    backgroundColor: '#F2F2F2',
    height: 80,
    width: '100%'


    //eight: '35%'
   }}>
    <TouchableOpacity onPress={() => {


     navigation.pop();
    }}>
     <Ionicons style={{

      marginLeft: 15,
      marginTop: 20,
     }} name="arrow-back-circle" size={50} color="#545252" />

    </TouchableOpacity>

    <Text style={{
     fontSize: 20,
     alignSelf: "flex-start",
     //color: '#7C7C7C',
     marginTop: 40,
     marginLeft: 70,
     position: 'absolute',


     fontFamily: "Sc"
    }}>FAQ</Text>
   </View>
   <View style={{
    width: '100%',
    height: 1000,
    marginTop: 30,
    backgroundColor: "#F2F2F2"

   }}>
    <ScrollView
     contentContainerStyle={{ flexGrow: 1 }}
     showsVerticalScrollIndicator={false}

     // showsHorizontalScrollIndicator={false}
     pagingEnabled={true}>
     <View style={{
      width: '100%',
      height: 1300,

     }}>

      {arr.map((el, index) => {
       return <Qna_Com item={el} key={index
       }></Qna_Com>

      })}

     </View>
    </ScrollView>

   </View>
  </View>
 )


}


Qna.navigationOptions = () => {
 return {
  header: () => false,
 };
};


export default Qna;

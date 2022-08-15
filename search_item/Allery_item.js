

import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"




const Allery_item = function ({ show }) {
 console.log(show)
 return (

  <View style={{
   backgroundColor: 'white',
   marginRight: 10,
   width: 100,
   height: 100,
   borderRadius: 50,
   marginTop: 10,


  }}>
   <Image
    style={{
     height: 40,
     width: 40,
     marginTop: 20,
     marginLeft: 30,
     padding: 0,

     //       borderRadius: '50%',
    }}
    source={{ uri: show.image ? show.image : null }}
   //source={{ uri: image }}
   />

   <Text style={{
    fontFamily: 'Nam-Regular',
    fontSize: 13,
    textAlign: 'center',
    margin: 5,

   }}>
    {show.name}
   </Text>

  </View>



 )
}

export default Allery_item;

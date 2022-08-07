
import React, { Component, useContext, useEffect, useState } from "react";
import { View, Pressable, Image, Text, ScrollView, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
//import Animated from 'react-native-reanimated';
import Allery_item from "./Allery_item";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Ms from "../signup/Ms";
import { AntDesign } from '@expo/vector-icons';
const CONTENT = {};
import * as Speech from 'expo-speech';
//const googleTTS = require('google-tts-api');
//import Tts from 'react-native-tts';
const Search_item_seconde = ({ navigation }) => {
 //Tts.setDefaultLanguage('ko-KR');
 const token = useSelector((state) => state.token.token)
 var [data, setdata] = useState('');
 var [ingr, setingr] = useState([]);
 var [in_ar, setin_ar] = useState([]);

 const [MS_good, misu] = Ms();
 //var data = '';
 var name = navigation.getParam('name');
 var mapv = navigation.getParam('mapv');
 //const token = useSelector((state) => state.token.token)
 var ingr_arr = '';

 var id = navigation.getParam('id');
 console.log('아이디 체크')
 console.log(id);

 useEffect(() => {
  axios.get(`http://13.209.73.153:5000/product/detail/${id}`,
   {
    headers: {
     'X-AUTH-TOKEN': token

    }
   }
  ).then((response) => {
   if (response) {

    data = response.data
    // setcheck(response.data);
    console.log(data);
    setdata(data);
    setingr(data.rawMaterial.split(','));

    //setUser(response);
   } else {
    alert("failed to ");
   }
  }).catch((err) => {
   console.log(err.message);
   console.log(err)

   console.log('상세정보');
  });

  //var mapv = ['1', '2'];
  console.log('데이터')

 }, [])



 console.log('상세 정보 내역');
 console.log(ingr);



 data_goood = {
  tableHead: ['영양성분', '열량'],
  tableData: [
   ['칼로리', data.calorie],
   ['용량', data.capacity],
   ['탄수화물', data.carbohydrates],
   ['콜레스트롤', data.cholesterol],
   ['지방', data.fat],
   ['나트륨', data.natrium],
   ['단백질', data.protein],
   ['당', data.sugar],
   ['포하지방', data.saturated_fat],
   ['트랜스지방', data.trans_fat]
  ],
 };
 var speak = `칼로리 ${data.calorie}  용량 ${data.capacity} 
   탄수화물 ${data.carbohydrates} 콜레스트롤 ${data.cholesterol} 
   지방 ${data.fat}  나트륨 ${data.natrium} 단백질
  ${data.protein}  당 
  ${data.sugar} 포하지방  ${data.saturated_fat} 트랜스지방
  ${data.trans_fat}`


 console.log('원재료 ')
 console.log(ingr.length)
 var ff = [];


 const go_to_to = function () {
  // MS_good();
  if (ingr.length > 0) {

   for (var i = 0; i < ingr.length; i += 3) {
    var ff_Ar = [];

    ff_Ar.push(ingr[i], ingr[i + 1], ingr[i + 2]);
    ff.push(ff_Ar);

   }
   console.log('확인해보자')
   console.log(ff);
   setin_ar(ff)

  }




 }
 ingre = {

  tableData: in_ar
 }

 const [modalVisible, setModalVisible] = useState(false);
 var [num, setnum] = useState(0);

 console.log(name)
 const onpress = () => {

  setnum((pre) => pre + 1)
  if (num == 1) {


   /*
axios.get(`http://220.86.187.246:5000/auth/checkNickname/${id}`, {
 nickname: id
})
 .then((response) => {
   if (response) {
     console.log('?');
 
     console.log(response.data)
     bol_check = response.data
 
     //console.log(response.data);
     //setUser(response);
   } else {
     alert("failed to ");
   }
 }).catch((err) => {
   console.log(err.message);
   console.log(err)
   console.log('?');
 });
 
 
이게 선호 상품 보내는 axios인지 모르겠는데요 
*/
  }


 }

  ;
 const goto = function () {
  console.log('좋앙?');
  console.log(id, name, token)
  if (num == 2) {

   axios.get(`http://13.209.73.153:5000/likeproduct/${id}`,


    {
     headers: {
      'X-AUTH-TOKEN': token

     }
    }
   ).then((response) => {
    if (response) {
     console.log('선호 상품 등록');
     // console.log(response.data)
     // setcheck(response.data);

     //setUser(response);
    } else {
     alert("failed to ");
    }
   }).catch((err) => {
    console.log(err.message);
    console.log(err)

    console.log('에러 메세지/선호 식품');
   });

   // check_one(1, vale.name);   context 사용해서 여기에서 바꾸는 걸로 한다.
   // 이때 check 를 바꿔야 하니 매개별수를 같이 넣어서 .. = 이름+ 매개변수 




   setnum(0);
   return (

    '#D2D2D2'





   )
  }

  else if (num == 1) {

   axios.get(`http://13.209.73.153:5000/likeproduct/${id}`,


    {
     headers: {
      'X-AUTH-TOKEN': token

     }
    }
   ).then((response) => {
    if (response) {
     console.log('선호 상품 등록');
     // console.log(response.data)
     // setcheck(response.data);

     //setUser(response);
    } else {
     alert("failed to ");
    }
   }).catch((err) => {
    console.log(err.message);
    console.log(err)

    console.log('에러 메세지/선호 식품');
   });

   return (
    '#E44688'



   )
  }








  else if (num == 0) {
   //check_corrct(vale.name, 0);
   return (


    '#D2D2D2'




   )
  }
 }
 //const item_show = navigation.getParam('el');
 //var image = (item_show.src)

 return (
  <View style={{ backgroundColor: 'white' }}>
   <Modal
    propagateSwipe={true}
    //scrollTo={true}
    //animationType="slide"
    //scrollHorizontal={true}
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
     Alert.alert("Modal has been closed.");
     setModalVisible(!modalVisible);
    }}
   >


    <View style={styles.centeredView}>

     <View style={styles.modalView}>
      <View style={{
       flexDirection: 'row'
      }}>


       <Text style={styles.modalText}>상세정보</Text>
       <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
       >
        <Text style={styles.textStyle}>X</Text>
       </Pressable>
      </View>
      <View style={{
       flexDirection: 'row',
       display: 'flex-start',
       width: '60%',
       height: '10%',

       marginLeft: 10,
       marginBottom: 10,

      }}>


       <View style={{
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10
       }}>
        <TouchableOpacity>
         <AntDesign name="plus" style={{
          margin: 8
         }} size={24} color="black" />
        </TouchableOpacity>
       </View>

       <View style={{
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 10
       }}>
        <TouchableOpacity>
         <AntDesign name="minus" style={{
          margin: 8
         }} size={24} color="black" />
        </TouchableOpacity>
       </View>

      </View>
      <ScrollView>
       <View style={{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
       }}>




       </View>
       <View>
        <Text style={styles.modalTextv}>
         영양성분
        </Text>
        <TouchableOpacity onPress={() => {

         Tts.speak(speak, {
          rate: 0.8
         });


        }}>
         <View style={{
          width: 40,
          height: 40,
          backgroundColor: '#ffffff',
          borderRadius: 20, margin: 10
         }}>
          <MaterialIcons name="speaker" style={{
           margin: 8
          }} size={24} color="black" />
         </View>
        </TouchableOpacity>
        <View style={styles.container}>
         <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={data_goood.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={data_goood.tableData} textStyle={styles.text} />
         </Table>
        </View>

       </View>
       <View>
        <Text style={styles.modalTextv}>
         원재료
        </Text>
        <View style={styles.container_2}>
         <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>

          <Rows data={ingre.tableData} textStyle={styles.text} />
         </Table>
        </View>
       </View>
      </ScrollView>
     </View>

    </View>

   </Modal>
   <View style={{


    backgroundColor: 'white'
   }}>
    <View style={{
     width: '80%',
     height: 300,
     marginTop: 30,
     marginLeft: 40,
     borderRadius: 40,
     backgroundColor: '#DDEEF2'

    }}>

    </View>
    <View style={{
     margin: 10,
    }}>


     <Text style={

      {
       fontSize: 20,

       textAlign: 'center',
       fontFamily: "Nam-Regular",



      }
     }>
      {name}
      {/*item_show.kr*/}
     </Text>
    </View>
    <Text style={

     {
      fontSize: 30,
      textAlign: 'center',


     }
    }>
     {/*item_show.company*/}
    </Text>


    <View style={{
     flexDirection: 'row',
     justifyContent: 'flex-end',
     alignItems: 'flex-end',
     marginRight: 10,


    }}>
     <TouchableOpacity onPress={() => {



      onpress();


     }}>
      <Feather name="heart" size={30} color={
       goto()
      } style={{
       marginRight: 20,
      }} />

     </TouchableOpacity>


     <View style={{
      backgroundColor: 'pink'
     }}>

      <TouchableOpacity onPress={() => {
       go_to_to();




       setModalVisible(true)

      }}>
       <Text style={{
        fontSize: 18,
        textAlign: 'center'

       }}>상세정보</Text>

      </TouchableOpacity>
     </View>



    </View>


    <View style={{
     width: '100%',
     height: 190,
     backgroundColor: '#DDEEF2',
     marginTop: 45,

     flexDirection: 'row',

     // justifyContent: 'space-between',

     // justifyContent: 'flex-start',
     //flexWrap: 'wrap'
    }}>


     <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      // showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={{
       width: '100%',
       flex: 1,
       flexDirection: 'row',

      }}>
       {

        mapv.map((el, index) => {
         return <Allery_item key={index
         } show={el} ></Allery_item>
        })}

      </View>

     </ScrollView>




    </View>


   </View >
  </View >
 )
}

const styles = StyleSheet.create({
 container: {
  width: '100%', height: 330
  , padding: 16, paddingTop: 30, backgroundColor: '#fff'
 },
 container_2: {
  width: '100%', height: 250
  , padding: 16, paddingTop: 30, backgroundColor: '#fff'
 },

 head: { height: 40, backgroundColor: '#f1f8ff' },
 text: {
  margin: 6, fontFamily: "Nam-Bold",
  fontSize: 9,
 },
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
 },
 modalView: {
  width: '90%',
  height: '90%',
  margin: 20,
  backgroundColor: "#545252",
  opacity: 0.96,

  borderRadius: 20,
  padding: 35,
  //alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
   height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
 },
 button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
 },
 buttonOpen: {
  backgroundColor: "#545252",
 },
 buttonClose: {
  backgroundColor: "#545252",
 },
 textStyle: {
  color: "white",
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: 40,
  fontFamily: "Nam-Bold"

 },
 modalText: {
  marginBottom: 15,
  textAlign: "center",
  fontFamily: "Nam-Bold",
  fontSize: 30,
  color: '#ffffff',
  marginLeft: 50

 },
 modalTextv: {
  marginBottom: 20,
  fontFamily: "Nam-Bold",
  fontSize: 20,
  color: '#FFFFFF'

 }

})
export default Search_item_seconde;
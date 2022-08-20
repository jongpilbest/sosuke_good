
import React, { useState, useContext, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import Change_Com from "./Change_Com";


import SeachBar from "../../signup/SearchBar";
import Ms from "../../signup/Ms";
import axios from "axios";
//import { TapGestureHandler } from "react-native-gesture-handler";

var chekc = -1;
var chek = 0;
var text_input = 0;
//import { useSelector, useDispatch } from 'react-redux'

import { changeAction } from "../../redux/change";
import { Ionicons } from '@expo/vector-icons';


const Change_State = function ({ navigation }) {
    const token = useSelector((state) => state.token.token)

    useEffect(() => {
        axios.get(`http://13.209.73.153:5000/mypage/checkUserInfo`, { aa: 'd' },
            {
                headers: {
                    'X-AUTH-TOKEN': token

                }
            }
        ).then((response) => {
            if (response) {

                var data = response.data.allergy

                // setcheck(response.data);

                console.log(data)

                for (const pro in data) {

                    if (data[pro] == 1) {
                        dispatch(changeAction.setallergy_1(pro))
                    }


                }

                //dispatch(changeAction.setallergy_1(vale.kr))
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


    }, [])


    const dispatch = useDispatch();
    const [MS_good, misu] = Ms();
    // const [chna, mos_original] = fian();
    //console.log(misu);
    //  console.log('에러십활')
    const data_change = navigation.getParam('data');
    const mos = useSelector((state) => state.change.allergy)
    // console.log(mos)

    const misugo = function (el) {
        dispatch(changeAction.setallergy_1(el))


    }
    const check_most = function (el) {

        if (el == "") {
            chekc = -1;
            chek = mos;

            text_input = 0;

            return;

        }

        //console.log(mos)
        chek = mos.filter(evlv => {
            return evlv.kr == el
        })
        //console.log(`chek ${chek}`)


        if (chek.length > 0) {
            chekc = 11;
            text_input = 33;
        }
        else if (chek.length == 0) {
            chekc = 0
            console.log('ERROR CHECK')
            text_input = 1;
        }



        return;




    }
    const check_good = function () {


        if (chekc == 11) {
            // console.log('11인데요')
            chekc = 10;
            return true;
        }
        else
            // console.log('11아닌데요 ')
            return false;

    }



    // console.log(Context._currentValue.state);
    // console.log(Context._currentValue.state.length);
    // var mos = Context._currentValue.state.AddComponent

    /*
    // console.log(mos, chekc)
   
    const check_most = function (el) {
   
        if (el == "") {
            chekc = -1;
            chek = mos;
   
            text_input = 0;
   
            return;
   
        }
   
        console.log(mos)
        chek = mos.filter(evlv => {
            return evlv.kr == el
        })
        //console.log(`chek ${chek}`)
   
   
        if (chek.length > 0) {
            chekc = 11;
            text_input = 33;
        }
        else if (chek.length == 0) {
            chekc = 0
            console.log('ERROR CHECK')
            text_input = 1;
        }
   
   
   
        return;
   
   
   
   
    }
   
   
   
    const check_good = function () {
   
   
        if (chekc == 11) {
            // console.log('11인데요')
            chekc = 10;
            return true;
        }
        else
            // console.log('11아닌데요 ')
            return false;
   
    }
   
   
    //const shpw = put_state.slice(0, 5);
   
   
   
   */
    return (

        <View style={{
            backgroundColor: '#DDEEF2',
            height: '100%'
        }}>

            <TouchableOpacity onPress={() => {

                console.log('엥')
                navigation.pop()
            }}>
                <Ionicons style={{

                    marginLeft: 15,
                    marginTop: 20,
                }} name="arrow-back-circle" size={50} color="black" />

            </TouchableOpacity>

            <View style={{
                marginTop: '3%',
                marginLeft: '3%'
            }}>
                <Text style={{
                    marginLeft: 13,
                }}>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        알레르기
                    </Text>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        성분을 알려주세요
                    </Text>
                </Text>
                <Text style={{
                    fontSize: 13,
                    color: '#545252',
                    marginLeft: 22,
                    marginTop: 10,

                    fontWeight: 'bold',
                    fontFamily: 'Nam-Bold',
                }}>
                    마이페이지에서 변경 가능합니다.

                </Text>
            </View>
            <SeachBar onfinsh={(vl) => {
                MS_good()

                check_most(vl);
            }} >

            </SeachBar>

            {
                text_input == 1 && <Text style={{
                    fontSize: 22,
                    color: '#545252',
                    marginLeft: 20,

                    fontWeight: 'bold'
                }}>
                    검색되는 상품이 없습니다

                </Text>
            }
            <View style={{
                height: '60%'
            }}>


                <ScrollView style={styles.border}>



                    <View style={styles.frined}>



                        {


                            chekc == 11 && check_good() && < Componn vale={chek[0]}></Componn>

                        }
                        {
                            chekc == -1 && mos.map((el, index) => {
                                return < Change_Com key={index} gogo={(el) => misugo(el)} vale={el}></Change_Com>
                            })

                        }




                    </View>



                </ScrollView>
            </View>
            < TouchableOpacity onPress={() => {


                //navigation.navigate('ingredient');

            }

            }>
                <View style={{
                    backgroundColor: '#ffffff'
                    , width: '45%',
                    height: '22%',
                    borderRadius: 10,
                    marginTop: 19,
                    alignSelf: 'center',
                    alignContent: 'center'




                }}>
                    <Text style={{
                        fontSize: 16,
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: '#545252',
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontFamily: 'Nam-Bold',
                    }}>
                        다음
                    </Text>
                </View>

            </TouchableOpacity>





        </View >


    )

}
Change_State.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({


    border: {
        width: '90%',
        height: 800,

        borderWidth: 3,
        margin: 10,
        borderColor: 'transparent'


    },
    frined: {

        flexDirection: 'row',

        height: 700,
        // justifyContent: 'space-between',
        backgroundColor: '#DDEEF2',
        // justifyContent: 'flex-start',
        flexWrap: 'wrap'
    }




})
export default Change_State;
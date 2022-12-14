
import React, { useState, useContext, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";
import Componn from "./Componn"
import BigContext from "../contextv/BigContext";

import SeachBar from "./SearchBar"
import Ms from "./Ms";
//import { TapGestureHandler } from "react-native-gesture-handler";
import axios from "axios"
import fian from "./fian";
var chekc = -1;
var chek = 0;
var text_input = 0;
//import { useSelector, useDispatch } from 'react-redux'
import { authAction } from "../redux/auth";
import { Ionicons } from '@expo/vector-icons';


const fifth = function ({ navigation }) {
    const dispatch = useDispatch();
    const [MS_good, misu] = Ms();
    const [num, setnum] = useState(false);
    const compon_length = useSelector((state) => state.auth.array_list);
    useEffect(() => {
        console.log('하나 이상 ?', compon_length.length)
        if (compon_length.length > 0) {
            setnum(false);
        }
        if (compon_length.length == 0) {
            setnum(true);
        }

    }, [compon_length])

    // const [chna, mos_original] = fian();
    //console.log(misu);
    //  console.log('에러십활')
    const [go, setgo] = useState(0);
    const mos = useSelector((state) => state.auth.allergy)
    // console.log(mos)


    const misugo = function (el) {
        dispatch(authAction.setallergy_1(el))


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
            backgroundColor: '#F2F2F2',
            height: '100%'
        }}>

            <TouchableOpacity onPress={() => {

                console.log('엥')
                navigation.pop()
            }}>
                <Ionicons style={{

                    marginLeft: 15,
                    marginTop: 20,
                }} name="arrow-back-circle" size={50} color="#545252" />

            </TouchableOpacity>

            <View style={{
                marginTop: '1%',
                marginLeft: '3%'
            }}>
                <Text style={{
                    marginLeft: 13,
                }}>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold',
                        fontFamily: 'Sc',
                    }}>
                        알레르기
                    </Text>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold',
                        fontFamily: 'Sc',
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
                    fontFamily: 'Sc',
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
                num && <Text style={{
                    fontFamily: 'Sc',
                    marginLeft: 170,
                    color: '#545252'

                }}>
                    최소 하나 이상 선택해주세요
                </Text>
            }

            {
                text_input == 1 && <Text style={{
                    fontSize: 22,
                    color: '#545252',
                    marginLeft: 20,

                    fontWeight: 'bold'
                }}>
                    검색되는 알레르기 성분이 없습니다

                </Text>
            }
            <View style={{
                height: '52%',
                width: '100%',
                marginLeft: 10
            }}>


                <ScrollView style={styles.border}>



                    <View style={styles.frined}>



                        {


                            chekc == 11 && check_good() && < Componn vale={chek[0]}></Componn>

                        }
                        {
                            chekc == -1 && mos.map((el, index) => {
                                return < Componn go_he={go} key={index} gogo={(el) => misugo(el)} vale={el}></Componn>
                            })

                        }




                    </View>



                </ScrollView>
            </View>
            < TouchableOpacity onPress={() => {

                setgo(1);
                navigation.navigate('ingredient');

            }

            }>
                <View style={{
                    backgroundColor: '#545252',
                    width: '85%',
                    height: 40,
                    borderRadius: 5,
                    marginTop: 30,
                    alignSelf: 'center',
                    alignContent: 'center'




                }}>
                    <Text style={{
                        fontSize: 16,
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: 12,
                        fontWeight: 'bold',
                        fontFamily: 'Sc',
                    }}>
                        다음
                    </Text>
                </View>

            </TouchableOpacity>





        </View >


    )

}
fifth.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({


    border: {
        width: '90%',
        height: 800,

        borderWidth: 3,
        margin: 3,
        borderColor: 'transparent'


    },
    frined: {

        flexDirection: 'row',
        height: 700,
        // justifyContent: 'space-between',
        backgroundColor: '#F2F2F2',
        // justifyContent: 'flex-start',
        flexWrap: 'wrap'
    }




})
export default fifth;
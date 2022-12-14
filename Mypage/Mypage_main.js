
import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Image, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Modal from "react-native-modal";
import axios from "axios";
import good_list from "./good_list";
import { changeAction } from "../redux/change";
import { useSelector, useDispatch } from 'react-redux'
//import { changeAction } from "../../redux/change";
const Mypage_main = function ({ navigation }) {
  const token = useSelector((state) => state.token.token)
  const dispatch = useDispatch();
  dispatch(changeAction.setarray_list())

  dispatch(changeAction.setingre_change_list())


  const nickname = useSelector((state) => state.owner.owner);

  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('h');
  // 권한 요청을 위한 hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const uploadImage = async () => {
    // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    // 이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1]
    });
    if (result.cancelled) {
      return null; // 이미지 업로드 취소한 경우
    }
    // 이미지 업로드 결과 및 이미지 경로 업데이트
    console.log('이미지 화깅ㄴ')
    console.log(result);

    setImageUrl(result.uri);
  };

  // const { delete_all } = useContext(Context);
  //console.log(Context._currentValue.state);
  //var hey_your_name = Context._currentValue.state[0];
  //console.log(hey_your_name)

  return (


    <View style={{
      flex: 1
    }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              fontFamily: "Sc"

            }}>
              로그아웃 하시겠습니까?
            </Text>
            <View style={{
              flexDirection: 'row',
              marginTop: 20
            }}>
              <TouchableOpacity onPress={() => {

                navigation.navigate('Edit')
              }}>
                <View style={{
                  width: 100,
                  backgroundColor: '#DDEEF2',
                  height: 30,
                  borderRadius: 20
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: '#444040', fontWeight: 'bold',
                    textAlign: 'center',
                    flexDirection: 'row',
                    fontFamily: "Sc",

                    margin: 3
                  }}>
                    네
                  </Text>

                </View>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible)
              }}>
                <View style={{
                  width: 100,
                  backgroundColor: '#DDEEF2',
                  height: 30,
                  borderRadius: 20,
                  marginLeft: 40
                }}>
                  <Text style={{
                    fontSize: 20,
                    fontFamily: "Sc",

                    color: '#444040',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: 3
                  }}>
                    아니요
                  </Text>
                </View>

              </TouchableOpacity>
            </View>

          </View>

        </View>
      </Modal >

      <View style={{
        backgroundColor: '#F4F4F4',
        flex: 0.8,
        //eight: '35%'
      }}>
        <Text style={{
          fontFamily: "Aullia"
          , fontSize: 45,
          marginLeft: 20,
          marginTop: 25,
          color: 'black'
        }}>
          Anof
        </Text>
        <Text style={{
          fontSize: 16,
          alignSelf: "center",
          color: '#545252',
          position: 'absolute',
          top: 90,
          left: 30,
          fontFamily: "Sc"
        }}>마이페이지</Text>
      </View>
      <View style={{
        flex: 1,
        height: '30%',
        backgroundColor: '#F4F4F4'
      }}>
        <View>
          <View style={{
            backgroundColor: 'white',
            height: '85%',
            margin: 10,
            flexDirection: 'row',
            borderRadius: 5


          }}>

            <View style={{
              width: '100%',


            }}>


              <View style={{
                backgroundColor: 'white',
                height: '70%',
                width: '25%',
                margin: 20,
                marginLeft: 20,
                borderRadius: 5,
                position: 'relative',
                flexDirection: 'row'


              }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    margin: 0,
                    padding: 0,

                    //       borderRadius: '50%',
                  }}
                  source={{ uri: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAFzsZ%2FbtqI088tZW3%2FHCqq10x0OG9SoMdG2Bo3YK%2Fimg.jpg" }}
                />
                <View style={{
                  position: 'absolute',
                  left: 20,
                  width: 50,

                  top: 70,
                  margin: 0,
                }}>

                </View>
                <View style={{
                  width: 200,
                  height: 100
                }}>


                  <Text style={{
                    fontSize: 20,
                    fontFamily: "Sc",
                    margin: 20
                  }}>
                    {nickname}
                  </Text>
                </View>
              </View>

            </View>
            <View>

            </View>
          </View>

        </View>

      </View>

      <View style={{
        backgroundColor: '#F2F2F2',
        flex: 2.5
      }}>
        <View style={{
          backgroundColor: 'white',
          height: '11%',
          width: '95%',
          margin: 5,
          marginLeft: 10,
          borderRadius: 5
        }}>
          <TouchableOpacity onPress={() => {
            console.log('선호 상품?', token);

            axios.get("http://15.165.76.99:5000/likeproduct/list",
              {
                headers: {
                  'X-AUTH-TOKEN': token,


                }
              }
            ).then((response) => {
              if (response) {

                var data = response.data

                // setcheck(response.data);

                console.log(data)
                navigation.navigate('good_list', { data: response.data, check: 1 })


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

          }
          }>


            <Text style={{
              margin: 13,
              fontSize: 13,
              fontFamily: "Sc"
            }}>
              선호상품 확인

            </Text>
          </TouchableOpacity>

        </View>


        <View style={{
          backgroundColor: 'white',
          height: '11%',
          width: '95%',
          margin: 5,
          marginLeft: 10,
          borderRadius: 5
        }}><TouchableOpacity onPress={() => {
          console.log('비선호 상품?', token);

          axios.get("http://15.165.76.99:5000/dislikeproduct/list",
            {
              headers: {
                'X-AUTH-TOKEN': token,


              }
            }
          ).then((response) => {
            if (response) {

              var data = response.data

              // setcheck(response.data);

              console.log(data)
              navigation.navigate('good_list', { data: response.data, check: 0 })


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
        }
        }>
            <Text style={{
              margin: 13,
              fontSize: 13,
              fontFamily: "Sc"
            }}>
              비선호상품 확인
            </Text>
          </TouchableOpacity>
        </View>




        <View style={{
          backgroundColor: 'white',
          height: '11%',
          width: '95%',
          marginLeft: 10,
          margin: 5,
          borderRadius: 5
        }}>
          <TouchableOpacity onPress={() => {

            //  check_state();



            dispatch(changeAction.setchange_list());
            axios.get(`http://15.165.76.99:5000/mypage/checkUserInfo`,
              {
                headers: {
                  'X-AUTH-TOKEN': token

                }
              }
            ).then((response) => {
              if (response) {
                console.log('수정')
                data = response.data
                console.log(data)
                item = response.data.allergy;
                item2 = response.data.ingredient
                console.log(item)

                for (const pro in item) {
                  // console.log(pro)
                  if (item[pro] == 1) {
                    dispatch(changeAction.setallergy_1(pro));
                    dispatch(changeAction.original(pro));
                  }


                }
                for (const pro in item2) {
                  // console.log(pro)
                  if (item2[pro] == 1) {
                    dispatch(changeAction.setingredient_1(pro));
                    dispatch(changeAction.original_ingre(pro));
                  }


                }

                //navigation.navigate('Change_State', { data: item });

                navigation.navigate('Change_State');


              }
            }).catch((err) => {
              console.log(err.message);

            })



          }}>
            <Text style={{
              margin: 13,
              fontSize: 13,

              fontFamily: "Sc"
            }}>
              상태 수정
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          backgroundColor: 'white',
          height: '11%',
          width: '95%',
          marginLeft: 10,
          margin: 5,
          borderRadius: 5
        }}>
          <TouchableOpacity onPress={() => {



            axios.get("http://15.165.76.99:5000/mypage/faq",
              {
                headers: {
                  'X-AUTH-TOKEN': token

                }
              }
            ).then((response) => {
              if (response) {

                console.log(response.data)
                navigation.navigate('Qna', {
                  item: response.data
                })

              }
            }).catch((err) => {
              console.log(err.message);

            })

            //navigation.navigate('point')




          }}>
            <Text style={{
              margin: 13,
              fontSize: 13,

              fontFamily: "Sc"
            }}>
              FAQ
            </Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={() => {
          axios.get("http://15.165.76.99:5000/mypage/danger",
            {
              headers: {
                'X-AUTH-TOKEN': token

              }
            }
          ).then((response) => {
            if (response) {
              console.log('위험')
              var datac = response.data
              console.log(datac);

              var gey_fo = [];
              var gey = [];
              //var gey_fo = Object.values(item)
              //var gey = Object.keys(item);
              for (const wha in datac) {
                gey.push(wha);
                gey_fo.push(datac[wha])

              }
              console.log(gey, gey_fo)
              navigation.navigate('Danger', { full: datac, gey: gey, gey_fo: gey_fo })


            }
          }).catch((err) => {
            console.log(err.message);

          })

          //navigation.navigate('point')

        }
        }
        >
          <View style={{
            backgroundColor: 'white',
            height: 40,
            width: '95%',
            marginLeft: 10,
            margin: 5,
            borderRadius: 5
          }}>
            <Text style={{
              margin: 13,
              fontSize: 13,

              fontFamily: "Sc"
            }}>
              위험성분 분석
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {



          axios.get("http://15.165.76.99:5000/mypage/pointdetail",
            {
              headers: {
                'X-AUTH-TOKEN': token

              }
            }
          ).then((response) => {
            if (response) {
              console.log('누적포인트')
              var data = response.data


              navigation.navigate('point', { data: data })


            }
          }).catch((err) => {
            console.log(err.message);

          })

          //navigation.navigate('point')

        }}>
          <View style={{
            backgroundColor: 'white',
            height: 40,
            width: '95%',
            marginLeft: 10,
            margin: 5,
            borderRadius: 5
          }}>
            <Text style={{
              margin: 13,
              fontSize: 13,

              fontFamily: "Sc"
            }}>
              누적 포인트내역
            </Text>

          </View>
        </TouchableOpacity>
        <View style={{
          backgroundColor: '#FFE978',
          width: '30%',
          height: '11%',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 10,
          borderRadius: 5,
          justifyContent: 'center',


        }}>
          <TouchableOpacity onPress={() => {
            setModalVisible(true)
            //delete_all()
          }} >


            <Text style={{
              fontSize: 15,
              flexDirection: 'row',
              // alignItems: 'center'
              fontFamily: "Sc"
              ,
              textAlign: 'center',
              justifyContent: 'center',




            }}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View >

  )
}
Mypage_main.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: '90%',
    height: '20%',
    margin: 20,
    backgroundColor: "#545252",
    opacity: 0.98,

    //b//orderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },
  button: {
    //orderRadius: 20,
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
    fontSize: 20

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    color: 'white',
    fontFamily: "Sc"


  },
  modalTextv: {
    marginBottom: 15,

    fontSize: 30,
    color: '#71A6E3'

  }

})

export default Mypage_main;
import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 id: '',
 password: '',
 nickname: '',
 array_list: [],
 array_list_2: [],
 change_list: [],
 original_list: [],
 total_list: [],
 allergy: [

  {
   name: 'wheat',

   kr: '밀가루',

  },

  {
   name: 'milk',

   kr: '우유'

  }
  , {
   name: 'buckwheat',

   kr: '메밀'

  },

  {
   name: 'soybean',

   kr: '콩'

  }
  , {
   name: 'mackerel',

   kr: '고등어'


  }
  , {
   name: 'crab',

   kr: '게'


  }, {
   name: 'shrimp',

   kr: '새우'

  }, {
   name: 'pork',

   kr: '돼지 고기'

  }, {
   name: 'peach',

   kr: '복숭아'

  }, {
   name: 'tomato',

   kr: '토마토'

  }, {
   name: 'walnut',

   kr: '땅콩'
  }, {
   name: 'chicken',

   kr: '닭'

  }, {
   name: 'beef',

   kr: '쇠고기'

  }, {
   name: 'squid',

   kr: '오징어'

  }, {
   name: 'shellfish',

   kr: '조개'


  },
  {
   name: 'egg',

   kr: '달걀'


  },
  {
   name: 'peanut',

   kr: '땅콩'


  }],
 ingredient: [{
  name: 'natrium',

  kr: '나트륨'


 },
 {
  name: "carbohydrates",

  kr: '탄수화물'

 }, {
  name: "sugar",

  kr: '당류'

 },
 {

  name: "fat",

  kr: '지방'


 }
  , {
  name: 'trans_fat',

  kr: '트랜스지방'

 },
 {
  name: "saturated_fat",

  kr: '포화지방'
 },
 {
  name: "cholesterol",

  kr: '콜레스테롤'

 },
 {
  name: "protein",

  kr: '단백질'

 },
 {
  name: "calorie",

  kr: '칼로리'

 }]
 ,

}

const changeslice = createSlice({

 name: 'change',
 initialState: initialstate,
 reducers: {

  setallergy_0: (state, action) => {
   state.array_list.splice(state.array_list.indexOf(action.payload), 1);
   // console.log(state.array_list)


  },
  push_change_arr: (state, action) => {
   state.change_list.push(action.payload)
  },
  pop_change_arr: (state, action) => {
   state.change_list.splice(state.change_list.indexOf(action.payload), 1);
  },
  concat_allergy: (state, action) => {
   state.total_list = state.change_list.concat(state.array_list);
  },

  setarray_list: (state, action) => {

   state.array_list.length = 0;

  }
  ,
  setchange_list: (state, action) => {

   state.change_list.length = 0;

  },
  original: (state, action) => {


   state.original_list.push(action.payload)


  },
  setallergy_1: (state, action) => {


   state.array_list.push(action.payload)


  },
  setingredient_0: (state, action) => {

   state.array_list_2.splice(state.array_list_2.indexOf(action.payload), 1);
   // console.log(state.array_list)
  },
  setingredient_1: (state, action) => {

   state.array_list_2.push(action.payload)
  },

 }

})


export const changeAction = changeslice.actions;

export default changeslice.reducer;

import React from 'react'
import {TouchableOpacity,Alert} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Messagebox from '../screens/messagebox'
import { FontAwesome5,MaterialIcons,Feather } from '@expo/vector-icons';


const MessageboxStack=createStackNavigator();
const MessageboxScreen= ()=>(
    <MessageboxStack.Navigator>
        <MessageboxStack.Screen name="mess" component={Messagebox}
        options={{
         title:'MessageBox',
         headerTitleAlign:'center',
         headerTintColor: 'white',
         headerStyle:{
           backgroundColor:'#0274ff',
         },
        headerRight:()=>(
          <TouchableOpacity 
            style={{paddingRight:10,}}
            onPress={()=>{
               Alert.alert('sort')
             }}
          >
             <MaterialIcons name="filter-list" size={24} color="white" />
          </TouchableOpacity>
         ),
      }}/>
    </MessageboxStack.Navigator>
)

export default MessageboxScreen
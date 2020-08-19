import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from '../components/login';
import chatscreens from '../screens/chatscreens';
import createaccount from '../screens/createaccount'
import messagebox_stack from './messagebox_stack'
import { FontAwesome5,MaterialIcons,Foundation,Feather } from '@expo/vector-icons';
import { TouchableOpacity, Alert } from 'react-native';
import setpage_stack_navigator from './setpage_stack_navigator'
import settings_stack_navigator from './settings_stack_navigator'
import order_stack_navigator from './order_stack_navigator'
import SplashScreen from '../screens/splash'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

function Tabnavigator() {
    return (
      <Tab.Navigator
        swipeEnabled={true}
        initialRouteName="mess"
        tabBarOptions={{
            activeTintColor: 'rgba(211,98,150,0.8)',
        }}
      >
        <Tab.Screen name="mess" component={messagebox_stack} 
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="facebook-messenger" size={24} color={color} />
            ),
            tabBarColor:'#0274ff',
          }}
        />
        <Tab.Screen name="Order" component={order_stack_navigator} 
          options={{
            tabBarLabel: 'Create Order',
            tabBarIcon: ({ color }) => (
              <Feather name="shopping-bag" size={24} color={color} />
            ),
            tabBarColor:'#0274ff',

          }}
        />
        <Tab.Screen name="Set Page" component={setpage_stack_navigator}
          options={{
            tabBarLabel: 'Set Page',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="pages" size={24} color={color} />
            ),
            tabBarColor:'#0274ff',

          }}
        />
        <Tab.Screen name="Settings" component={settings_stack_navigator} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="settings" color={color} size={24} />
            ),
            tabBarColor:'#0274ff',
          }}
        />
    </Tab.Navigator>
    )
}

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={login}
      options={{
        headerShown:false
      }}        />
    <Stack.Screen name="Chat" component={chatscreens}
      options={{
        title: 'Chat',
        headerTitleAlign:"center",
        headerTintColor: '#666363',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown:false,
      }}
    />
    <Stack.Screen name="create account" component={createaccount}
      options={{
        title:'New Account',
        headerTitleAlign:'center',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor:'#0274ff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />

    <Stack.Screen name="messbox" component={messagebox_stack} 
      // options={{
      //    title:'MessageBox',
      //    headerTitleAlign:'center',
      //    headerTintColor: 'white',
      //    headerStyle:{
      //      backgroundColor:'#1b86bf',
      //    },
      //   headerRight:()=>(
      //     <TouchableOpacity 
      //       style={{paddingRight:10,}}
      //       onPress={()=>{
      //          Alert.alert('sort')
      //        }}
      //     >
      //        <MaterialIcons name="filter-list" size={24} color="white" />
      //     </TouchableOpacity>
      //    ),
      // }}
    />
    <Stack.Screen name="tabnavigator" component={Tabnavigator} 
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
        headerShown:false,
      }}
    />
  </Stack.Navigator>
);

const Routes = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsLoading(true), 1000);
    }, []);

    return (
        <NavigationContainer>
            {isLoading ? <StackNavigator/> : <SplashScreen/>}
        </NavigationContainer>
    );
}

export default Routes




  
  
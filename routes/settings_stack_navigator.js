import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import settings from './settings'

const SettingsStack = createStackNavigator();
const SettingsScreen = ()=>(
    <SettingsStack.Navigator>
        <SettingsStack.Screen 
            name="Settings" component={settings}
            options={{
                title:'Settings',
                headerTitleAlign:'center',
                headerTintColor: 'white',
                headerStyle:{
                  backgroundColor:'#0274ff',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                //headerLeft:()=>(null)
              }}
        />
    </SettingsStack.Navigator>
);
export default SettingsScreen
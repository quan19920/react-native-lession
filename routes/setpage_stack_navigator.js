import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import setpage from './setpage'

const SetpageStack = createStackNavigator();
const SetpageScreen = ()=>(
    <SetpageStack.Navigator>
        <SetpageStack.Screen 
            name="Setpage" component={setpage}
            options={{
                title:'Set page',
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
    </SetpageStack.Navigator>
)

export default SetpageScreen
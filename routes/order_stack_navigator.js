import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import order from './order'

const OrderStack = createStackNavigator();
const OrderScreen = ()=>(
    <OrderStack.Navigator>
        <OrderStack.Screen 
            name="Order" component={order}
            options={{
                title:'Oder',
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
    </OrderStack.Navigator>
);
export default OrderScreen
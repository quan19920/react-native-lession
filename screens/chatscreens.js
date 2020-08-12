import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants'


function chatscreens() {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
               <Image source={require('./../anh/avarta.jpg')} style={styles.image}></Image>
               <Text style={styles.layoutuser}>user name</Text>
               <Text style={styles.layoutuser}>Career</Text>
            </View>
            <View style={styles.down}></View>
        </View>
    )
}

export default chatscreens

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Constants.statusBarHeight,
    },
    up:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },

    image:{
        height:100,
        width:100,
        borderRadius:50,
    },

    layoutuser:{
        textTransform:'uppercase',
        color:'#a89eab',
        paddingTop:5,
        fontWeight:"bold",
    },

    down:{
        flex:3,
        backgroundColor:'#ff7053',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

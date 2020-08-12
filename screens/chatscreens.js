import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants'


function chatscreens() {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
               <Image source={require('./../anh/avarta.jpg')} style={styles.image}></Image>
               <Text style={styles.layoutuser}>user name</Text>
               <Text style={styles.layoutcareer}>Career</Text>
            </View>
            <View style={styles.down}>
                <View style={styles.down1}>
                    <TouchableOpacity style={styles.buttongroup} activeOpacity={0.5} onPress={
                            ()=>{
                                Alert.alert("login successed")
                            }}
                            >
                            <Text style={styles.textbutton}>Group</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonfanpage} activeOpacity={0.5} onPress={
                            ()=>{
                                Alert.alert("login successed")
                            }}
                            >
                            <Text style={styles.textbutton}>Fanpage</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.down2}></View>
            </View>
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
        marginTop:20,
    },

    image:{
        height:100,
        width:100,
        borderRadius:50,
    },

    layoutuser:{
        textTransform:'uppercase',
        color:'#1c1c1c',
        paddingTop:5,
        fontWeight:"bold",
        fontSize:15,
    },
    layoutcareer:{
        color:'#a89eab',
        paddingTop:5,
        fontWeight:"bold",
    },

    down:{
        flex:4,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    down1:{
        flex:1,
        //backgroundColor:'#ff7053',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textbutton:{
        fontSize:20,
        fontWeight:'bold', 
        color:'white'
    },

    buttongroup:{
        margin:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1b86bf',
        marginBottom: 15,
        borderRadius: 30,
        width:150,

    },
    buttonfanpage:{
        margin:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#1b86bf',
        marginBottom: 15,
        borderRadius: 30,
        width:150,
    },
    down2:{
        flex:5,
        backgroundColor:'#31b32e'
    },
});

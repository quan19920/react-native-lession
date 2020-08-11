import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Button, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


function login() {
    return (
        <View style={styles.container}>
            <LinearGradient 
            colors={['#2974FA', '#38ABFD', '#43D4FF']} 
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height:1000,
              }}
           >        
            <View style={styles.up}><ImageBackground source={require('./anh/tuha_logo.png')} style={styles.logo} /></View>
            <View style={styles.down}>
                <View style={styles.down1}>
                    <View style={styles.login}>
                        <View style={styles.textlogin}>
                            <Text>set up khung đăng kí </Text>
                            <Text>set up khung đăng kí </Text>
                        </View>
                        <View style={styles.buttonlogin}>
                            <Button title="LOGIN" onPress={()=>{Alert.alert("Login successed")}} style={styles.button} ></Button>
                        </View>
                        
                    </View>
                </View>
                <View style={styles.down2}></View>
            </View>

        </LinearGradient>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex:1,
        //marginTop: Constants.statusBarHeight,
    },

    up:{
        flex:1,
        justifyContent:"flex-end",
        paddingBottom:20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    logo :{
        width:120,
        height:120,  
    },
    
    down:{
        flex:3, 
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    down1:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:320,
        backgroundColor: "rgba(255,255,255,0.5)",
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,

    },
    down2:{
        flex:2,
    },
    login:{
        flex:1,
        backgroundColor:'#dbd6d3',
        resizeMode: "cover",
        width: 250,
        height: 200,
        borderColor: "#d311de",
        position: 'absolute',
        alignItems:'center'
    },
    textlogin:{
        flex:3,
    },
    buttonlogin:{
        flex:1,
    },
    button:{
        
        
    },
});
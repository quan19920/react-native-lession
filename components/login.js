import React, {useState} from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'; 


function login() {
    // set user và password
    const [username, setusername] = useState('username');
    const [password, setpassword] = useState('password');

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
                            <TextInput placeholder="user name" 
                            onChangeText={Text=>setusername(Text)} 
                            value={username}
                            style={styles.TextInput}
                            autoCapitalize="none"
                            autoFocus={true}
                            />
                            <TextInput placeholder="password" 
                            onChangeText={Text=>setpassword(Text)} 
                            value={password}
                            style={styles.TextInput}
                            autoCapitalize="none"
                            autoFocus={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonlogin} activeOpacity={0.5} onPress={
                            ()=>{
                                Alert.alert("login successed")
                            }}
                            >
                            <Text style={{fontWeight:'bold', color:'white'}}>LOGIN</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity activeOpacity={0.5} onPress={
                            ()=>{
                                Alert.alert("login successed")
                            }}
                            >
                            <Text style={{fontWeight:'bold', color:'white', fontSize:15}}>Create Account   <FontAwesome5 name="arrow-right" size={15} color="white" /></Text>
                        </TouchableOpacity> 
                                               
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
        paddingTop:20,
    },
    down1:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:320,
        //backgroundColor: "rgba(255,255,255,0.5)",
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
        resizeMode: "cover",
        width: 250,
        height: 200,
        borderColor: "#d311de",
        position: 'absolute',
        alignItems:'center'
    },
    textlogin:{
        flex:3,        
        width:320,
    },

    TextInput:{
        fontWeight:'bold',
        color: 'white',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(144, 150, 146,0.3)',
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 30,
        paddingVertical: 10,
        marginHorizontal: 30,
        opacity: 0.5,
        fontWeight: "bold",
        
    },
    buttonlogin:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(144, 150, 146,0.3)',
        marginBottom: 15,
        borderRadius: 30,
        width:150,
    },
   
});
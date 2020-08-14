import React, {useState} from 'react'
import { View, StyleSheet,Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons';


function creataccount() {
    const [firstname, setfirstname] = useState('First Name');
    const [lastname, setlastname] = useState('Last name');
    const [address, setaddress] = useState('Address');
    const [city, setcity] = useState('City');
    const [email, setemail] = useState('Email');
    const [phonenumber, setphonenumber] = useState('Phone Number');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome5 name="arrow-left" size={24} color="#1b86bf" />
                <View style={styles.title}>
                    <Text style={{fontSize:20, color:'#666363',fontWeight:'bold'}}>New Account</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Text style={{marginVertical:15,paddingHorizontal: 15, fontSize:25,color:'#666363',fontWeight:'bold'}}>Information</Text>
                <ScrollView>
                    <TextInput
                        onChangeText={Text=>setfirstname(Text)}
                        value={firstname}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                    <TextInput
                        onChangeText={Text=>setlastname(Text)}
                        value={lastname}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                    <TextInput
                        onChangeText={Text=>setaddress(Text)}
                        value={address}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                    <TextInput
                        onChangeText={Text=>setcity(Text)}
                        value={city}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                    <TextInput
                        onChangeText={Text=>setemail(Text)}
                        value={email}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                    <TextInput
                        onChangeText={Text=>setphonenumber(Text)}
                        value={phonenumber}
                        autoCapitalize="none"
                        autoFocus={true}
                        style={styles.infoinput}
                    ></TextInput>
                </ScrollView>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    Alert.alert('now you have an accont')
                }}
                activeOpacity={0.4}
                style={styles.done}
            >
                <Text style={{fontSize:20, color:'white',fontWeight:'bold'}}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

export default creataccount

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Constants.statusBarHeight,

    },

    header:{
        flex:1,
        flexDirection:'row',
        //backgroundColor:'red'
        alignItems:'center',
        marginHorizontal:15
    },
    title:{
        flex:2,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },

    info:{
        flex:10,
        //backgroundColor:'blue'
    },

    infoinput:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        alignSelf: 'stretch',
        color:'#aba9a8',
        fontWeight:'bold',
        marginBottom: 15,
        paddingHorizontal: 15,
        borderBottomWidth:1,
        borderColor:'#ccc7c5',
        paddingVertical: 10,
    },

    done:{
        flex:1,
        backgroundColor:'#1b86bf',
        //backgroundColor:'red'
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        marginHorizontal:80,
        marginBottom:15,
    },
});

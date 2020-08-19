import React from 'react'
import { View, TextInput, StyleSheet,KeyboardAvoidingView,TouchableOpacity, Alert,Image,Text } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesome5,Entypo } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'
import { Item } from 'native-base'

const dataChat = [
    {
        key: "1",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "2",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "3",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "4",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "5",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "6",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "7",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "8",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "9",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "10",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    }, {
        key: "11",
        avatar: "https://ya-webdesign.com/transparent450_/fun-icon-png-6.png",
        name: "Lê Văn Tuấn",
        lastmsg: "Hello World",
        time: "06:09 AM"
    },]

function messagebox() {
    return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            enabled={false}
            style={styles.container}>
            <View style = {styles.searchContainter}>
                <View style={styles.search}>
                    <FontAwesome5 name="search" size={20} color="#b5b0af" />
                    <TextInput placeholder='Search' style={{height:50,paddingLeft:10,width:100}} />
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={dataChat}
                     renderItem={({item})=>(
                         <TouchableOpacity style={[styles.item, { justifyContent: 'space-between', alignItems: 'center' }]} activeOpacity={0.5} onPress={()=>{
                                Alert.alert('vậy là ổn rồi đêí')
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Image style={styles.imagechat} source={{uri:item.avatar}}/>
                                    <View>
                                        <Text style={styles.username}>{item.name}</Text>
                                        <Text style={styles.content} >{item.lastmsg}</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column', alignItems:'flex-end', paddingRight:10}}>
                                    <Text style={[styles.date]}>{item.time}</Text>
                                    <Entypo name="chat" size={24} color="black" style={{paddingTop:5}} />
                                </View>
                            </TouchableOpacity> 
                     )}
                    keyExtractor={item=>item.key}
                >
                </FlatList>

            </View>
        </KeyboardAvoidingView>
        
        
    )
}

export default messagebox

const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
    },
    title:{
        alignItems:'center',
        //justifyContent:'center',
        flexDirection:'row',
    },
    searchContainter:{
        flex:1,
        backgroundColor : "#0274ff"
    },
    search:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:50,
        backgroundColor : "white",
        margin:10,
        padding:15,
        width:120,

        
    },
    list:{
        flex:10,
        //backgroundColor:'green',
    },

    item:{
        flex:1,
        borderColor:'#ebe9e7',
        borderTopWidth:1,
        flexDirection:'row',
        //marginHorizontal:20,
        paddingTop:15,
        paddingBottom:15,
    },
    imagechat:{
        height:40,
        width:40,
        borderRadius:10,
        marginLeft:15,
    },

    username:{
        fontSize:18,
        paddingLeft:10,
        fontWeight:'bold',
        color:'black'
    },
    content:{
        fontSize:15,
        paddingLeft:10,
        color:'#c7c7c7',
        fontWeight:'bold'
    },

});
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert, ScrollView, TouchableOpacityBase, FlatList } from 'react-native'
import Constants from 'expo-constants'
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';

// data cho flatlist
const DATA = [
    {
        id: "1",
        imgUrl: 'https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg',
        username: "username 1",
        password: "password 1",
        date:'2/10/2020',
    },
    {
        id: "2",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 2",
        password: "password 2",
        date:'2/10/2020',
    },
    {
        id: "3",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 3",
        password: "password 3",
        date:'2/10/2020',
    },
    {
        id: "4",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 4",
        password: "password 4",
        date:'2/10/2020',
    },
    {
        id: "5",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 5",
        password: "password 5",
        date:'2/10/2020',
    },
    {
        id: "6",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 6",
        password: "password 6",
        date:'2/10/2020',
    },
    {
        id: "7",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 7",
        password: "password 7",
        date:'2/10/2020',
    },
    {
        id: "8",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 8",
        password: "password 8",
        date:'2/10/2020',
    },
    {
        id: "9",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 9",
        password: "password 9",
        date:'2/10/2020',
    },
    {
        id: "10",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 10",
        password: "password 10",
        date:'2/10/2020',
    },
    {
        id: "11",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 11",
        password: "password 11",
        date:'2/10/2020',
    },
    {
        id: "12",
        imgUrl: "https://img2.thuthuatphanmem.vn/uploads/2018/11/29/anh-dep-kudo-shinichi_011206382.jpg",
        username: "username 12",
        password: "password 12",
        date:'2/10/2020',
    },
     ];
     

function chatscreens({navigation}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{
                    navigation.replace('Login');
                }}
            >
            <SimpleLineIcons name="logout" size={24} color="black" style={{paddingLeft:10,top:0}}  />
            </TouchableOpacity>
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
                    {/* chỉ cần nhớ form này của flatlist */}
                </View>
                <View style={styles.down2}>
                    <FlatList 
                        data={DATA}
                        renderItem={({item})=>(
                            <TouchableOpacity style={[styles.item, { justifyContent: 'space-between', alignItems: 'center' }]} activeOpacity={0.5} onPress={()=>{
                                navigation.navigate('tabnavigator')
                            }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Image style={styles.imagechat} source={{uri:item.imgUrl}}/>
                                    <View>
                                        <Text style={styles.username}>{item.username}</Text>
                                        <Text style={styles.userpassword} >{item.password}</Text>
                                    </View>
                                </View>
                                <Text style={[styles.date, { paddingRight:10 }]}>{item.date}</Text>
                            </TouchableOpacity>   
                        )}
                        keyExtractor={item=>item.id}// để sử dụng id như là một key
                    ></FlatList>
                    {/* nút dấu cộng */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>{
                            Alert.alert('more option')
                        }}
                        style={styles.TouchableOpacityStyle}>
                        <Entypo name="circle-with-plus" size={60} color="#0274ff" style={styles.FloatingButtonStyle} />
                    </TouchableOpacity>
                </View>
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
        color: '#666363',
        paddingTop:5,
        fontWeight:"bold",
        fontSize:15,
    },
    layoutcareer:{
        color:'#aba9a8',
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
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#0274ff',
        marginBottom: 15,
        borderRadius: 30,
        width:150,
        height:50,

    },
    buttonfanpage:{
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#0274ff',
        marginBottom: 15,
        borderRadius: 30,
        width:150,
        height:50,

    },
    down2:{
        flex:5,
        //backgroundColor:'#31b32e',
        alignItems:'stretch'
    },

    username:{
        fontSize:15,
        paddingLeft:10,
        fontWeight:'bold',
        color:'#666363'
    },
    userpassword:{
        fontSize:10,
        paddingLeft:20,
        color:'#aba9a8'  
    },

    item:{
        flex:1,
        borderColor:'#ebe9e7',
        borderTopWidth:1,
        flexDirection:'row',
        //marginHorizontal:20,
        paddingTop:20,
        paddingBottom:20,
    },

    imagechat:{
        height:40,
        width:40,
        borderRadius:10,
        marginLeft:15,
    },

    date:{

    },

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 40,
      },
    
      FloatingButtonStyle: {
        width: 60,
        height: 60,
        //backgroundColor:'black'
      },
});

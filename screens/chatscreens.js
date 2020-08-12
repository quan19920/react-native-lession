import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants'


function chatscreens() {
    return (
        <View style={styles.container}>
            <View style={styles.up}></View>
            <View style={styles.down}></View>
        </View>
    )
}

export default chatscreens

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    up:{
        flex:2,
        backgroundColor:'#5890ff',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    down:{
        flex:3,
        backgroundColor:'#ff7053',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

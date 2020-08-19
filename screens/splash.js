import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Image,
    Button, ImageBackground
} from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';


// axios.interceptors.request.use(
//     async config => {
//         try {
//             const responseTuhaPages = await AsyncStorage.getItem('responseTuhaPages');
//             console.log('responseTuhaPages config', responseTuhaPages);
//             if (responseTuhaPages) {
//                 config.headers.Authorization = `Bearer ${responseTuhaPages}`;
//             }
//             return config;
//         } catch (error) {
//             return Promise.reject(error)
//         }
//     },
//     error => {
//         console.log('error1', error);
//         return Promise.reject(error)
//     }
// );

export default function Splash() {
    // axios.interceptors.response.use((response) => {
    //     return response
    // }, function (error) {
    //     console.log('error.response', error.response.status);
    //     if (error.response.status === 401) {
    //         AsyncStorage.removeItem('responseTuhaPages');
    //         console.log('Login Required.');
    //         // navigation.navigate('Login');
    //         return Promise.reject(error);
    //     }
    //     return Promise.reject(error);
    // });

    return (
        <View style={styles.wrapper}>
            <ImageBackground source={require('../anh/back_login1.jpg')} style={styles.backgroundImage}>
                <View style={styles.boxMain}>
                    <Image
                        style={styles.img}
                        source={require('../anh/tuha_logo.png')}
                    />
                </View>
                <ActivityIndicator style={{marginTop: 10}} size="large" color="#ffffff"/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#0366d6'
    },
    boxMain: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 180,
        height: 180
    },
    backgroundImage: {
        flex: 1,
        flexDirection: "column",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
});
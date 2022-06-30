import React from "react";
import { View, StyleSheet, Image, StatusBar, Text, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 60;

export default function Header() {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{ uri: 'https://customers.twilio.com/wp-content/uploads/2022/03/nubank_logo.png'}} style={styles.logo}></Image>
                </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="down" size={12} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBarHeight,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        flexDirection: 'row',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
    }
})
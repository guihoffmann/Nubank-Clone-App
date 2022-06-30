import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={20} color="white"/>
            <Text style={styles.labelButton}>Entradas</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={20} color="white"/>
            <Text style={styles.labelButton}>Compras</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <Ionicons name="person-add" size={20} color="white"/>
            <Text style={styles.labelButton}>Friends</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="areachart" size={20} color="white"/>
            <Text style={styles.labelButton}>Análise</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="setting" size={20} color="white"/>
            <Text style={styles.labelButton}>Setting</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="qrcode" size={20} color="white"/>
            <Text style={styles.labelButton}>QR Code</Text>
        </View>
    </TouchableOpacity>

   </ScrollView >
  );
}

const styles =StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 10,
        marginTop: 40,
        paddingEnd: 14,
        paddingStart: 30,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 10
    },
    areaButton:{
        backgroundColor:'rgba(255,255,255, 0.39)',
        height:80,
        width:90,
        borderRadius: 3,
        paddingTop:5,
        paddingLeft:10,
        paddingRight: 20,
    },
    labelButton:{
        color:'#fff',
        marginTop:30
    }
})
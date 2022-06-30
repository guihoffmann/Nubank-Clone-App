import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


export default function Card() {
    const[showValue, setShowValue] = useState(false);

 return (
   <View style={styles.container}>
        <View style={styles.card}>
            <TouchableOpacity>
                <AntDesign name="creditcard" size={30} color="grey" />
            </TouchableOpacity>

        <Text style={styles.item}>Saldo Disponível</Text>
            <View style={styles.content}>
                { showValue ? (
                    <Text style={styles.balance}>R$ 15.000,92</Text>
                ) : (
                    <View style={styles.skeleton}>
                    </View>
                )}
                <Text style={styles.footer}>Últimas transação:</Text>
            </View>
        </View>

        <View style={styles.card}>
            <TouchableOpacity onPress={ () => setShowValue(!showValue)}>
                <Ionicons name="eye-off" size={30} color="grey" />
            </TouchableOpacity>
        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 30,
        paddingEnd: 30,
        marginTop: 150,
        marginStart: 20,
        marginEnd: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 5,
        zIndex: 99,
    },
    item:{
        fontSize: 20,
        color: '#8c8c8c',
        marginTop:100
    },
    content:{
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    currencySimbol:{
        color: 'green'
    },
    balance:{
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'
    },
    footer:{
        position:'absolute',
        color:'#8c8c8c',
        marginTop:230,
    },
    skeleton:{
        marginTop:6,
        width: 100,
        height:10,
        backgroundColor: '#dadada',
        borderRadius:3,
    }
})
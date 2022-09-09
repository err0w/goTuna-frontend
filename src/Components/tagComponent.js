import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList, SafeAreaView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
function TagsComponent({tagText}){
    return(
        <View style={style.container}>
        <View style={style.tag}><Text>{tagText}</Text></View>
        </View>
        );
}

const style = StyleSheet.create({
    container:{
        margin:2,
        padding:2
    },
    tag:{
        borderWidth:1,
        backgroundColor:"#eaede8",
        height:20,
        borderRadius:10,
        padding:1,
        marginLeft:10
    }
})

export default TagsComponent
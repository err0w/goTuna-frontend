import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function CommentComponent({item}){
    return(
        <View style={style.container}>
             <View style={style.upperContainer}>
                    {/* <Text>{commentItem.username} | {commentItem.userDesignation} </Text> */}
                    <Text style={style.title}>{item.username} </Text><Text>| {item.designation} </Text>
             </View>
             <View style={style.userComment}>
                <Text>{item.comment}</Text>
             </View>
             <View style={style.bottomContainer}>
                <View style={style.void}></View>
            <View style={style.voteSection}>
                <View style={style.upvote}>
                            <Ionicons name='arrowup' size={24} color="black"></Ionicons>
                            <Text>{item.upvote_count}</Text>
                        </View>
                <View style={style.downvote}>
                    <Ionicons name='arrowdown' size={24} color="black"></Ionicons>
                    <Text>{item.downvote_count}</Text>
                </View>
            </View>  
             </View>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        padding:3,
        backgroundColor:'white',
        flexWrap:'wrap',
        margin:2
    },
    title:{
        fontWeight:'600'
    },
    upperContainer:{
        padding:3,
        height:25,
        alignContent:'center',
        flexDirection:'row'
    },
    bottomContainer:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:"space-evenly"
    },
    void:{
        flex:1,
        
    },
    voteSection:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:"space-evenly"
    },
    upvote:{
        flexDirection:'row',  
        alignItems:'center' 
    },
    downvote:{
        flexDirection:'row',
        alignItems:'center' 
    }
})

export default CommentComponent
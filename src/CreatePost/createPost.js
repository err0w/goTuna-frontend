import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList, SafeAreaView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import TagsComponent from '../Components/tagComponent'
import {tags} from '../DummyData'
function CreatePostScreen({route}){

    function onPressPost(){
        console.log("on Post Button clicked")
    }

    return(
    <View style={style.container}>
        <View style={style.titleView}>
        <Text style={style.textTitle}>Title(max 60 chars)</Text>
        <TextInput style = {style.titleinputStyle} placeholder="Enter Title" multiline={true}/>
        </View>
        <View style={style.descriptionView}>
            <Text style={style.textDescribe}>Describe</Text>
        <TextInput style = {style.describeinputStyle} placeholder="Describe your post" multiline={true}/>
        </View>
        <View style={style.tagsContainer}>
        <Text style={style.tagsTitle}>What is post your related to?</Text>
        <View style={style.tagsView}>
        {
            tags.map((item) => {
                return(
                <>
                <TagsComponent tagText={item.name} key={item.id}></TagsComponent>
                </>);
            })
        }
        </View>
        </View>
        <View style={style.viewBottom}>
            <TouchableOpacity onPress={onPressPost}>
                <View style={style.btnPost}>
                <Text style={style.textPost}>Post</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
    describeinputStyle:{
        backgroundColor:'#edf0f5',
        height:110,
        borderRadius:5
    },
    titleinputStyle:{
        height:55,
        backgroundColor:'#edf0f5',
        borderRadius:5
    },
    textTitle:{
        fontWeight:'600',
        fontSize:17
    },
    titleView:{
        padding:5,
        flexDirection:'column',
        margin:3
    },
    descriptionView:{
        padding:5,
        flexDirection:'column',
        fontWeight:'600'
    },
    tagsView:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    tagsContainer:{ 
        margin:3
    },
    tagsTitle:{
        fontSize:17,
        fontWeight:'600',
        margin:3

    },
    textDescribe:{
        fontSize:17,
        fontWeight:'600',
        marginBottom:3
    },
    viewBottom : {
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        alignItems:'center'
    },
    btnPost:{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#244DB7'
    },
    textPost:{
        color:'#ffffff', 
        alignItems:'center'
    }

})

export default CreatePostScreen
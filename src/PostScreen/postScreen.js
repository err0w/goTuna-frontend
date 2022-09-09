import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList, SafeAreaView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import PostPostScreen from '../Components/postPostScreen';
import CommentComponent from '../Components/comment'
import {fetchCommentList} from './postScreenApi'

function PostScreen({route}){
    // const item = route.params.item
    const postData = route.params.item
   //const commentData = route.params.commentData
    const [commentData, setCommentData] = useState([])
    
    useEffect(() => {
        async function fetchComment(){
            const data = await fetchCommentList(postData.id);
            setCommentData(data);
            console.log(data);
        };
        fetchComment();
    },[])

    function renderPostComponent(){

        return(<PostPostScreen item={postData}></PostPostScreen>);
    }


    function onCommentPress() {
    console.log('comment button pressed')
}

    return(
      <View style={style.container}>
        <View style={style.commentAndPostSection}>
       <FlatList
             data={commentData} 
             ListHeaderComponent={renderPostComponent}     
             keyExtractor={(item)=> item.id}
             renderItem={CommentComponent}
            ></FlatList>
            </View>
            <KeyboardAvoidingView keyboardVerticalOffset={70} behavior="padding"  style={style.KeyboardAvoidingView}>
            <View style={style.inputSection}>
            <TextInput style = {style.commentinputStyle} placeholder="Post Comment" multiline={true}/>
            <View style={style.buttonViewSection}>
            <TouchableOpacity onPress={onCommentPress} >
                <View style={style.btnComment}><Text style={style.textComment}>Comment</Text></View>
            </TouchableOpacity>
            </View>
            </View>
            </KeyboardAvoidingView>
           
            </View>
    );
}


const style = StyleSheet.create({
    container:{
        padding:1,
        margin:1,
        flex:1,
        flexDirection:'column'
    },
    commentAndPostSection:{
        flex:1
    },
    inputSection:{
        height:40,
        backgroundColor:'white',
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center',
    },
    commentinputStyle:{
        backgroundColor:'#f5f4f2',
        margin:5,
        height:40,
        borderRadius:5,
        flex:1
    },
    KeyboardAvoidingView : {
        padding:1,
        margin:0,
    },
    textComment:{
        color:'#ffffff', 
        alignItems:'center',
    },
    btnComment:{
        width:70,
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#244DB7'
    },
    buttonViewSection:{
        alignItems:'flex-end',
    }
})
export default PostScreen
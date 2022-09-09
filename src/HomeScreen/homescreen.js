import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import Post from '../Components/post'
import {data} from '../DummyData'
import {commentData} from '../DummyData'
import {fetchPostList} from './homescreenApi'
function HomeScreen({navigation}){

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPost(){
            const data = await fetchPostList();
            setPostList(data);
        };
        fetchPost();
    },[])

    function renderPostList({item}){
        onPressPostHandler = () => {
            navigation.navigate("PostScreen", {item:item} )
        }
        //return(<Text>My name is khan</Text>)
        return(<Post item={item} onPressPost={onPressPostHandler}></Post>)
    }

    return(
        <View style={style.container}>
            <FlatList
             data={postList}       
             keyExtractor={(item)=> item.id}
             renderItem={renderPostList}
            ></FlatList>
            
        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1
    }
}
)

export default HomeScreen
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 import HomeScreen from './src/HomeScreen/homescreen'
import PostScreen from './src/PostScreen/postScreen'
import CreatePostScreen from './src/CreatePost/createPost';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/AntDesign';
 const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function StackHomeScreen({navigation}){
  return(
    <BottomTab.Navigator>
    <BottomTab.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{title:'Home', tabBarIcon:({color,size})=><Ionicons name='home'size={30}  color={color}/>, headerShown:false}}
    />
    <BottomTab.Screen
     name="CreatePost" 
     component={CreatePostScreen} 
     options={{title:'Create Post', tabBarIcon:({color,size})=><Ionicons name='plus' size={size}  color={color}/> , headerShown:false}}
    />
    </BottomTab.Navigator>
    

  )
}

export default function App() {

  function onPressUser(){
    console.log("clicked User")
  }

  return (
    <>
   <NavigationContainer>
       
    <Stack.Navigator>
      <Stack.Screen 
      name='HomeScreen'
      component={StackHomeScreen}
      options={{title:"Home", headerBackTitle:"", headerLeft:()=>{return(<Ionicons name='user' size={23} style={{padding:2}} onPress={onPressUser}/>)}}}
/>
<Stack.Screen 
name='PostScreen'
component={PostScreen}
options={{title:"Post", headerBackTitle:""}}
/>
    </Stack.Navigator>
   </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

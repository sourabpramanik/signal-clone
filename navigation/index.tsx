/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName,Text, StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import { Feather, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen'
import HomeScreen from '../screens/HomeScreen'
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerTitle:props=><HomeHeader{...props}/>}}/>
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}
        options={{headerTitle:ChatRoomHeader, headerStyle:{backgroundColor:"#3872E9"}}}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader=(props)=>{
const {width} = useWindowDimensions()

 return(
   <View style={{
     width, 
     flexDirection:'row', 
     justifyContent:'space-between',
     padding:10,
     alignItems: 'center',}}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg'}} style={styles.avatar}/>
      <Text style={styles.homeText}>Signal</Text>
      <View style={styles.iconContainer}>
        <Feather name="camera" size={24} color="black" style={styles.icon}/>
        <Feather name="edit-2" size={24} color="black" style={styles.icon}/>
      </View>
   </View>
 )
}

const ChatRoomHeader=(props)=>{
const {width} = useWindowDimensions()

 return(
   <View style={{
     width: width-60,  
     flexDirection:'row', 
     justifyContent:'space-between',
     padding:10,
     alignItems: 'center',}}>
      <Text style={styles.chatRoomText}>{props.children}</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="videocam" size={24} color="white" style={styles.icon}/>
        <FontAwesome name="phone" size={24} color="white" style={styles.icon} />
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" style={styles.icon} />
      </View>
   </View>
 )
}

const styles = StyleSheet.create({

avatar: {
  width:40,
  height: 40,
  borderRadius: 20,
},
homeText:{
flex: 1,
textAlign: 'center',
marginLeft:20,
fontWeight: 'bold',
},
iconContainer:{
  flexDirection: 'row',
  justifyContent:'space-between',
},
icon:{
  marginHorizontal:10
},
chatRoomText:{

  textAlign: 'center',
  fontWeight: 'bold',
  color: 'white',
}
})
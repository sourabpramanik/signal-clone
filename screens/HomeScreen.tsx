import React from 'react'
import {View, StyleSheet, FlatList, Pressable, Text} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomsData from '../assets/dummy-data/ChatRooms'
import {Auth} from 'aws-amplify'
function TabOneScreen() {

  const signOut=()=>{
    Auth.signOut()
  }
  return (
    <View style={styles.page}>      
      <FlatList
        data={chatRoomsData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
      <Pressable onPress={signOut} style={{backgroundColor:'red', height:50, margin:10, borderRadius:50, alignItems:'center', justifyContent:'center', }}>
        <Text syle={{color:'#fff'}}>Logout</Text>
      </Pressable>
    </View>    
  )
}

export default TabOneScreen


const styles = StyleSheet.create({
page:{
backgroundColor:'#fff',
flex: 1,
},

})
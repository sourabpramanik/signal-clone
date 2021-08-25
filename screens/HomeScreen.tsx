import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomsData from '../assets/dummy-data/ChatRooms'
function TabOneScreen() {
  return (
    <View style={styles.page}>      
      <FlatList
        data={chatRoomsData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />
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
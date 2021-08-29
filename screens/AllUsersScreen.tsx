import React, {useEffect,useState} from 'react'
import {View, StyleSheet, FlatList, Pressable, Text} from 'react-native';
import UserItem from '../components/UserItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';
import {Auth, DataStore} from 'aws-amplify';
import {Users} from '../src/models';

function AllUsersScreen() {

  const [usersList, setUsersList] = useState<Users[]>([]);

  useEffect(()=>{
    DataStore.query(Users).then(setUsersList)   
  },[]);

  return (
    <View style={styles.page}>      
      <FlatList
        data={usersList}
        renderItem={({item}) => <UserItem user={item}/>}
        showsVerticalScrollIndicator={false}
      />     
    </View>    
  )
}

export default AllUsersScreen


const styles = StyleSheet.create({
page:{
backgroundColor:'#fff',
flex: 1,
},

})
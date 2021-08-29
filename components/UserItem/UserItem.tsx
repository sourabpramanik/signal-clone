import React from 'react'
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {DataStore, Auth} from 'aws-amplify';
import {ChatRoom, Users, ChatRoomUsers} from '../../src/models'
function UserItem({user}) {
    console.log(user);
    
    const navigation = useNavigation()

    const onUserPress=async (props)=>{
        const newChatRoom = await DataStore.save( new ChatRoom({newMessage:0}));
        console.log("FROM CHAT",newChatRoom);

        // connect authenticated user with chat room
        const authUser = await Auth.currentAuthenticatedUser()
        const dbUser = await DataStore.query(Users,authUser.attributes.sub);

       if(newChatRoom){
            await DataStore.save( new ChatRoomUsers({
                users: dbUser,
                chatroomID: newChatRoom.id
            }));
            // connect clicked user to chat room
            await DataStore.save( new ChatRoomUsers({
                users:user,
                chatroomID: newChatRoom.id
            }));
            navigation.navigate('ChatRoom', {id: newChatRoom.id});
       }


    }
    return (
        <Pressable onPress={onUserPress} style={styles.container}>
            <Image style={styles.userImg} source={{uri:user.imageUri}}/>            
            <View style={styles.messageContainer}>
                <View style={styles.userContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>           
            </View>
        </Pressable>
    )
}

export default UserItem

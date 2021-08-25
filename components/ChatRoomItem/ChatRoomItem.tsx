import React from 'react'
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import styles from './styles'
import {useNavigation} from '@react-navigation/core'

function ChatRoomItem(props) {
    const {chatRoom} = props;
    const users = chatRoom.users[1];
    const navigation = useNavigation()

    const onPress=()=>{
        navigation.navigate('ChatRoom', {id:chatRoom.id})
    }
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.userImg} source={{uri:users.imageUri}}/>
            {chatRoom.newMessages && <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View>}
            <View style={styles.messageContainer}>
            <View style={styles.userContainer}>
                <Text style={styles.name}>{users.name}</Text>
                <Text style={styles.dateTime}>{chatRoom.lastMessage.createdAt}</Text>
            </View>
            <Text 
                style={styles.message} 
                numberOfLines={1}>
                {chatRoom.lastMessage.content}
            </Text>
            </View>
        </Pressable>
    )
}

export default ChatRoomItem

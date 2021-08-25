import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import {useRoute, useNavigation} from '@react-navigation/core';

function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({title:'Elon Musk'})

    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <Message message={item}/>}
                inverted
            />
            <MessageInput/>
        </SafeAreaView>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        flex: 1,
    }
})
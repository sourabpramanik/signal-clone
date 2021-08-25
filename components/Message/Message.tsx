import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const myID = 'u1'

export default function Message({message}) {
    const firstPerson = message.user.id === myID;
    return (
        <View style={[styles.container, firstPerson ? styles.firstPerson : styles.otherPerson]}>
            <Text style={{
                color: firstPerson? '#000' :'#fff',
            }}>
                {message.content}
            </Text>
        </View>
    )
}

const blue = '#3872E9';
const grey = 'lightgrey';

const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:'75%',
    },
    firstPerson: {
        backgroundColor: 'lightgrey',
        marginLeft:'auto',
        marginRight:10,
    },
    otherPerson: {
        backgroundColor: '#3872E9',
        marginLeft:10,
        marginRight:'auto',
    }
})
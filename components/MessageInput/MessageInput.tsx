import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import { 
    FontAwesome5, 
    Feather, 
    MaterialCommunityIcons, 
    AntDesign,
    Ionicons} from '@expo/vector-icons';

const MessageInput = () => {
    const [inputMessage, setInputMessage] = useState('')
    
    const sendText=()=>{
        console.warn(inputMessage);    
    };

    const sendAttachments=()=>{
        console.warn('Attachments');    
    };
// 
    const onPress=()=>{
        if(inputMessage){
            sendText();
        }
        else{
            sendAttachments();
        }
    };

    return (
        <KeyboardAvoidingView style={styles.rootContainer}>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="smile-wink" size={24} color="#595959" style={styles.icons}/>
                <TextInput 
                style={styles.textInput}
                value={inputMessage}
                onChangeText={setInputMessage}
                placeholder="signal message..."
                />
                <Feather name="camera" size={24} color="#595959" style={styles.icons}/>
                <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icons}/>
            </View>
            <Pressable onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {inputMessage? <Ionicons name="send" size={24} color="white" />:<AntDesign name="plus" size={24} color="white" />}
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default MessageInput

const styles = StyleSheet.create({
rootContainer: {
    flexDirection: 'row',
    padding: 10,
},
inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight:10,
    borderRadius:25,
    justifyContent:'center',
    borderColor: '#dedede',
    borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
},
icons: {
    marginHorizontal:5,
},
textInput:{
    flex: 1,
    marginHorizontal:5,

},
buttonContainer: {
    width:40,
    height:40,
    backgroundColor: '#3872E9',
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText:{
    
    fontSize:25,
    color: 'white'
}
})
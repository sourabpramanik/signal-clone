import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({

container: {
  flexDirection: 'row',
  padding: 10,
  justifyContent: 'center',
},
userImg: {
  width: 60,
  height: 60,
  borderRadius:30,
},
badgeContainer: {
backgroundColor: '#3872E9',
width: 20,
height: 20,
borderRadius:10,
justifyContent: 'center',
alignItems: 'center',
position: 'absolute',
left:45,
top:10,
borderWidth:1,
borderColor: 'white'
},
badgeText: {
color: "white",
fontSize:12,
},
messageContainer:{
  paddingHorizontal: 10,
  flex: 1,
},
userContainer: {
  flexDirection: 'row',
  justifyContent:'space-between',
},
name: {
  fontSize: 16,
  fontWeight: 'bold',
},
dateTime: {
  color: 'grey',
},
message: {
  color: 'grey',
  marginTop: 3,
}
})

export default styles
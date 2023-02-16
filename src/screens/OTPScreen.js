import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const updateError = (error,stateUpdater) => {
    stateUpdater(error);
    setTimeout(()=> {
        stateUpdater('')
    },2500)
}
const OTPScreen = () => {
    const [enteredValue , setEnteredValue] = useState('')
    const [error, setError] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const handleInputFocus = (textinput) => {
        setIsFocused({
          [textinput]: true
        })
      }
      const handleInputBlur = (textinput) => {
        setIsFocused({
          [textinput]: false
        })
      }
      const submit = () => {
        if(enteredValue.length < 1) {
            return updateError('Please provide the OTP',setError)
        }
        console.log(enteredValue)
        navia
      }
    return(
        <View style={styles.container}>
            <View style={{marginTop : 100}}>
               <Text style={styles.firstHeading}>Salon App</Text>
            </View>
            <View>
                <Text style={styles.text}>Enter the OTP sent to </Text>
                <Text>user@gmail.com</Text>
            </View>
            <View>
                <TextInput 
                style={isFocused.email ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('email')}
                onBlur={()=> handleInputBlur('email')}
                keyboardType="numeric"
                onChangeText={(enteredValue) => setEnteredValue(enteredValue)}
                />
            </View>
            <View style={styles.button} >
                <Text 
                style={{color : 'white', fontSize :17}} onPress={submit} >verify</Text>
            </View>
            {error ? <Text style={{color : 'red', fontSize : 15, textAlign : 'center', marginTop : 70}}>{error}</Text> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        marginLeft: 35,
        flex : 1
    },
    firstHeading : {
        fontSize : 26,
        fontWeight : 'bold',
        paddingBottom : 25
    },
    text : {
        paddingBottom : 25,
        fontSize : 18
    },
    input : {
        borderWidth : 3,
        borderColor : '#E8E8E8',
        height : 50,
        width : 200,
        fontSize : 16,
        paddingLeft : 10,
        marginBottom :20,
        backgroundColor : '#E8E8E8',
        marginTop : 20,
    },
    button : {
        height : 40,
        width : 150,
        backgroundColor : '#3F4B8B',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginLeft : 5,

    },
})
export default OTPScreen
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {  StyleSheet, Text, TextInput, View, ScrollView, TouchableWithoutFeedback } from 'react-native';


const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}
const updateError = (error,stateUpdater) => {
    stateUpdater(error);
    setTimeout(()=> {
        stateUpdater('')
    },2500)
}

function  SignUpUserDetailsScreen  ()  {
    const [userInfo, setUserInfo] = useState({
        firstName : '',
        lastName : '',
        gender : '',
        dateOfBirth : ''
    })

    const [error, setError] = useState('')
    const {firstName, lastName, gender, dateOfBirth } = userInfo
    const handleOnTextChange = (value, fieldName) => {
        setUserInfo({...userInfo,[fieldName] : value})
    }
    const [isFocused, setIsFocused] = useState({
        firstName: false,
        lastName: false,
        gender: false,
        dateOfBirth : false
      })
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
      const isValidForm = () => {
        if(!isValidObjField(userInfo)) {
            return updateError('All Fields are required', setError)
        }
        if(!firstName.trim()  || firstName.length < 3) {
            return updateError('first name must be provide and should be greater than 3 characters', setError)
        }
        if(!lastName.trim()  || lastName.length < 3){
            return updateError('last name must be provide and should be greater than 3 characters', setError)
        }
        if(!dateOfBirth) {
             return updateError('Date of birth is needed', setError)
        }
        return true
      }
      const submitForm = ()=> {
        if(isValidForm()) {
            console.log(userInfo)
        }
      }
    
    return (
        <ScrollView>
            <TouchableWithoutFeedback>
        <View style={styles.container}>
            <View style={{marginBottom : 'auto', marginTop : 50}}>
               <Text style={styles.firstHeading}>Salon App</Text>
            <View style={{marginTop : 30, marginBottom : 30}}>
                <Text style={{fontSize : 40, fontWeight : 'bold' }}>Create account,</Text>
                <Text style={{fontSize : 21 }}>Sign up to get started</Text>
            </View>
            <Text style={{color : '#3F4B8B', fontSize : 20, marginVertical : 20}}>user@gmail.com</Text>
            <View >
                
                <TextInput 
                style={isFocused.firstName ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('firstName')}
                onBlur={()=> handleInputBlur('lastName')}
                onChangeText={(value)=>handleOnTextChange(value,'firstName')}
                placeholder='FirstName' />
                <TextInput 
                style={isFocused.lastName ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('lastName')}
                onBlur={()=> handleInputBlur('lastName')}
                onChangeText={(value)=>handleOnTextChange(value,'lastName')}
                placeholder='LastName' />
                <TextInput 
                style={isFocused.gender ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('gender')}
                onBlur={()=> handleInputBlur('gender')}
                onChangeText={(value)=>handleOnTextChange(value,'gender')}
                placeholder='Gender'/>
                <TextInput 
                style={isFocused.dateOfBirth ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('dateOfBirth')}
                onBlur={()=> handleInputBlur('dateOfBirth')}
                onChangeText={(value)=>handleOnTextChange(value,'dateOfBirth')}
                placeholder='Date of Birth'/>
            </View>
            <View style={styles.button}>
                <Text 
                style={{color : 'white', fontSize :17}}
                onPress={submitForm} >Save Details</Text>
            </View>
            <View>
            {error ? <Text style={{color : 'red', fontSize : 15, textAlign : 'center', marginTop : 70}}>{error}</Text> : null}
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
    },
    input : {
        borderWidth : 3,
        borderColor : '#E8E8E8',
        height : 60,
        width : 300,
        fontSize : 16,
        paddingLeft : 10,
        marginBottom :20,
        backgroundColor : '#E8E8E8'
    },
    button : {
        height : 55,
        width : 300,
        backgroundColor : '#3F4B8B',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,

    },
    firstHeading : {
        fontSize : 26,
        fontWeight : 'bold',
    }
 })

export default SignUpUserDetailsScreen;
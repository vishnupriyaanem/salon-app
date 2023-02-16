import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import {  StyleSheet, Text, TextInput, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}
const isValidEmail = (value) => {
    const regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regx.test(value)
}
const updateError = (error,stateUpdater) => {
    stateUpdater(error);
    setTimeout(()=> {
        stateUpdater('')
    },2500)
}

function  RegisterForm  ()  {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({
        email : '',
        password : '',
        confirmPassword : ''
    })
    const [error, setError] = useState('')
    const {email, password, confirmPassword } = userInfo
    const handleOnTextChange = (value, fieldName) => {
        setUserInfo({...userInfo,[fieldName] : value})
    }
    const [isFocused, setIsFocused] = useState({
        email: false,
        password: false,
        confirmPassword: false,
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
        if(!isValidEmail(email)) {
            return updateError('Please provide the valid emailId', setError)
        }
        if(!password.trim()  || password.length < 8){
            return updateError('password id less than 8 charcters', setError)
        }
        if(password !== confirmPassword) {
             return updateError('passwords are not same', setError)
        }
        return true
      }
      const submitForm = ()=> {
        if(isValidForm()) {
            console.log(userInfo)
            navigation.replace('verifyEmailScreen')

        }
      }

    return (
        <ScrollView>
            <TouchableWithoutFeedback>
        <View style={styles.container}>
            <View style={{marginBottom : 'auto', marginTop : 100}}>
               <Text style={styles.firstHeading}>Salon App</Text>
            <View style={{marginTop : 30, marginBottom : 55}}>
                <Text style={{fontSize : 40, fontWeight : 'bold' }}>Create account,</Text>
                <Text style={{fontSize : 21 }}>Sign up to get started</Text>
            </View>
            <View >
                
                <TextInput 
                style={isFocused.email ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('email')}
                onBlur={()=> handleInputBlur('email')}
                onChangeText={(value)=>handleOnTextChange(value,'email')}
                autoCapitalize = 'none'
                placeholder='Email' />
                <TextInput 
                style={isFocused.password ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('password')}
                onBlur={()=> handleInputBlur('password')}
                onChangeText={(value)=>handleOnTextChange(value,'password')}
                placeholder='Password' 
                secureTextEntry/>
                <TextInput 
                style={isFocused.confirmPassword ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}  
                onFocus={()=> handleInputFocus('confirmPassword')}
                onBlur={()=> handleInputBlur('confirmPassword')}
                onChangeText={(value)=>handleOnTextChange(value,'confirmPassword')}
                placeholder='Password again !'
                secureTextEntry/>
            </View>
            <View style={styles.button}>
                <Text 
                style={{color : 'white', fontSize :17}}
                onPress={submitForm} >create account</Text>
            </View>
            {error ? <Text style={{color : 'red', fontSize : 15, textAlign : 'center', marginTop : 70}}>{error}</Text> : null}
            </View>
        <View style = {{marginTop : 155 }}>
            <Text 
            style={{fontSize : 17}}>Already have an account? 
            <Text style={{color : '#3F4B8B',fontSize : 17,textDecorationLine:'underline'}}>Sign in</Text></Text>
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
        width : 250,
        backgroundColor : '#3F4B8B',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        marginLeft : 30,

    },
    firstHeading : {
        fontSize : 26,
        fontWeight : 'bold',
    }
 })

export default RegisterForm;
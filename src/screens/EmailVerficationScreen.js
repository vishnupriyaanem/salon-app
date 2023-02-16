import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const EmailVerificationScreen = ({navigation}) => {
    const submit = () => {
        navigation.replace('otpScreen')
    }
    return (
        <View style={styles.container}>
            <View style={{marginTop : 100}}>
               <Text style={styles.firstHeading}>Salon App</Text>
            </View>
            <View>
                <Text style={styles.text}>A link has been send to user@gmail.com to verify your email </Text>
            </View>
            <View style={{flexDirection : 'row', marginTop:25}}>
                <Text style={{marginTop : 25,paddingRight:20, fontSize :18}}>Go to OTP screen</Text>
                <Ionicons name="arrow-forward-circle"  size={70} color="#3F4B8B" onPress={submit}  />
            </View>
            

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
    }
})

export default EmailVerificationScreen
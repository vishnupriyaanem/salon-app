import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const ResetPasswordSuccessScreen = ({navigation}) => {
    const submit = () => {
        // navigation.replace('otpScreen')
    }
    return (
        <View style={styles.container}>
            <View style={{marginTop : 100}}>
               <Text style={styles.firstHeading}>Salon App</Text>
            </View>
            <View>
                <Text style={styles.text}>Password reset successful for  </Text>
                <Text style={{color : '#3F4B8B', fontSize : 20}}>user@gmail.com</Text>
            </View>
            <View style={{flexDirection : 'row', marginTop : 35}}>
                <Text style={{marginTop : 20, paddingRight:20, fontSize :18}}>Back to Login</Text>
                <Ionicons name="arrow-back-circle"  size={70} color="#3F4B8B" />
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
        marginBottom : 125
    },
    text : {
        fontSize : 20
    }
})

export default ResetPasswordSuccessScreen
// import React, { useState } from 'react'
// import { StyleSheet, Text, TextInput, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

// const LoginForm = () => {
//       return (
//             <ScrollView>
//                   <TouchableWithoutFeedback>
//                   <View style={styles.container}>
//             <View style={{marginBottom : 'auto', marginTop : 100}}>
//                <Text style={styles.firstHeading}>Salon App</Text>
//             <View style={{marginTop : 30, marginBottom : 55}}>
//                 <Text style={{fontSize : 40, fontWeight : 'bold' }}>Welcom</Text>
//                 <Text style={{fontSize : 21 }}>Sign in to continue</Text>
//             </View>
//             <View >

//                 <TextInput
//                 style={isFocused.email ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}
//                 onFocus={()=> handleInputFocus('email')}
//                 onBlur={()=> handleInputBlur('email')}
//                 onChangeText={(value)=>handleOnTextChange(value,'email')}
//                 autoCapitalize = 'none'
//                 placeholder='Email' />
//                 <TextInput
//                 style={isFocused.password ? [styles.input, {borderColor : '#3F4B8B'}] : styles.input}
//                 onFocus={()=> handleInputFocus('password')}
//                 onBlur={()=> handleInputBlur('password')}
//                 onChangeText={(value)=>handleOnTextChange(value,'password')}
//                 placeholder='Password'
//                                                 secureTextEntry />
//                  <Text>Forgot Password</Text>

//             </View>
//             <View style={styles.button}>
//                 <Text
//                 style={{color : 'white', fontSize :17}}
//                 onPress={submitForm} >create account</Text>
//             </View>
//             <View>
//             {error ? <Text style={{color : 'red', fontSize : 15, textAlign : 'center', marginTop : 70}}>{error}</Text> : null}
//             </View>
//             </View>
//         <View style = {{marginTop : 180}}>
//             <Text
//             style={{fontSize : 17}}>Already have an account?
//             <Text style={{color : '#3F4B8B',fontSize : 17,textDecorationLine:'underline'}}>Sign in</Text></Text>
//         </View>
//         </View>
//                   </TouchableWithoutFeedback>
//           </ScrollView>
//       )
// }

// const styles = StyleSheet.create({
//       container : {
//             justifyContent : 'center',
//             alignItems : 'center',
//             flex : 1
//       },
//       input : {
//             borderWidth : 3,
//             borderColor : '#E8E8E8',
//             height : 50,
//             width : 300,
//             fontSize : 16,
//             paddingLeft : 10,
//             marginBottom :20,
//             backgroundColor : '#E8E8E8'
//       },
//       button : {
//             height : 40,
//             width : 250,
//             backgroundColor : '#3F4B8B',
//             justifyContent : 'center',
//             alignItems : 'center',
//             borderRadius : 8,
//             marginLeft : 30,

//         },
//       firstHeading : {
//             fontSize : 26,
//             fontWeight : 'bold',
//           },
// },

// )

// export default LoginForm;

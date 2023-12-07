// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Pressable, ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image, ImageBackground, } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// console.log(StatusBar.currentHeight);

console.log(Platform.OS);
export  function UserLogin() {

  return (
    <ImageBackground source={{ uri: "https://media.istockphoto.com/id/1299730469/photo/fingerprint-biometric-authentication-button-digital-security-concept.jpg?b=1&s=612x612&w=0&k=20&c=EiPAa0IrFQ1MBXRv1_B8zlh99UXakb9jRHtEMBaYZbw=" }} blurRadius={Platform.OS === 'android' ? 8 : 5} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: "https://media.istockphoto.com/id/1266559436/photo/lock-icon-cyber-security-of-digital-data-network-protection-high-speed-connection-data.jpg?b=1&s=612x612&w=0&k=20&c=d-qCwAHciWO6Q7Cw7eUn1PXTfpf907FESjSnnjzBO8g=" }} blurRadius={Platform.OS === 'android' ? 4 : 5} style={{ width: "27%", height: 150, marginTop: 20 }}></Image>

          </View>
          <View style >
            <Text style={{ fontSize: 40, textAlign: 'center', color: 'blue', paddingBottom: 50, }} > Google Security</Text>
            <TextInput placeholder='Enter your Username or Email'
              style={{ borderWidth: 3, padding: 10, borderRadius: 30, fontSize: 40, color: 'white' }} />
            <View style={{ paddingTop: 40, paddingBottom: 40 }}>
              <TextInput placeholder='Enter Password'
                style={{ borderWidth: 3, padding: 10, borderRadius: 30, fontSize: 40, color: 'white' }} />
              <View style={styles.Button}>

                <Button
                  title='     LOGIN    ' />
              </View>
              <View >

                <Button
                  title='    SIGNUP     ' />


              </View>
              <View style={styles.Button2}>
<TouchableOpacity><Text> forget password? </Text></TouchableOpacity>


              </View>
              <View>
                <Text></Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    alignItems: 'center',
  },
  Button: {
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  Button2: {
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',

  },



})
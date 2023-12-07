// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// console.log(StatusBar.currentHeight);

console.log(Platform.OS);
export default function App() {
// cost[Number,setNumber]= useState(0)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.header}>Hello React Native</Text>
          <Image source={{ uri: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=300" }} style={{ width: "100%", height: 380 }} />
          <ImageBackground source={{ uri: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=300" }} style={{ width: "100%", height: 580, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: "center" }}> Welcome to the world of mobile Development</Text>
          <TextInput placeholder='Enter your name'
          style={{borderWidth:1,padding:10, borderRadius:10, fontSize:16}}/>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: 'black',

  },
  header: {
    color: "green",
    fontSize: 30,
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20
  },
  bg: {
    width: "100%",
    height: 580,
    marginTop: 20,
    justifyContent: "center"
  }
});

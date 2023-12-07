import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";
export function Position() {
    return (
        <SafeAreaView styles={styles.container}>
            <View styles={styles.parent}>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
                <View styles={styles.child}></View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "andriod" ? StatusBar.currentHeight : null,
    },
    parent: {
        backgroundColor: 'white',
        width: "100%",
        height: 400,
        padding: 10,
        flexWrap: 'wrap-reverse',
    },
    child: {
        backgroundColor: "black",
        width: 100,
        height: 100,
        margin: 3,
        // bottom:0,
        // position:'absolute',
    },
})
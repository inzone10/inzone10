import { useState, } from 'react';
import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView ,Alert} from 'react-native';

export function TodoList() {

    const [text, setText] = useState("");
    const [list, setList] = useState([])


    console.log(list)
    function AddItem() {
        setList((pre) => [...pre, { text: text, date: new Date().getTime() }]);
        // ToastAndroid.show("item has been added successfuly",ToastAndroid.SHORT)
        Alert.alert(
            "item has been added successfuly",
            [{ text: "done", onPress: () => console.log(("btn tapped")) }]
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 40, textAlign: 'center', color: 'blue', paddingBottom: 50, }} > Todo List</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: "center" }}> Welcome to the world of mobile Development</Text>
                <TextInput placeholder='Enter your name'
                    style={styles.input}
                    placeholderTextColor='green'
                    onChangeText={(inp) => { setText(inp) }} />
                <Text style={{ marginTop: 5 }}>{text}</Text>
                <View style={{ paddingTop: 20 }}>
                    {/* <TouchableOpacity onPress={(Input) => { console.log(`${text} , ${min} minutes ago`) }} */}
                    <TouchableOpacity onPress={AddItem}
                        style={{
                            backgroundColor: 'green',
                            borderRadius: 30,
                            padding: 10,
                            alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white', fontWeight: "bold" }}>
                            Add To List
                        </Text>


                    </TouchableOpacity>

                    <FlatList
                        style={{ flex: 1 }}
                        data={list}
                        renderItem={({ item }) => {
                            return (
                                <View stles={styles.renderView}>
                                    <Text>{item.text}</Text>
                                    <View style={styles.row}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text>28/11/23</Text>
                                        <Text style={{ color: 'white' }}>Delete</Text>
                                    </TouchableOpacity>

                                    </View>
                                </View>
                            )
                        }}
                        key={(item) => item.date}
                    />
                </View>

            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        color: 'green',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 20
    },
    renderView: {
        borderColor: 'green',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 5
    },
    btn: {
        backgroundColor: "red",
        padding: 4,
        borderRadius: 50,
        paddingHorizontal: 13
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
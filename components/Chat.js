import * as React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from 'react-native';

export default function Chat() {
    return (
        <View style={styles.chatContainer}>
            <ScrollView style={styles.chatContainerBubbles}>
                <Text>jaööp</Text>
                <Text>jaööp</Text>
            </ScrollView>
            <View style={styles.chatContainerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Type something...'>
                </TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chatContainer: {
        height: "100%",
        flexDirection: "column",
        backgroundColor: "red",
        display: "flex",
    },
    chatContainerBubbles: {
        backgroundColor: "green",
        flexGrow: 55,
        flexBasis: "auto",
    },
    chatContainerInput: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "darkgrey",
        maxWidth: "100%",
        flexGrow: 5,
        //kritisch
        paddingBottom: 11,
    },
    input: {
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        flexGrow: 6,
    },
    button: {
        margin: 12,
        height: 40,
        width: 60,
        backgroundColor: '#2196F3',
        borderRadius: 15,
        flexGrow: 1,
    },
    buttonText: {
        textAlign: 'center',
        padding: 11,
        color: 'white'
    }
})
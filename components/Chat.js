import * as React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

export default function Chat() {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TextInput
                style={styles.input}
                placeholder='Type something...'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    }
})
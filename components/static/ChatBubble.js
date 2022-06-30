import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ChatBubble(props) {
  return (
    <View style={[styles.ChatBubble, props.writer ? styles.ChatBubbleWriter : styles.ChatBubbleReciever]}>
        <Text>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    ChatBubble: {
        height: 40,
        margin: 12,
        maxWidth: "66%",
        borderWidth: 1,

        borderRadius: 8,

        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#7cc7f2",

        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,

        height: "auto"
    },
    ChatBubbleWriter: {
        borderBottomEndRadius: 0,
        backgroundColor: "#7cc7f2",
        alignSelf: "flex-end"
    },
    ChatBubbleReciever: {
        backgroundColor: "#7cf287",
        borderBottomLeftRadius: 0,
        alignSelf: "flex-start"
    }
})
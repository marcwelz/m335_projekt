import * as React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

export default function ChatListComponent(props) {
  return (
    <View 
        style={styles.ChatListContainer}
    >
        <Image
            style={styles.imageStyle}
            source={require("../../assets/profile_icon.png")} />
        <View style={{paddingLeft: 6}}>
            <Text style={styles.chatContant}>{props.contact}</Text>
            <Text>{props.latestText}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ChatListContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        width: "100%",
        maxWidth: 450,
        height: 66,
        padding: 6,
        backgroundColor: "white",

        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    imageStyle: {
        width: 54, 
        height: 54
    },
    chatContant: {
        fontWeight: "bold",
    },
    
})
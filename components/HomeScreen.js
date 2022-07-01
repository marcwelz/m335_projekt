import * as React from 'react';
import {Button, StyleSheet, View, TouchableOpacity} from 'react-native';
import ChatListComponent from './static/ChatListComponent';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.touchLink}
        onPress={() => navigation.navigate('Chat')}
        >
        <ChatListComponent onPress={() => navigation.navigate('Chat')} contact="Marc Welz" latestText="Chunsch huette no?"></ChatListComponent>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchLink}
        onPress={() => navigation.navigate('Chat')}
        >
        <ChatListComponent contact="Liam Simfick" latestText="Niemrt mag dich"></ChatListComponent>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchLink: {
    maxWidth: 450, 
    width: "100%"
  }
})

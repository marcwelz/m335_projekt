import * as React from 'react';
import {useState, useEffect} from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import ChatListComponent from './static/ChatListComponent';

export default function HomeScreen({navigation}) {
  const [contacts, setContacts] = useState() 

  useEffect(() => {
    setContacts(tmpData)
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {contacts ? contacts.map(contact =>
        <TouchableOpacity
          style={styles.touchLink}
          onPress={() => navigation.navigate('Chat')}
        >
          <ChatListComponent contact={contact.name} latestText={contact.latestText}></ChatListComponent>
        </TouchableOpacity>
      ) : <Text>Contacts not loaded yet</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  touchLink: {
    maxWidth: 450, 
    width: "100%"
  }
})

const tmpData = [
  {
    "name": "Marc Welz",
    "latestText": "Chunsch huette no?"
  },
  {
    "name": "Liam Simfick",
    "latestText": "niemrt mag dich"
  }
]
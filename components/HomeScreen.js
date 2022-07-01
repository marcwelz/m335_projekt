import * as React from 'react';
import {useState, useEffect} from "react";
import {Text, StyleSheet, View, TouchableOpacity, Button, Modal} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ChatListComponent from './static/ChatListComponent';

export default function HomeScreen({navigation}) {
  const [contacts, setContacts] = useState() 
  const [isModalOpen, setModalStatus] = useState(false)
  const [contactName, setContactName] = useState(null)

  useEffect(() => {
    setContacts(tmpData)
  }, [])

  function handleSubmit() {
    if(contactName !== "") {
      const tmpObj = {
        "name": contactName,
        "latestText": "null"
      }

      setContacts([...contacts, tmpObj])
      setContactName("")
      setModalStatus(false)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View>
        <Button title='Add Contact' onPress={() => setModalStatus(true)} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalOpen}
          onRequestClose={() => {
            setModalStatus(false);
          }}
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Add Contact</Text>
            <TextInput
              style={[styles.input_text, {marginTop: 10}]}
              onChangeText={setContactName}
              value={contactName}
              placeholder="Enter Name..."
            />
            <Button title='submit' onPress={() => handleSubmit()} />
          </View>
        </View>
        </Modal>
      </View>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input_text: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
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
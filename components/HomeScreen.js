import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Button title="Chat" onPress={() => navigation.navigate('Chat')}/>
    </View>
  );
}
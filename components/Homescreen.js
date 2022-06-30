import * as React from 'react';
import { StatusBar, View } from 'react-native';
import TaskButton from './static/TaskButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Homescreen</Text>
    </View>
  );
}
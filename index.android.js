// Importe library to help create a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';


// Create a a component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
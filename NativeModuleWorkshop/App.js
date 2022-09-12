import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import AlertModule from './Alert';

function App() {
  const onPress = () => {
    AlertModule.alert('Hello World');
    console.log({
      string: AlertModule.STRING_VALUE,
      number: AlertModule.NUMBER_VALUE,
    });
  };

  return (
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;

import React from 'react';
import {
  Button, SafeAreaView,
  StyleSheet, Text, TextInput,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={() => console.log('클릭!!')}></Button>
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'red',
    margin: '10%',
    marginHorizontal: 10,
    marginVertical: 560,
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';

import AnimatedLoadingButton from './lib/';

const App = () => {
  let buttonRef = React.useRef<AnimatedLoadingButton>(null);

  const onPress = () => {
    buttonRef?.current?.setLoading(true);

    setTimeout(() => {
      buttonRef?.current?.setLoading(false);
    }, 3000);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <SafeAreaView style={styles.container}>
        <AnimatedLoadingButton
          containerStyle={styles.submitButtonContainer}
          buttonStyle={styles.submitButton}
          title="Disabled"
          titleStyle={styles.submitText}
          ref={buttonRef}
          onPress={onPress}
          disabled={true}
        />
        <View style={styles.divide} />
        <AnimatedLoadingButton
          containerStyle={styles.submitButtonContainer}
          buttonStyle={styles.submitButton}
          title="Submit"
          titleStyle={styles.submitText}
          ref={buttonRef}
          onPress={onPress}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  divide: {
    height: 50,
  },
  submitButtonContainer: {
    height: 40,
    width: 150,
  },
  submitButton: {
    backgroundColor: '#0D6CEC',
    borderRadius: 50,
  },
  submitText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default App;


import { Colors } from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const createPlaylist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>create playlist</Text>
      </View>
    </SafeAreaView>
  );
};

export default createPlaylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.dark.text,
    fontFamily: Fonts.bold,
    fontSize: 24,
  },
});

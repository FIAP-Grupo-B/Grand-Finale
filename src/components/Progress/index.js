import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

const Progress = ({ porcent }) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerBar}>
          <View style={[styles.progressBar, { width: `${porcent}%` }]} />
        </View>
        <Text style={styles.progressText}>{`${porcent}%`}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  containerBar: {
    width: 150,
    height: 7,
    flexDirection: 'row',
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6bb314',
    borderRadius: 5
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#6bb314',
    marginLeft: 15
  },
});

export default Progress;

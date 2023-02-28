import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const ItemWithStepper = ({ name, value, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.stepper}>
        <Button
          title="-"
          onPress={onDecrement}
          buttonStyle={styles.stepperButton}
          icon={<Icon name="minus" type="font-awesome" size={18} />}
        />
        <Text style={styles.stepperText}>{value}</Text>
        <Button
          title="+"
          onPress={onIncrement}
          buttonStyle={styles.stepperButton}
          icon={<Icon name="plus" type="font-awesome" size={18} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperButton: {
    borderRadius: 50,
    width: 30,
    height: 30,
    marginRight: 8,
  },
  stepperText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemWithStepper;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Vstack component
const VStack = ({ children }) => {
  return (
    <View style={styles.vStack}>
      {children}
    </View>
  );
};

// Hstack component
const HStack = ({ children }) => {
  return (
    <View style={styles.hStack}>
      {children}
    </View>
  );
};

// Spacer component
const Spacer = ({ height = 16 }) => {
  return (
    <View style={{ height, flex: 1 }} />
  );
};

// Section component
const Section = ({ title, children }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

// Form component
const Form = ({ children }) => {
  return (
    <View style={styles.form}>
      {children}
    </View>
  );
};


// ForEach component
const ForEach = ({ data = [], renderItem }) => {
  return (
    <>
      {data.map((item, index) => renderItem ? renderItem(item, index) : null)}
    </>
  );
};

const styles = StyleSheet.create({
  vStack: {
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
  },
  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
  },
  section: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 2,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
  },
});

export { VStack, HStack, Spacer, Section, Form, ForEach };
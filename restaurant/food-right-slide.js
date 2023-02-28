import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const SlideView = ({ children, width = 200 }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ]),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx < -50) {
          // Swipe left, hide slide view
          Animated.timing(pan, {
            toValue: { x: -width, y: 0 },
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dx > 50) {
          // Swipe right, show slide view
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        } else {
          // Not a swipe, reset position
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={[styles.content, { width }]}>{children}</View>
      <Animated.View
        style={[styles.slide, { transform: pan.getTranslateTransform() }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    height: '100%',
  },
  slide: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#eee',
    padding: 16,
    justifyContent: 'center',
  },
});

export default SlideView;

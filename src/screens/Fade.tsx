import {Animated, View, Button} from 'react-native';
import React from 'react';
import {useFade} from '../hooks/useFade';

const Fade = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        gap: 10,
      }}>
      <Animated.View
        style={{
          borderColor: 'white',
          backgroundColor: '#084f6a',
          borderWidth: 10,
          width: 150,
          height: 150,
          opacity,
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default Fade;

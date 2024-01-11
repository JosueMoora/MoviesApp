/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet, Animated} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/Gradient';
import {useEffect} from 'react';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const Gradient = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secundary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 1, y: 0.1}}
        end={{x: 1, y: 0.7}}
      />
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secundary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 1, y: 0.1}}
          end={{x: 1, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default Gradient;

import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/listItems';
import {colors} from '../../theme/color';

export default function HiddenItem({
  leftActionActivated,
  rightActionActivated,
  swipeAnimatedValue,
}) {
  const rowHeightAnimatedValue = new Animated.Value(50);
  return (
    <Animated.View
      style={[
        styles.rowBack,
        {height: rowHeightAnimatedValue},
        leftActionActivated,
      ]}>
      {!rightActionActivated && (
        <Animated.View style={[styles.backLeftBtn, styles.backRightBtnLeft]}>
          <TouchableOpacity
            style={[styles.backLeftBtn, styles.backRightBtnLeft]}>
            <Animated.View
              style={[
                styles.icon,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [45, 90],
                        outputRange: [0, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              <Ionicons
                name="checkmark-done"
                color={colors.textWhite}
                size={24}
              />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}

      {!leftActionActivated && (
        <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight]}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <Animated.View
              style={[
                styles.trash,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              <Ionicons name="trash-bin" color={colors.textWhite} size={24} />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </Animated.View>
  );
}

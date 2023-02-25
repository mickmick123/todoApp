import React from 'react';
import {Text, Animated, View} from 'react-native';
import styles from '../../styles/listItems';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/color';

export default function VisibleItem({data, isCompleted}) {
  return (
    <Animated.View style={[styles.rowFront]}>
      <View style={styles.innerItem}>
        <Text
          style={!isCompleted ? styles.itemTitle : styles.itemTitleCompleted}>
          {data.item.name}
        </Text>
      </View>
      <Text
        style={
          !isCompleted
            ? styles.itemDescription
            : styles.itemDescriptionCompleted
        }>
        {data.item.description}
      </Text>
      <View style={styles.instructionContainer}>
        <View style={styles.instructionItem}>
          <AntDesign name="left" color={colors.border} size={16} />
          <Text style={styles.instructionText}>Slide to delete</Text>
        </View>
        {!isCompleted && (
          <View style={styles.instructionItem}>
            <Text style={styles.instructionText}>Slide to complete</Text>
            <AntDesign name="right" color={colors.border} size={16} />
          </View>
        )}
      </View>
    </Animated.View>
  );
}

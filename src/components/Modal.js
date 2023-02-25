import React, {useState} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import styles from '../styles/filterModal';
import CheckBox from '@react-native-community/checkbox';
import {useSelector} from 'react-redux';

const FilterModal = ({onSort, modalVisible}) => {
  const {sortItemsList} = useSelector(state => state.todo);
  const [sortItems, setSortItems] = useState(sortItemsList || []);
  const checkItems = (item, val) => {
    if (val) {
      setSortItems(items => [...items, item]);
    } else {
      const arrayObj = sortItems.filter(function (sort) {
        return sort !== item;
      });
      setSortItems(arrayObj);
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.sortItem}>
              <CheckBox
                value={sortItems.includes('priority')}
                onValueChange={newValue => checkItems('priority', newValue)}
              />
              <Text>Priority</Text>
            </View>
            <View style={styles.sortItem}>
              <CheckBox
                value={sortItems.includes('name')}
                onValueChange={newValue => checkItems('name', newValue)}
              />
              <Text>Name</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onSort(!modalVisible, sortItems)}>
              <Text style={styles.textStyle}>Filter Tasks</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterModal;

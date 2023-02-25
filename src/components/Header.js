import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateFilter} from '../store/actions/tasks';
import styles from '../styles/header';
import FloatingButton from './FloatingButton';
import FilterModal from './Modal';
import PageTitle from './PageTitle';

const Header = ({title, onPress, icon, hasTab, canSort}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {tasks, completedTasks} = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const onSort = (visible, sortItem) => {
    setModalVisible(visible);
    dispatch(updateFilter(sortItem));
  };

  return (
    <View style={hasTab ? styles.header : styles.headerNoTab}>
      <PageTitle title={title} />
      <View style={styles.recordedTasks}>
        <Text style={styles.taskCountHeader}>
          Active:{' '}
          <Text style={styles.taskCountTotal}>
            {(tasks && tasks.length) || 0}
          </Text>
        </Text>
        <Text style={styles.taskCountHeader}>
          Completed:{' '}
          <Text style={styles.taskCountTotal}>
            {(completedTasks && completedTasks.length) || 0}
          </Text>
        </Text>
      </View>
      <FloatingButton icon={icon} onPress={onPress} />
      {canSort && (
        <FloatingButton
          icon="filter"
          onPress={() => setModalVisible(true)}
          style={styles.sortButton}
        />
      )}
      <FilterModal modalVisible={modalVisible} onSort={onSort} />
    </View>
  );
};

export default Header;

import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import {Screen} from '../components/Screen';
import {useDispatch, useSelector} from 'react-redux';
import ListItems from '../components/ListItems';
import {deleteTask, updateTasksCompleted} from '../store/actions/tasks';
import styles from '../styles/base';
import {View, Text} from 'react-native';

const TodoList = ({navigation}) => {
  const {tasks} = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const deleteRow = rowKey => {
    dispatch(deleteTask(rowKey));
  };

  const moveToComplete = rowKey => {
    const isolatedData = tasks.find(item => item.key === rowKey);
    dispatch(updateTasksCompleted(isolatedData));
    deleteRow(rowKey);
  };

  return (
    <Container>
      <Header
        title="Todo Lists"
        onPress={() => navigation.navigate('AddTask')}
        icon="pluscircle"
        hasTab={true}
        canSort={true}
      />
      <Screen preset="fixed" safeAreaEdges={['top', 'bottom']}>
        {tasks && tasks.length ? (
          <ListItems
            listItem={tasks}
            deleteRow={deleteRow}
            moveToComplete={moveToComplete}
            isActiveList={true}
          />
        ) : (
          <View style={styles.defaultList}>
            <Text style={styles.defaultListText}>No Active Tasks</Text>
          </View>
        )}
      </Screen>
    </Container>
  );
};

export default TodoList;

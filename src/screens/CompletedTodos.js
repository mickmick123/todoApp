import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import {Screen} from '../components/Screen';
import {useDispatch, useSelector} from 'react-redux';
import ListItems from '../components/ListItems';
import {deleteCompletedTask} from '../store/actions/tasks';
import {Text, View} from 'react-native';
import styles from '../styles/base';

const CompletedTodos = ({navigation}) => {
  const {completedTasks} = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const deleteRow = rowKey => {
    dispatch(deleteCompletedTask(rowKey));
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
        {completedTasks && completedTasks.length ? (
          <ListItems
            listItem={completedTasks}
            deleteRow={deleteRow}
            isActiveList={false}
          />
        ) : (
          <View style={styles.defaultList}>
            <Text style={styles.defaultListText}>No Completed Tasks</Text>
          </View>
        )}
      </Screen>
    </Container>
  );
};

export default CompletedTodos;

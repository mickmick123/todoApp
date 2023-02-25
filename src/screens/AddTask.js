import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import AddButton from '../components/AddButton';
import Container from '../components/Container';
import Header from '../components/Header';
import {Screen} from '../components/Screen';
import styles from '../styles/base';
import CheckBox from '@react-native-community/checkbox';
import {useValidation} from 'react-native-form-validator';
import uuid from 'react-native-uuid';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../store/actions/tasks';

const AddTask = ({navigation}) => {
  const [isPriority, setPriority] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const {validate, isFieldInError, getErrorsInField, isFormValid} =
    useValidation({
      state: {name, description},
    });

  const _onSubmit = () => {
    validate({
      name: {minlength: 20, required: true},
      description: {minlength: 50, required: true},
    });
    if (isFormValid()) {
      const newTask = {
        key: uuid.v4(),
        name: name,
        description: description,
        priority: isPriority,
      };
      dispatch(addNewTask(newTask));
      setName('');
      setDescription('');
      setPriority(false);
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Header
        title="Add Task"
        onPress={() => navigation.goBack()}
        icon="back"
        hasTab={false}
      />
      <Screen preset="auto" safeAreaEdges={['top', 'bottom']}>
        <View style={styles.addContainer}>
          <TextInput
            placeholder="Name"
            style={styles.textInput}
            value={name}
            maxLength={40}
            onChangeText={value => setName(value)}
          />
          <View style={styles.errorContainer}>
            {isFieldInError('name') && (
              <Text style={styles.errorMessage}>
                {getErrorsInField('name')[0]}
              </Text>
            )}
          </View>

          <View style={styles.textInputMulti}>
            <TextInput
              placeholder="Description"
              editable
              multiline
              numberOfLines={4}
              maxLength={400}
              value={description}
              onChangeText={value => setDescription(value)}
            />
          </View>
          <View style={styles.errorContainer}>
            {isFieldInError('description') && (
              <Text style={styles.errorMessage}>
                {getErrorsInField('description')[0]}
              </Text>
            )}
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              value={isPriority}
              onValueChange={value => setPriority(value)}
            />
            <Text>Priority</Text>
          </View>
          <AddButton title="Add Task" onPress={() => _onSubmit()} />
        </View>
      </Screen>
    </Container>
  );
};

export default AddTask;

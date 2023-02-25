import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../styles/base';
import {colors} from '../theme/color';
import TodoList from '../screens/TodoList';
import AddTask from '../screens/AddTask';
import CompletedTodos from '../screens/CompletedTodos';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FontAwesomeIcon = ({color, size}) => (
  <FontAwesome5 name="tasks" color={color} size={size} />
);

const IoniconsIcon = ({color, size}) => (
  <Ionicons name="md-checkmark-done-circle-sharp" color={color} size={size} />
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: colors.activeTab,
        tabBarStyle: styles.tabBackground,
      })}>
      <Tab.Screen
        name="Home"
        component={TodoList}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: FontAwesomeIcon,
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedTodos}
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: IoniconsIcon,
        }}
      />
    </Tab.Navigator>
  );
};
const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

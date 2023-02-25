import {
  FILTER_UPDATE,
  TASK_UPDATE_COMPLETED,
  ADD_TASK,
  DELETE_TASK,
  DELETE_COMPLETED_TASK,
} from '../constants';

export function updateFilter(tasks) {
  return {
    type: FILTER_UPDATE,
    payload: tasks,
  };
}

export function updateTasksCompleted(tasks) {
  return {
    type: TASK_UPDATE_COMPLETED,
    payload: tasks,
  };
}

export function addNewTask(tasks) {
  return {
    type: ADD_TASK,
    payload: tasks,
  };
}

export function deleteTask(key) {
  return {
    type: DELETE_TASK,
    payload: key,
  };
}

export function deleteCompletedTask(key) {
  return {
    type: DELETE_COMPLETED_TASK,
    payload: key,
  };
}

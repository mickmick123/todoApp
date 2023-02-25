import {objSort} from '../../utils/dynamicSort';
import {
  FILTER_UPDATE,
  TASK_UPDATE_COMPLETED,
  ADD_TASK,
  DELETE_COMPLETED_TASK,
  DELETE_TASK,
} from '../constants';
const initialState = {
  tasks: [],
  completedTasks: [],
  sortItemsList: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_UPDATE:
      return {
        ...state,
        sortItemsList: action.payload,
        tasks:
          action.payload.length && state.tasks?.length
            ? objSort(state.tasks, action.payload.reverse())
            : state.tasks,
        completedTasks:
          action.payload.length && state.completedTasks?.length
            ? objSort(state.completedTasks, action.payload.reverse())
            : state.completedTasks,
      };
    case TASK_UPDATE_COMPLETED:
      const {completedTasks} = state;
      const newCompletedArray = completedTasks || [];
      newCompletedArray.push(action.payload);
      return {
        ...state,
        completedTasks:
          state.sortItemsList && state.sortItemsList.length
            ? objSort(newCompletedArray, state.sortItemsList)
            : newCompletedArray,
      };
    case ADD_TASK:
      const {tasks} = state;
      tasks.push(action.payload);
      const newState = {tasks};
      return newState;
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.key !== action.payload),
      };
    case DELETE_COMPLETED_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter(
          item => item.key !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;

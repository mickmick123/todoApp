import React, {useEffect, useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import VisibleItem from './VisibleItem';
import HiddenItem from './HiddenItem';

export default function ListItems({
  listItem,
  deleteRow,
  moveToComplete,
  isActiveList,
}) {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(listItem);
  }, [listItem]);

  const onLeftActionStatusChange = rowMap => {
    moveToComplete(rowMap.key);
  };

  const onRightActionStatusChange = rowMap => {
    deleteRow(rowMap.key);
  };

  return (
    <SwipeListView
      disableRightSwipe={!isActiveList}
      data={listData}
      renderItem={data => (
        <VisibleItem data={data} isCompleted={!isActiveList} />
      )}
      renderHiddenItem={() => <HiddenItem />}
      leftOpenValue={150}
      rightOpenValue={-150}
      leftActivationValue={250}
      rightActivationValue={-250}
      leftActionValue={500}
      rightActionValue={-500}
      onLeftActionStatusChange={onLeftActionStatusChange}
      onRightActionStatusChange={onRightActionStatusChange}
    />
    // :
    // <FlatList
    //     data={listData}
    //     renderItem={(item) =>  <VisibleItem data={item} isCompleted={true}/>}
    //     keyExtractor={item => item.key}
    // />
  );
}

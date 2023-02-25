import {useSafeAreaInsets} from 'react-native-safe-area-context';

const propertySuffixMap = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Start',
  right: 'End',
  start: 'Start',
  end: 'End',
};

const edgeInsetMap = {
  start: 'left',
  end: 'right',
};

export function useSafeAreaInsetsStyle(safeAreaEdges, property) {
  const insets = useSafeAreaInsets();

  return safeAreaEdges?.reduce((acc, e) => {
    return {
      ...acc,
      [`${property}${propertySuffixMap[e]}`]: insets[edgeInsetMap[e] ?? e],
    };
  }, {});
}

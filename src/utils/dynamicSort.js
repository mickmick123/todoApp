export function objSort() {
  var args = arguments,
    array = args[0],
    keys_length,
    key,
    a,
    b,
    i;

  keys_length = arguments[0].length;

  return array.sort(function (obj1, obj2) {
    for (i = 1; i < keys_length; i++) {
      key = args[i];
      if (typeof key !== 'string') {
        key = key[0];
        a = obj1[args[i][0]];
        b = obj2[args[i][0]];
      } else {
        a = obj1[args[i]];
        b = obj2[args[i]];
      }

      if (typeof a === 'boolean') {
        return a === b ? 0 : a ? -1 : 1;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
    }
    return 0;
  });
}

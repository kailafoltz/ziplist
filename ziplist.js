const chars = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(list, list2) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(list[i]);
    newList.push(list2[i]);
  }
  return newList;
}
console.log(zipList(chars, numbers));

function zipListTheSimpleWay(list, list2) {
  return _.flatten(_.zip(list, list2));
}
console.log(zipListTheSimpleWay(chars, numbers));

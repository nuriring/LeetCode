/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
//  id가 같으면 arr2가 override
var join = function(arr1, arr2) {
  
    const merged = [...arr1, ...arr2].reduce((acc, item) => {
    const existing = acc.get(item.id) || {};
    acc.set(item.id, { ...existing, ...item });
    return acc;
    }, new Map());

  // id값으로 오름차순 정렬순 출력
  return Array.from(merged.values()).sort((a, b) => a.id - b.id);
};
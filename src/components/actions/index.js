export function addItem(item_to_add) {
  return { type: 'add-item', item_to_add: item_to_add }
}
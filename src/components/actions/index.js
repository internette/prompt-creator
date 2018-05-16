export function addItem(item_to_add) {
  return { type: 'add-item', item_to_add: item_to_add }
}

export function removeItem(item_to_remove) {
  return { type: 'remove-item', item_to_remove: item_to_remove }
}

export function updateValue(new_value) {
  return { type: 'update-value', new_value: new_value }
}

export function togglePalette(subject, btn_toggle) {
  return { type: 'set-palette-toggle', subject: subject, btn_toggle: (/true/i.test(btn_toggle)) }
}

export function setColor(subject, color_obj) {
  return { type: 'set-color', subject: subject, color_obj: color_obj }
}
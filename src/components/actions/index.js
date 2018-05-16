export function addItem(item_to_add) {
  return { type: 'add-item', item_to_add: item_to_add }
}

export function toggleTextPalette(text_btn_toggle) {
  return { type: 'set-text-palette-toggle', text_btn_toggle: (/true/i.test(text_btn_toggle)) }
}

export function toggleBGPalette(bg_btn_toggle) {
  return { type: 'set-background-palette-toggle', bg_btn_toggle: (/true/i.test(bg_btn_toggle)) }
}

export function setColor(subject, color_obj) {
  return { type: 'set-color', subject: subject, color_obj: color_obj }
}
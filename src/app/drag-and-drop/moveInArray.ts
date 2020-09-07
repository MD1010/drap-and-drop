import { Movie } from './movie';

export function moveItemsInArray<T = any>(array: T[], fromIndex: number, toIndex: number, selected: Movie[]) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  if (selected.length > 0) {
    const selectedItems: T[] = [];
    for (const item of selected) {
      const toPush = array[item.id];
      if (toPush) {
        selectedItems.push(toPush);
      }
    }
    for (let i = 0; i < selected.length; i++) {
      array.splice(array.indexOf(selectedItems[i]), 1);
    }
    // console.log('from: ', from);
    // console.log('to: ', to);

    let ch = to;
    if (from < to) {
      ch = ch - selectedItems.length + 1;
      if (ch < 0) {
        ch = to;
      }
    }
    // console.log('ch: ', ch);

    if (ch > array.length) {
      array.push(...selectedItems);
    } else {
      array.splice(ch, 0, ...selectedItems);
    }
    return;
  }

  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}

/** Clamps a number between zero and a maximum. */
function clamp(value: number, max: number): number {
  return Math.max(0, Math.min(max, value));
}

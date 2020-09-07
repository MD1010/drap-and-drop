import { Item } from '../models/item';

export const alterItemsArray = <T = any>(array: T[], fromIndex: number, toIndex: number, selected: Item[]) => {
  if (selected.length > 0) {
    const selectedItems: T[] = [];
    for (const item of selected) {
      const toPush = array[item.id];
      selectedItems.push(toPush);
    }
    for (let i = 0; i < selected.length; i++) {
      array.splice(array.indexOf(selectedItems[i]), 1);
    }

    array.splice(toIndex, 0, ...selectedItems);
  }
};

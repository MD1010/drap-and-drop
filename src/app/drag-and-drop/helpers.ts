import { Item } from '../models/item';

export const alterItemsArray = <T = any>(array: T[], fromIndex: number, toIndex: number, selected: Item[]) => {
  if (selected.length > 0) {
    const selectedItems: T[] = [...selected] as any;

    for (const item of selectedItems) {
      array.splice(array.indexOf(item), 1);
    }

    array.splice(toIndex, 0, ...selectedItems);
  }
};

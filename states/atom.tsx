import { atom, selector } from "recoil";

export const defaultState = atom<any>({
  key: "defaultState",
  default: ""
});

export const cardListState = atom<any[]>({
  key: "cardListState",
  default: []
})

export const charaterState = atom<number>({
  key: "charaterState",
  default: 0
});

export const characterFilterState = selector<any>({
  key: "characterFilterState",
  get: ({ get }) => {
    const characterId = get(charaterState);
    const cardList = get(cardListState);
    let _newList;
    if (characterId === 0) {
      _newList = cardList
    } else {
      _newList = cardList.filter(el => el.fkey === characterId);
    }
    return _newList;
  },
  set: ({ set }, newValue) => set(charaterState, newValue)
})
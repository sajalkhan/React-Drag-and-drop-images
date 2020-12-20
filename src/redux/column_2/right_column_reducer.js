import {
  ADD_RIGHT_CARD,
  MOVE_RIGHT_CARD,
  REMOVE_RIGHT_CARD,
  FILTER_IMAGE,
  UPDATE_IMAGE,
} from "./type";

import { addItemToCart } from "./cart.util";

const initialState = {
  images: [],
  loading: true,
};

const Reducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case MOVE_RIGHT_CARD: {
      const dragItem = state.images[payload.dragIndex];
      if (dragItem) {
        const Array = [...state.images];
        const prevItem = Array.splice(payload.hoverIndex, 1, dragItem);
        Array.splice(payload.dragIndex, 1, prevItem[0]);
        return {
          ...state,
          images: Array,
        };
      }
      return { ...state };
    }

    case ADD_RIGHT_CARD: {
      return {
        ...state,
        loading: false,
        images: addItemToCart(state.images, payload),
      };
    }
    case REMOVE_RIGHT_CARD: {
      return {
        ...state,
        images: state.images.filter((item, indx) => indx !== payload),
      };
    }
    case FILTER_IMAGE: {
      const { data, indx } = payload;

      let Allimages = { ...state };
      let item = {
        ...state.images[indx],
        blur: data.blur,
        brightness: data.brightness,
        sepia: data.sepia,
        grayscale: data.grayscale,
      };

      Allimages.images[indx] = item;

      return Allimages;
    }

    case UPDATE_IMAGE: {
      const { img, indx } = payload;

      let Allimages = { ...state };
      let data = {
        ...state.images[indx],
        img: img,
      };

      Allimages.images[indx] = data;
      return { ...state, Allimages };
    }
    default:
      return state;
  }
};

export default Reducer;

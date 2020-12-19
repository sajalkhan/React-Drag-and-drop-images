import { ADD_RIGHT_CARD, MOVE_RIGHT_CARD, REMOVE_RIGHT_CARD } from "./type";
import { addItemToCart } from "./cart.util";

const initialState = {
  loading: true,
  images: [],
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
    default:
      return state;
  }
};

export default Reducer;

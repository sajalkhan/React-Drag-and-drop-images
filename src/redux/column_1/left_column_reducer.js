import { LOAD_SUCCESS, MOVE_LEFT_CARD, REMOVE_LEFT_CARD } from "./type";

const initialState = {
  loading: true,
  images: null,
};

const Reducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        images: payload,
      };

    case MOVE_LEFT_CARD: {
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
    case REMOVE_LEFT_CARD: {
      return {
        ...state,
        images: state.images.filter((item) => item.img !== payload[0].img),
      };
    }
    default:
      return state;
  }
};

export default Reducer;

import reducer from "../redux/column_1/left_column_reducer";
import {
  LOAD_SUCCESS,
  MOVE_LEFT_CARD,
  REMOVE_LEFT_CARD,
} from "../redux/column_1/type";

describe(`test left column `, () => {
  const data = [
    {
      char_id: 1,
      img:
        "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    },
    {
      char_id: 2,
      img:
        "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    },
  ];

  const initialState = {
    loading: true,
    images: null,
  };

  const mockData = { ...initialState, images: data, loading: false };

  it("Should return default state", () => {
    const newState = reducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("run after data loaded successfully", () => {
    const newState = reducer(initialState, {
      type: LOAD_SUCCESS,
      payload: data,
    });

    expect(newState).toEqual(mockData);
  });

  it("run after remove left card", () => {
    const newState = reducer(mockData, {
      type: REMOVE_LEFT_CARD,
      payload: [data[0]],
    });

    expect(newState).toEqual({
      ...mockData,
      images: data.filter((item) => {
        item.img !== data[0].img;
      }),
    });
  });

  it("run after move left card", () => {
    let dragIndx = 0;
    let hoverIndx = 1;
    const newState = reducer(mockData, {
      type: MOVE_LEFT_CARD,
      payload: { dragIndx, hoverIndx },
    });

    expect(newState).toEqual({
      ...mockData,
      images: data,
    });
  });
});

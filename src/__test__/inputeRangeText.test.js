import React from "react";
import { shallow } from "enzyme";
import InputRange from "../component/inputRange";

const setUp = (props = {}) => {
  const component = shallow(<InputRange />);
  return component;
};

describe(`test settings modal`, () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("input range is available", () => {
    let wrapper = component.find("input");
    expect(wrapper.length).toEqual(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import ImageShape from "../component/imageShap";

const setUp = (props = {}) => {
  const component = shallow(<ImageShape />);
  return component;
};

describe(`test image shape component`, () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("img has available", () => {
    let wrapper = component.find("img");
    expect(wrapper.length).toEqual(1);
  });
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisYRotateCounterclockwise from "../../src/components/MdiAxisYRotateCounterclockwise.vue";

test("MdiAxisYRotateCounterclockwise snapshot", () => {
  const wrapper = mount(MdiAxisYRotateCounterclockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});

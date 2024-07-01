
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisYRotateClockwise from "../../src/components/MdiAxisYRotateClockwise.vue";

test("MdiAxisYRotateClockwise snapshot", () => {
  const wrapper = mount(MdiAxisYRotateClockwise, {});
  expect(wrapper.html()).toMatchSnapshot();
});

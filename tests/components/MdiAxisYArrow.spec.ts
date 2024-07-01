
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisYArrow from "../../src/components/MdiAxisYArrow.vue";

test("MdiAxisYArrow snapshot", () => {
  const wrapper = mount(MdiAxisYArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});

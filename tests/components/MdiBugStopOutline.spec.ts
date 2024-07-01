
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugStopOutline from "../../src/components/MdiBugStopOutline.vue";

test("MdiBugStopOutline snapshot", () => {
  const wrapper = mount(MdiBugStopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

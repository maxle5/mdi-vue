
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugPause from "../../src/components/MdiBugPause.vue";

test("MdiBugPause snapshot", () => {
  const wrapper = mount(MdiBugPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugOutline from "../../src/components/MdiBugOutline.vue";

test("MdiBugOutline snapshot", () => {
  const wrapper = mount(MdiBugOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

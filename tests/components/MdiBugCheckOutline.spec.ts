
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugCheckOutline from "../../src/components/MdiBugCheckOutline.vue";

test("MdiBugCheckOutline snapshot", () => {
  const wrapper = mount(MdiBugCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellMinusOutline from "../../src/components/MdiBellMinusOutline.vue";

test("MdiBellMinusOutline snapshot", () => {
  const wrapper = mount(MdiBellMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

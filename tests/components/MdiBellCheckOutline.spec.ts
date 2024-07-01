
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCheckOutline from "../../src/components/MdiBellCheckOutline.vue";

test("MdiBellCheckOutline snapshot", () => {
  const wrapper = mount(MdiBellCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

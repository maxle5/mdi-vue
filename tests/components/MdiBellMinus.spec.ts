
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellMinus from "../../src/components/MdiBellMinus.vue";

test("MdiBellMinus snapshot", () => {
  const wrapper = mount(MdiBellMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

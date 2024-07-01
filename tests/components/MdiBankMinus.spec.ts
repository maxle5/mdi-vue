
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankMinus from "../../src/components/MdiBankMinus.vue";

test("MdiBankMinus snapshot", () => {
  const wrapper = mount(MdiBankMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

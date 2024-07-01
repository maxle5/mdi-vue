
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantMinus from "../../src/components/MdiFlagVariantMinus.vue";

test("MdiFlagVariantMinus snapshot", () => {
  const wrapper = mount(MdiFlagVariantMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

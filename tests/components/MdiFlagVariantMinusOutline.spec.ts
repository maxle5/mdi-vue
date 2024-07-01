
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantMinusOutline from "../../src/components/MdiFlagVariantMinusOutline.vue";

test("MdiFlagVariantMinusOutline snapshot", () => {
  const wrapper = mount(MdiFlagVariantMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

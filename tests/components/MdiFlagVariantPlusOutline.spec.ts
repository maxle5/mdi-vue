
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantPlusOutline from "../../src/components/MdiFlagVariantPlusOutline.vue";

test("MdiFlagVariantPlusOutline snapshot", () => {
  const wrapper = mount(MdiFlagVariantPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantRemoveOutline from "../../src/components/MdiFlagVariantRemoveOutline.vue";

test("MdiFlagVariantRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFlagVariantRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

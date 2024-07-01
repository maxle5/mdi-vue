
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantRemove from "../../src/components/MdiFlagVariantRemove.vue";

test("MdiFlagVariantRemove snapshot", () => {
  const wrapper = mount(MdiFlagVariantRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});

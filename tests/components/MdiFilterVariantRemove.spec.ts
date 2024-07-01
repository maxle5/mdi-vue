
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterVariantRemove from "../../src/components/MdiFilterVariantRemove.vue";

test("MdiFilterVariantRemove snapshot", () => {
  const wrapper = mount(MdiFilterVariantRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});

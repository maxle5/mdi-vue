
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterVariantPlus from "../../src/components/MdiFilterVariantPlus.vue";

test("MdiFilterVariantPlus snapshot", () => {
  const wrapper = mount(MdiFilterVariantPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

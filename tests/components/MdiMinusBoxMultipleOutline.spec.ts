
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusBoxMultipleOutline from "../../src/components/MdiMinusBoxMultipleOutline.vue";

test("MdiMinusBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiMinusBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTableBoxMultipleOutline from "../../src/components/MdiFileTableBoxMultipleOutline.vue";

test("MdiFileTableBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiFileTableBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

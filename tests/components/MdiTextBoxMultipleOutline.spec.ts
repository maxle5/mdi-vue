
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxMultipleOutline from "../../src/components/MdiTextBoxMultipleOutline.vue";

test("MdiTextBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiTextBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpBoxMultipleOutline from "../../src/components/MdiHelpBoxMultipleOutline.vue";

test("MdiHelpBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiHelpBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

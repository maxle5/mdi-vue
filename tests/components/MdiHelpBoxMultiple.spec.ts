
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpBoxMultiple from "../../src/components/MdiHelpBoxMultiple.vue";

test("MdiHelpBoxMultiple snapshot", () => {
  const wrapper = mount(MdiHelpBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});

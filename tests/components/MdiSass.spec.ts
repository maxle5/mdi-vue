
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSass from "../../src/components/MdiSass.vue";

test("MdiSass snapshot", () => {
  const wrapper = mount(MdiSass, {});
  expect(wrapper.html()).toMatchSnapshot();
});

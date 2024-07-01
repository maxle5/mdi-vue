
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowDown from "../../src/components/MdiBookArrowDown.vue";

test("MdiBookArrowDown snapshot", () => {
  const wrapper = mount(MdiBookArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

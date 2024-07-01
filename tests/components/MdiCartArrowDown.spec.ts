
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartArrowDown from "../../src/components/MdiCartArrowDown.vue";

test("MdiCartArrowDown snapshot", () => {
  const wrapper = mount(MdiCartArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

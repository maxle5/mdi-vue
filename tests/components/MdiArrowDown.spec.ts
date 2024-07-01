
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDown from "../../src/components/MdiArrowDown.vue";

test("MdiArrowDown snapshot", () => {
  const wrapper = mount(MdiArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

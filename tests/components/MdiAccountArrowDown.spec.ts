
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowDown from "../../src/components/MdiAccountArrowDown.vue";

test("MdiAccountArrowDown snapshot", () => {
  const wrapper = mount(MdiAccountArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

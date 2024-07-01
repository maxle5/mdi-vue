
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableArrowDown from "../../src/components/MdiTableArrowDown.vue";

test("MdiTableArrowDown snapshot", () => {
  const wrapper = mount(MdiTableArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

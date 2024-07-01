
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthArrowDown from "../../src/components/MdiEarthArrowDown.vue";

test("MdiEarthArrowDown snapshot", () => {
  const wrapper = mount(MdiEarthArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

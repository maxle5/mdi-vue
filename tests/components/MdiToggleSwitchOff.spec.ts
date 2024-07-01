
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitchOff from "../../src/components/MdiToggleSwitchOff.vue";

test("MdiToggleSwitchOff snapshot", () => {
  const wrapper = mount(MdiToggleSwitchOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

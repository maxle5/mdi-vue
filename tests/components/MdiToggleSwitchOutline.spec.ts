
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitchOutline from "../../src/components/MdiToggleSwitchOutline.vue";

test("MdiToggleSwitchOutline snapshot", () => {
  const wrapper = mount(MdiToggleSwitchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

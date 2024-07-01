
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitch from "../../src/components/MdiToggleSwitch.vue";

test("MdiToggleSwitch snapshot", () => {
  const wrapper = mount(MdiToggleSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});

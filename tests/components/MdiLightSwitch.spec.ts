
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightSwitch from "../../src/components/MdiLightSwitch.vue";

test("MdiLightSwitch snapshot", () => {
  const wrapper = mount(MdiLightSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightSwitchOff from "../../src/components/MdiLightSwitchOff.vue";

test("MdiLightSwitchOff snapshot", () => {
  const wrapper = mount(MdiLightSwitchOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

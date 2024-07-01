
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSettingsOutline from "../../src/components/MdiTimerSettingsOutline.vue";

test("MdiTimerSettingsOutline snapshot", () => {
  const wrapper = mount(MdiTimerSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

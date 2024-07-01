
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmPanelOutline from "../../src/components/MdiAlarmPanelOutline.vue";

test("MdiAlarmPanelOutline snapshot", () => {
  const wrapper = mount(MdiAlarmPanelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

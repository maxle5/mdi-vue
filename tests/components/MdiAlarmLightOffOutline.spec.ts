
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmLightOffOutline from "../../src/components/MdiAlarmLightOffOutline.vue";

test("MdiAlarmLightOffOutline snapshot", () => {
  const wrapper = mount(MdiAlarmLightOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

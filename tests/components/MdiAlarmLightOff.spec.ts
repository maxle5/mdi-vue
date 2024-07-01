
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmLightOff from "../../src/components/MdiAlarmLightOff.vue";

test("MdiAlarmLightOff snapshot", () => {
  const wrapper = mount(MdiAlarmLightOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

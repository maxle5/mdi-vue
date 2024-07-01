
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmLightOutline from "../../src/components/MdiAlarmLightOutline.vue";

test("MdiAlarmLightOutline snapshot", () => {
  const wrapper = mount(MdiAlarmLightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

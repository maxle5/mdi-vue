
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmPlus from "../../src/components/MdiAlarmPlus.vue";

test("MdiAlarmPlus snapshot", () => {
  const wrapper = mount(MdiAlarmPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

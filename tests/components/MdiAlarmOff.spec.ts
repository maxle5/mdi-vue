
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmOff from "../../src/components/MdiAlarmOff.vue";

test("MdiAlarmOff snapshot", () => {
  const wrapper = mount(MdiAlarmOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmBell from "../../src/components/MdiAlarmBell.vue";

test("MdiAlarmBell snapshot", () => {
  const wrapper = mount(MdiAlarmBell, {});
  expect(wrapper.html()).toMatchSnapshot();
});

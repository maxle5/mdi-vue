
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmSnooze from "../../src/components/MdiAlarmSnooze.vue";

test("MdiAlarmSnooze snapshot", () => {
  const wrapper = mount(MdiAlarmSnooze, {});
  expect(wrapper.html()).toMatchSnapshot();
});

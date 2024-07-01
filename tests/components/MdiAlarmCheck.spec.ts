
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmCheck from "../../src/components/MdiAlarmCheck.vue";

test("MdiAlarmCheck snapshot", () => {
  const wrapper = mount(MdiAlarmCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});

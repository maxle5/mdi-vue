
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmMultiple from "../../src/components/MdiAlarmMultiple.vue";

test("MdiAlarmMultiple snapshot", () => {
  const wrapper = mount(MdiAlarmMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});

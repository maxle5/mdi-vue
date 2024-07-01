
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlarmPanel from "../../src/components/MdiAlarmPanel.vue";

test("MdiAlarmPanel snapshot", () => {
  const wrapper = mount(MdiAlarmPanel, {});
  expect(wrapper.html()).toMatchSnapshot();
});

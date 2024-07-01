
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorDashboard from "../../src/components/MdiMonitorDashboard.vue";

test("MdiMonitorDashboard snapshot", () => {
  const wrapper = mount(MdiMonitorDashboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});

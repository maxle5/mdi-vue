
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorMultiple from "../../src/components/MdiMonitorMultiple.vue";

test("MdiMonitorMultiple snapshot", () => {
  const wrapper = mount(MdiMonitorMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorVertical from "../../src/components/MdiMonitorVertical.vue";

test("MdiMonitorVertical snapshot", () => {
  const wrapper = mount(MdiMonitorVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorArrowDown from "../../src/components/MdiMonitorArrowDown.vue";

test("MdiMonitorArrowDown snapshot", () => {
  const wrapper = mount(MdiMonitorArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});

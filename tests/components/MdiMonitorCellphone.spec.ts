
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorCellphone from "../../src/components/MdiMonitorCellphone.vue";

test("MdiMonitorCellphone snapshot", () => {
  const wrapper = mount(MdiMonitorCellphone, {});
  expect(wrapper.html()).toMatchSnapshot();
});

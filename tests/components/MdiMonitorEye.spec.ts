
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorEye from "../../src/components/MdiMonitorEye.vue";

test("MdiMonitorEye snapshot", () => {
  const wrapper = mount(MdiMonitorEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});

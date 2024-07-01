
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorOff from "../../src/components/MdiMonitorOff.vue";

test("MdiMonitorOff snapshot", () => {
  const wrapper = mount(MdiMonitorOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

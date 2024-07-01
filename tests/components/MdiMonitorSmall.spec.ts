
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorSmall from "../../src/components/MdiMonitorSmall.vue";

test("MdiMonitorSmall snapshot", () => {
  const wrapper = mount(MdiMonitorSmall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
